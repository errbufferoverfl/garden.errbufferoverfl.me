/**
 * @module
 * @author errbufferoverfl
 * Obsidian QuickAdd script that updates the page number of the book note the user is on.
 */

/**
 * The metadata key that should be updated by the user.
 * @type {string}
 * @default "current"
 */
const PAGE_NUMBER_KEY = "current";

/**
 * Whether the daily note should be updated to track the number of pages read in a day.
 * @type {boolean}
 * @default true
 */
const UPDATE_DAILY_NOTE = true;

/**
 * The metadata key in the daily note that is used to track the number of pages read in a day.
 * @type {string}
 * @default "pages"
 */
const DAILY_NOTE_KEY = "pages";

let QuickAdd;
let Settings;
let MetaEdit;

/**
 * Shows a notice to the user with the provided message and logs to the developer console.
 * @param msg {string} The message to display to the user and log to the developer console.
 * @constructor
 */
const NotifyUserAndLog = (msg) => {
    new Notice(msg, 10000);
    console.log(msg);
};

/**
 * Shows a notice to the user with the provided message and throws a new Error terminating the script.
 * @param msg {string} The message to display to the user and to raise as an error.
 * @constructor
 */
const NotifyUserAndError = (msg) => {
    new Notice(msg, 10000);
    throw new Error(msg);
};

/**
 * Returns today's daily note using the pattern "YYYY-MM-WW-DD".
 * @returns The first file with a basename matching today's date, or null.
 */
function getDailyNote() {
    "use strict";
    const dateToday = moment().format("YYYY-MM-DD");
    let dailyNote = QuickAdd.app.vault.getMarkdownFiles().filter(file => file.basename === dateToday)[0];

    if (dailyNote) {
        return dailyNote;
    } else {
        return null;
    }
}

/**
 * Increments the `DAILY_NOTE_KEY` by the number of pages read.
 * @param dailyNote {TFile} A note that contains the `DAILY_NOTE_KEY`.
 * @param pagesRead {Number} The number of pages read by the user.
 * @returns void
 */
async function updateDailyNoteMetadata(dailyNote, pagesRead) {
    "use strict";
    const dailyNoteKey = Settings.DAILY_NOTE_KEY ? Settings.DAILY_NOTE_KEY : DAILY_NOTE_KEY;

    let metadata = QuickAdd.app.metadataCache.getFileCache(dailyNote);
    let dailyRead = metadata.frontmatter[dailyNoteKey];
    dailyRead += pagesRead;

    await MetaEdit.api.update(dailyNoteKey, dailyRead, dailyNote);
}

async function start(params, settings) {
    "use strict";
    Settings = settings;
    QuickAdd = params;
    MetaEdit = QuickAdd.app.plugins.plugins["metaedit"];

    if (!QuickAdd) {
        NotifyUserAndError("Community plugin 'QuickAdd' not installed. To fix this error, install QuickAdd via Settings > Community Plugins > Browse > QuickAdd.");
    }

    if (!MetaEdit) {
        NotifyUserAndError("Community plugin 'Metaedit' not installed. To fix this error, install 'Metaedit' via the Community Plugins.");
    }

    // Checks if the value has been set in the QuickAdd Macro settings, if not, defaults to `PAGE_NUMBER_KEY`.
    const pageNumberKey = Settings.PAGE_NUMBER_KEY ? Settings.PAGE_NUMBER_KEY : PAGE_NUMBER_KEY;
    const updateDailyNote = Settings.UPDATE_DAILY_NOTE ? Settings.UPDATE_DAILY_NOTE : UPDATE_DAILY_NOTE;


    const activeFile = QuickAdd.app.workspace.getActiveFile();
    if (!activeFile) {
        NotifyUserAndError("Unable to update the status of empty file. To fix this error, open a note and run the macro again.");
    }

    const currentPage = await MetaEdit.api.getPropertyValue(pageNumberKey, activeFile);
    let newCurrentPage = await QuickAdd.quickAddApi.inputPrompt(
        "Current Page",
        currentPage,
    );
    if (!newCurrentPage) {
        NotifyUserAndError("No page number provided, cannot update.");
    }

    if (updateDailyNote !== true) {
        const dailyNote = getDailyNote();
        if (dailyNote) {
            const pagesRead = newCurrentPage - currentPage;
            await updateDailyNoteMetadata(dailyNote, pagesRead);
        } else {
            NotifyUserAndLog(`Unable to locate today's daily note. Please check the files exists and try again.`);
        }
    }

    try {
        await MetaEdit.api.update(pageNumberKey, newCurrentPage, activeFile);
    } catch (e) {
        await MetaEdit.api.createYamlProperty(pageNumberKey, newCurrentPage, activeFile);
    }
}

module.exports = {
    entry: start,
    settings: {
        name: "Update page number",
        author: "errbufferoverfl",
        options: {
            ["PAGE_NUMBER_KEY"]: {
                type: "input",
                defaultValue: PAGE_NUMBER_KEY,
                placeholder: "The metadata key that should be updated by the user.",
            },
            ["UPDATE_DAILY_NOTE"]: {
                type: "toggle",
                defaultValue: UPDATE_DAILY_NOTE,
                placeholder: "Whether the daily note should be updated to track the number of pages read in a day.",
            },
            ["DAILY_NOTE_KEY"]: {
                type: "input",
                defaultValue: DAILY_NOTE_KEY,
                placeholder: "The metadata key in the daily note that is used to track the number of pages read in a day.",
            },
        },
    },
};
