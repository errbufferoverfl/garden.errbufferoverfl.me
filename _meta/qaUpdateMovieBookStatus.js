/**
 * The default frontmatter that handles a notes' status, fallback setting if not set in QuickAdd.
 * @access protected
 * @type {string}
 */
const STATUS_KEY = "status";

const DATE_STARTED_KEY = "started";
const DATE_COMPLETED_KEY = "finished";
const CURRENT_PAGE_KEY = "current";
const TOTAL_PAGE_KEY = "total";
const RATING_KEY = "rating";

const BOOK_IN_PROGRESS_STATUS = "In Progress";
const FILM_IN_PROGRESS_STATUS = "In Progress";

const BOOK_COMPLETED_STATUS = "Complete";
const FILM_COMPLETED_STATUS = "Complete";

const TYPES_OF_FILM = ["movie", "series"];
const TYPES_OF_READING = [undefined, "book", "zine", "research paper", "article"];

/**
 * The default rating range to populate QuickAdd macro with, fallback ratings if not set.
 * @access private
 * @type {string}
 */
const RATINGS = `["5", "4", "3", "2", "1"]`;

/**
 * The default movie statuses to populate QuickAdd suggester with, fallback statuses if not set in QuickAdd.
 * @access protected
 * @type {string}
 */
const VALID_FILM_STATUSES = `["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"]`;

/**
 * The default book statuses to populate QuickAdd suggester with, fallback statuses if not set in QuickAdd.
 * @access protected
 * @type {string}
 */
const VALID_BOOK_STATUSES = `["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"]`;

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

let QuickAdd;
let Settings;
let MetaEdit;

async function start(params, settings) {
    "use strict";
    Settings = settings;
    QuickAdd = params;
    MetaEdit = QuickAdd.app.plugins.plugins.metaedit;

    if (!QuickAdd) {
        NotifyUserAndError("Community plugin 'QuickAdd' not installed. To fix this error, install QuickAdd via Settings > Community Plugins > Browse > QuickAdd.");
    }

    if (!MetaEdit) {
        NotifyUserAndError("Community plugin 'Metaedit' not installed. To fix this error, install MetaEdit via the Community Plugins.");
    }

    const statusKey = Settings.STATUS_KEY ? Settings.STATUS_KEY : STATUS_KEY;

    const activeFile = QuickAdd.app.workspace.getActiveFile();
    if (!activeFile) {
        NotifyUserAndError("Unable to update the status of empty file. To fix this error, open a file and run the macro again.");
    }

    let noteType;
    try {
        noteType = QuickAdd.app.metadataCache.getFileCache(activeFile).frontmatter.type;
    } catch (TypeError) {
        const supportedTypes = TYPES_OF_FILM + TYPES_OF_READING;

        noteType = QuickAdd.suggester(supportedTypes, supportedTypes);
    }

    const config = {
        "type": noteType,
        "activeFile": activeFile,
        "status": Settings.STATUS_KEY,
        "rating": Settings.RATING_KEY,
        "startDate": Settings.DATE_STARTED_KEY,
        "completedDate": Settings.DATE_COMPLETED_KEY,

        "statuses": [],
        "inProgress": "",
        "completed": "",
    };

    if (noteType && TYPES_OF_FILM.includes(noteType.toLowerCase())) {
        config.statuses = parseList(Settings.VALID_FILM_STATUSES);
        config.inProgress = Settings.FILM_IN_PROGRESS_STATUS;
        config.completed = Settings.FILM_COMPLETED_STATUS;

    } else if (noteType && TYPES_OF_READING.includes(noteType.toLowerCase())) {
        config.statuses = parseList(Settings.VALID_BOOK_STATUSES);
        config.inProgress = Settings.BOOK_IN_PROGRESS_STATUS;
        config.completed = Settings.BOOK_COMPLETED_STATUS;

        config.totalPage = Settings.TOTAL_PAGE_KEY;
        config.currentPage = Settings.CURRENT_PAGE_KEY;
    } else {
        NotifyUserAndError(`Unsupported note type: '${noteType}'. Valid types include: ${TYPES_OF_FILM.toString()} ${TYPES_OF_READING.toString()}`);
    }

    await updateNote(config);
}

async function updateNote(config) {
    "use strict";

    const status = await QuickAdd.quickAddApi.suggester(config.statuses, config.statuses );
    if (status === config.completed){
        isComplete(config);
    } else if (status === config.inProgress) {
        inProgress(config);
    }

    try {
        await MetaEdit.api.update(config.status, status, config.activeFile);
    } catch (e) {
        NotifyUserAndLog(`Unable to update '${config.status}'.`);
    }
}

async function inProgress(config) {
    "use strict";

    const started = await QuickAdd.quickAddApi.inputPrompt(
        "Date Started",
        `${moment().format("YYYY-MM-DD")}`,
        `${moment().format("YYYY-MM-DD")}`,
    );

    try {
        await MetaEdit.api.update(config.startDate, started, config.activeFile);
    } catch (e) {
        NotifyUserAndLog(`Unable to update '${config.startDate}'.`);
    }
}

async function isComplete(config){
    "use strict";

    const finished = await QuickAdd.quickAddApi.inputPrompt(
        "Date Completed",
        `${moment().format("YYYY-MM-DD")}`,
        `${moment().format("YYYY-MM-DD")}`,
    );

    try {
        const start = await MetaEdit.api.getGetPropertyValueFunction(config.startDate, config.activeFile);
    } catch (e) {
        NotifyUserAndLog(`Unable to locate '${config.completedDate}'.`);
    }

    if (!start){
        try {
            await MetaEdit.api.update(config.startDate, finished, config.activeFile);
        } catch (e) {
            NotifyUserAndLog(`Unable to update '${config.startDate}'.`);
        }
    }

    try {
        await MetaEdit.api.update(config.completedDate, finished, config.activeFile);
    } catch (e) {
        NotifyUserAndLog(`Unable to update '${config.completedDate}'.`);
    }

    const ratingScale = parseList(Settings.RATINGS);
    const ratingStars = numberToStars(ratingScale);

    let rating = await QuickAdd.quickAddApi.suggester(
        ratingStars, ratingScale,
    );

    try {
        await MetaEdit.api.update(config.rating, rating, config.activeFile);
    } catch (e) {
        NotifyUserAndLog(`Unable to update '${config.rating}'.`);
    }

    if (TYPES_OF_READING.includes(config.type)){
        try {
            const total = await MetaEdit.api.getGetPropertyValueFunction(config.totalPage, config.activeFile);
            await MetaEdit.api.update(config.currentPage, total, config.activeFile);
        } catch (e) {
            NotifyUserAndLog(`Unable to update '${config.currentPage}'.`);
        }
    }
}


/**
 * Converts a raw string representation of an array into to an array that can be used in code.
 * @private
 * @param settingToParse {string} A string representation of a list or array to parse into code.
 * @returns {[]} An array of user specified options. There is no limit on depth or contents. If an error is raised, the user is notified and nothing is returned, it is up to the developer to handle setting a fallback.
 */
function parseList(settingToParse) {
    "use strict";
    let settings;

    try {
        settings = JSON.parse(settingToParse);
    } catch (e) {
        if (e instanceof SyntaxError) {
            NotifyUserAndLog(`${e.message} in ${e.fileName}.`);
        }
    }
    return settings;
}

/**
 * Converts an array of numbers into an array of strings with a corresponding number of stars.
 * @private
 * @param {number[]} arr - The array of numbers to be converted.
 * @returns {string[]} The resulting array of strings with stars.
 */
function numberToStars(arr) {
    return arr.map(num => "⭐️".repeat(num));
}

module.exports = {
    entry: start,
    settings: {
        name: "Update movie & book status",
        author: "errbufferoverfl",
        options: {
            ["STATUS_KEY"]: {
                type: "input",
                defaultValue: STATUS_KEY,
                placeholder: "The frontmatter key that manages the status of the note.",
            },
            ["VALID_BOOK_STATUSES"]: {
                type: "text",
                defaultValue: VALID_BOOK_STATUSES,
                placeholder: "Valid statuses for books.",
            },
            ["VALID_FILM_STATUSES"]: {
                type: "text",
                defaultValue: VALID_FILM_STATUSES,
                placeholder: "Valid statuses for movies.",
            },
            ["DATE_STARTED_KEY"]: {
                type: "text",
                defaultValue: DATE_STARTED_KEY,
                placeholder: "The key that tracks when a book or film was started.",
            },
            ["DATE_COMPLETED_KEY"]: {
                type: "text",
                defaultValue: DATE_COMPLETED_KEY,
                placeholder: "The key that tracks when a book or film was completed.",
            },
            ["RATING_KEY"]: {
                type: "text",
                defaultValue: RATING_KEY,
                placeholder: "The key that tracks the book or film rating.",
            },
            ["BOOK_IN_PROGRESS_STATUS"]: {
                type: "text",
                defaultValue: BOOK_IN_PROGRESS_STATUS,
                placeholder: "The status value that indicates a book is in progress.",
            },
            ["BOOK_COMPLETED_STATUS"]: {
                type: "text",
                defaultValue: BOOK_COMPLETED_STATUS,
                placeholder: "The status value that indicates a book is completed.",
            },
            ["CURRENT_PAGE_KEY"]: {
                type: "text",
                defaultValue: CURRENT_PAGE_KEY,
                placeholder: "Valid statuses .",
            },
            ["TOTAL_PAGE_KEY"]: {
                type: "text",
                defaultValue: TOTAL_PAGE_KEY,
                placeholder: "Valid statuses .",
            },
            ["FILM_IN_PROGRESS_STATUS"]: {
                type: "text",
                defaultValue: FILM_IN_PROGRESS_STATUS,
                placeholder: "The status value that indicates a film is in progress.",
            },
            ["FILM_COMPLETED_STATUS"]: {
                type: "text",
                defaultValue: FILM_COMPLETED_STATUS,
                placeholder: "The status value that indicates a film is completed.",
            },
            ["RATINGS"]: {
                type: "text",
                defaultValue: RATINGS,
                placeholder: "An array of numbers to represent the rating of a movie or stars.",
            },
        },
    },
};