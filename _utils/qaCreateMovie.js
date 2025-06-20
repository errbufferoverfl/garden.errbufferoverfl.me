/**
 * The default API URL to populate QuickAdd macro with, fallback URL if not set.
 * @access private
 * @type {string}
 */
const API_URL = "https://www.omdbapi.com/";

/**
 * The default API Key to populate QuickAdd macro with, fallback key if not set.
 * @access private
 * @type {string}
 */
const API_KEY_OPTION = "";

/**
 * The default film statuses to populate QuickAdd macro with, fallback statuses if not set.
 * @access private
 * @type {string}
 */
const VALID_STATUSES = `["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"]`;

/**
 * The default rating range to populate QuickAdd macro with, fallback ratings if not set.
 * @access private
 * @type {string}
 */
const RATINGS = `["5", "4", "3", "2", "1"]`;

/**
 * The default completed status to populate QuickAdd macro with, fallback completed status if not set.
 * @access private
 * @type {string}
 */
const COMPLETED_STATUS = "Complete";

/**
 * The default in progress status to populate QuickAdd macro with, fallback completed status if not set.
 * @access private
 * @type {string}
 */
const IN_PROGRESS_STATUS = "In Progress";

/**
 * The default note name to populate QuickAdd macro with, fallback note name if not set.
 * @access private
 * @type {string}
 */
const DEFAULT_NOTE_NAME = "Untitled Movie";

const DEFAULT_STREAMING_PLATFORMS = `["Netflix", "Stan", "Prime Video", "Disney+", "Kanopy", "iView", "SBS on Demand", "Docplay", "Foxtel Now", "Binge", "Kayo", "YouTube Premium", "Tubi", "BritBox", "Apple TV +", "Hayu", "Crunchyroll", "AnimeLab Australia", "Shudder", "Reelgood", "Mubi", "iwonder", "Curiosity Stream", "Paramount+", "9Now", "AMC+"]`;

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
 * Defines all the possible parameters returned by the OMDB API.
 * @see [OMDB Swagger JSON](https://www.omdbapi.com/swagger.json)
 * @type {{Metascore: string, BoxOffice: string, Website: string, imdbRating: string, imdbVotes: string, Ratings: [{Value: string, Source: string},{Value: string, Source: string},{Value: string, Source: string}], Runtime: string, Language: string, Rated: string, Production: string, Released: string, totalSeasons: string, imdbID: string, Plot: string, Director: string, Title: string, Actors: string, Response: string, Type: string, Awards: string, DVD: string, Year: string, Poster: string, Country: string, Genre: string, Writer: string}}
 */
const OMDBResponseStructure = {
    "Title": "",
    "Year": "",
    "Rated": "",
    "Released": "",
    "Runtime": "",
    "Genre": "",
    "Director": "",
    "Writer": "",
    "Actors": "",
    "Plot": "",
    "Language": "",
    "Country": "",
    "Awards": "",
    "Poster": "placeholder.png",
    "Ratings": [
        {
            "Source": "Internet Movie Database",
            "Value": "0/10",
        },
        {
            "Source": "Rotten Tomatoes",
            "Value": "0%",
        },
        {
            "Source": "Metacritic",
            "Value": "0/100",
        },
    ],
    "Metascore": "",
    "imdbRating": "",
    "imdbVotes": "",
    "imdbID": "",
    "Type": "movie | series",
    "DVD": "",
    "BoxOffice": "",
    "Production": "",
    "Website": "",
    "totalSeasons": "",
    "Response": "False",
};

module.exports = {
    entry: start,
    settings: {
        name: "Create movie",
        author: "errbufferoverfl",
        options: {
            ["API_URL"]: {
                type: "text",
                defaultValue: API_URL,
                placeholder: "API URL used for querying movies & TV shows.",
            },
            ["API_KEY_OPTION"]: {
                type: "text",
                defaultValue: API_KEY_OPTION,
                placeholder: "OMDb API Key.",
                secret: true,
            },
            ["DEFAULT_NOTE_NAME"]: {
                type: "text",
                defaultValue: DEFAULT_NOTE_NAME,
                placeholder: "The default title of a newly created note.",
            },
            ["VALID_STATUSES"]: {
                type: "text",
                defaultValue: VALID_STATUSES,
                placeholder: "Valid statuses for films and television shows.",
            },
            ["IN_PROGRESS_STATUS"]: {
                type: "text",
                defaultValue: IN_PROGRESS_STATUS,
                placeholder: "The status indicating a show or film is being watched.",
            },
            ["WATCHED_STATUS"]: {
                type: "text",
                defaultValue: COMPLETED_STATUS,
                placeholder: "The status indicating a show or film has been seen.",
            },
            ["RATINGS"]: {
                type: "text",
                defaultValue: RATINGS,
                placeholder: "An array of numbers to represent the rating of a movie or stars.",
            },
            ["STREAMING_PLATFORMS"]: {
                type: "text",
                defaultValue: DEFAULT_STREAMING_PLATFORMS,
                placeholder: "An array of streaming platforms that you can watch media on.",
            },
        },
    },
};

let QuickAdd;
let Settings;

/**
 * The main entry point that drives the fetching and creation of a film object returned to the user.
 * @param params {Object} The object that exposes access to the Obsidian vault and QuickAdd configuration.
 * @param settings { {API_URL:string, API_KEY_OPTION:string, VALID_STATUSES:string, COMPLETED_STATUS:string} } The settings exposed via module.exports.settings.option and customised by the user.
 * @returns {Promise<void>}
 */
async function start(params, settings) {
    "use strict";
    QuickAdd = params;
    Settings = settings;

    if (!QuickAdd) {
        NotifyUserAndError("Community plugin 'QuickAdd' not installed. To fix this error, install QuickAdd via Settings > Community Plugins > Browse > QuickAdd.");
    }

    const apiUrl = Settings.API_URL ? Settings.API_URL : API_URL;
    if (!apiUrl) {
        NotifyUserAndError("No API URL specified. Unable to query remote host.");
    }

    const apiKey = Settings.API_KEY_OPTION ? Settings.API_KEY_OPTION : API_KEY_OPTION;
    if (!apiKey) {
        NotifyUserAndError("No API key specified. Unable to query remote host.");
    }

    const statuses = Settings.VALID_STATUSES ? parseList(Settings.VALID_STATUSES) : parseList(VALID_STATUSES);
    const platforms = Settings.STREAMING_PLATFORMS ? parseList(Settings.STREAMING_PLATFORMS) : parseList(DEFAULT_STREAMING_PLATFORMS);

    const watchStatus = Settings.WATCHED_STATUS ? Settings.WATCHED_STATUS : COMPLETED_STATUS;
    const inProgressStatus = Settings.IN_PROGRESS_STATUS ? Settings.IN_PROGRESS_STATUS : IN_PROGRESS_STATUS;

    let query = await QuickAdd.quickAddApi.inputPrompt(
        "Enter movie title or IMDB ID:",
    );

    if (!query) {
        NotifyUserAndError("No query entered.");
    }

    let selectedShow;
    if (isImdbId(query)) {
        selectedShow = await getByImdbId(apiUrl, apiKey, query);
    } else {
        const results = await getByQuery(apiUrl, apiKey, query);
        const searchResults = results.Search;

        /**
         * Does not currently support pagination, only shows the first 10 results returned by the API.
         * TODO: Add in support for pagination.
         */
        NotifyUserAndLog(`Showing ${searchResults.length} of ${results.totalResults} results.`);
        const choice = await QuickAdd.quickAddApi.suggester(
            searchResults.map(formatTitleForSuggestion),
            searchResults,
        );

        if (!choice) {
            NotifyUserAndError("No choice selected.");
        }

        selectedShow = await getByImdbId(apiUrl, apiKey, choice.imdbID);
    }

    let movieFile = checkFilmExists(selectedShow.imdbID);
    if (movieFile) {
        QuickAdd.app.workspace.getLeaf(true).openFile(movieFile);
        NotifyUserAndError("Movie already exists.");
    }

    let platform = await QuickAdd.quickAddApi.suggester(
        platforms,
        platforms
    );

    let movieStatus = await QuickAdd.quickAddApi.suggester(
        statuses,
        statuses,
    );

    let started;
    if (movieStatus === inProgressStatus) {
        started = moment().format("YYYY-MM-DD");
    }

    let finished;
    let rating;
    if (movieStatus === watchStatus) {
        finished = await QuickAdd.quickAddApi.inputPrompt(
            "Date Finished",
            moment().format("YYYY-MM-DD"),
        );

        started = started ? started : finished;
        finished = finished ? finished : moment().format("YYYY-MM-DD");

        const ratingScale = Settings.RATINGS ? parseList(Settings.RATINGS) : parseList(RATINGS);
        const ratingStars = numberToStars(ratingScale);

        rating = await QuickAdd.quickAddApi.suggester(
            ratingStars,
            ratingScale,
        );
    }

    let fileName = replaceIllegalFileNameCharactersInString(selectedShow.Title);

    QuickAdd.variables = {
        ...selectedShow,
        genreLink: linkifyList(selectedShow.Genre),
        genreTags: stringToHashtagString(selectedShow.Genre),
        directorLink: linkifyList(selectedShow.Director),
        countryLink: linkifyList(selectedShow.Country),
        actorLink: linkifyList(selectedShow.Actors),
        imageLink: selectedShow.Poster ? `![](${selectedShow.Poster})` : "![[placeholder.png]]",
        filename: fileName,
        type: selectedShow.Type === "movie" ? "Movie" : "Series",
        status: movieStatus,
        started: started ? started : "none",
        finished: finished ? finished : "none",
        rating: rating ? rating : "Unrated",
        platform: platform ? platform : "Unspecified",
    };

    return fileName;
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

/**
 * Checks if the supplied input matches the pattern of a valid IMDB ID for example: tt13443470.
 * @private
 * @param imdbId {string} the user supplied string to check is in the format of a valid IMDB ID.
 * @returns {boolean} true if the string matches the IMDB ID pattern, false if it does not.
 */
function isImdbId(imdbId) {
    "use strict";
    return /^tt\d+$/.test(imdbId);
}

/**
 * Converts a film object into a formatted list to display via the QuickAdd suggester.
 * @private
 * @param resultItem {OMDBResponseStructure} represents a single entry returned by the OMDB API (structured similar to the OMDBResponseStructure Object)
 * @returns {string} Represents a single OMDB entry, formatted as follows:
 *
 * - The prefix is a film roll for a movie, or TV for a television series
 * - The title as returned by the API
 * - The year as returned by the API
 */
function formatTitleForSuggestion(resultItem) {
    "use strict";
    let prefix = resultItem.Type === "movie" ? "🎞" : "📺";
    let title = resultItem.Title;
    let year = resultItem.Year;

    return `${prefix} ${title} (${year})`;
}

/**
 * Returns a list of movies or series (films) matching the search query. The films are returned in alphabetical sorted order.
 * @private
 * @param apiUrl {string} The URL from which movie details can be downloaded using your API key.
 * @param apiKey {string} The secret to authenticate API requests.
 * @param query {string} The search query string.
 * @see [The OMDB API for more information](https://www.omdbapi.com/)
 * @returns {Object[OMDBResponseStructure]} An Object with a search property that contains up to 10 film objects found by the API. Each film in the array is a separate object. If no results match the query, an error is raised and notice shown to the user.
 */
async function getByQuery(apiUrl, apiKey, query) {
    "use strict";

    if (!apiUrl || !apiKey || !query) {
        NotifyUserAndError("One or more required parameters are missing. Unable to get movie or series.");
    }

    let searchResults = await get?.(apiUrl, apiKey, {s: query});
    if (!searchResults.Search || !searchResults.Search.length) {
        NotifyUserAndError(`No results found for search ${query}.`);
    }
    return searchResults;
}

/**
 * Returns a single of movie or series (film) matching the IMDB ID.
 * @private
 * @param apiUrl {string} The URL from which movie details can be downloaded using your API key.
 * @param apiKey {string} The secret to authenticate API requests.
 * @param imdbId {string} A valid IMDb ID.
 * @returns {OMDBResponseStructure} An Object with data about the film found by the API. If no object match the query and error is raised and notice shown to the user.
 */
async function getByImdbId(apiUrl, apiKey, imdbId) {
    "use strict";
    if (!apiUrl || !apiKey || !imdbId) {
        NotifyUserAndError("One or more required parameters are missing. Unable to get movie or series.");
    }

    let searchResults = await get?.(apiUrl, apiKey, {i: imdbId});
    return searchResults;
}


/**
 * Converts a comma seperated string into a string where each comma separate value is converted into a Wiki-style link.
 * @private
 * @param string {string} The comma seperated string to convert to links.
 * @returns {string[]|[]} An array of Wiki-style links. If the passed string has no values an empty array is returned.
 */
function linkifyList(string) {
    "use strict";
    const list = string?.split(",") || [];

    return [...list].map(item => `[[${item.trim()}]]`);
}


/**
 * Replaces common illegal filename characters on macOS with nothing.
 * @private
 * @param fileName {string} The value that will be converted into a system safe string and used as the filename.
 * @returns {string} A macOS filename that contains no illegal characters. If unable to process the filename, a notice is shown to the user and the filename is set to "Untitled".
 */
function replaceIllegalFileNameCharactersInString(fileName) {
    "use strict";

    const defaultNoteName = (Settings.DEFAULT_NOTE_NAME) ? Settings.DEFAULT_NOTE_NAME : DEFAULT_NOTE_NAME;
    return fileName.replace(/[#%&*<>?/:@]/g, "") || defaultNoteName;
}


/**
 * Fetches information from the specified API URL.
 *
 * **Note:** This function assumes the apiUrl is for OMDB and therefore accesses the response body with OMDB keys (e.g., Error, Response) if planning on using another API please ensure to extend before continuing to prevent errors.
 * @private
 * @param apiUrl {string} The URL from which movie details can be downloaded using your API key.
 * @param apiKey {string} The secret to authenticate API requests.
 * @param query {Object} An object of key, values to include as additional options when querying the apiUrl.
 * @returns {Object} An object that contains the response from the apiUrl. If an error is raised by the API an error is raised and the user notified.
 */
async function get(apiUrl, apiKey, query) {
    "use strict";
    let finalURL = new URL(apiUrl);

    finalURL.searchParams.append("apikey", apiKey);
    finalURL.searchParams.append("plot", "full");

    if (query) {
        // NOTE: For some silly reason the s parameter only works if it comes before the arguments
        // so as of 2022-11-26 if you do:
        // https://www.omdbapi.com/?s=antiviral&apikey=somekey -> returns an API key error
        // https://www.omdbapi.com/?apikey=somekey&s=antiviral -> returns search results
        // This issue doesn't seem to present if you use the `t` parameter.

        Object.keys(query).forEach((key) =>
            finalURL.searchParams.append(key, query[key]),
        );
    }

    let res = await request({
        url: finalURL.href,
        method: "GET",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
    });

    /**
     * {
     *     "Response": "False",
     *     "Error": "Movie not found!"
     * }
     */
    res = JSON.parse(res);

    if (res.Response === "False") {
        NotifyUserAndError(res.Error);
    }
    return res;
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
 * Checks if there is already a note that exists with the corresponding IMDB ID in the frontmatter.
 * @see [For more information about TAbstractFile](https://marcus.se.net/obsidian-plugin-docs/reference/typescript/classes/TAbstractFile)
 * @param imdbId {string}
 * @returns {TAbstractFile|null} The TAbstractFile object that represents the existing file, else null.
 */
function checkFilmExists(imdbId) {
    "use strict";
    const files = QuickAdd.app.vault.getMarkdownFiles();

    for (let index = 0; index <= files.length; index++) {
        try {
            if (QuickAdd.app.metadataCache.getFileCache(files[index]).frontmatter.imdbID === imdbId) {
                return files[index];
            }
        } catch (ValueError) {

        }
    }
    return null;
}

/**
 * Converts a comma-separated string into a string of hashtags.
 * @param {string} str - The string to be converted.
 * @returns {string} The resulting string of hashtags.
 * @example
 * arrayToHashtagString(["Sci-Fi, Dark Comedy, Action-Adventure"]);
 * // returns "#sci-fi #dark-comedy #action-adventure"
 */
function stringToHashtagString(str) {
    const arr = str.split(",").map(s => s.trim());
    return arr.map(s => `#genre/${s.toLowerCase().replace(/[^a-z0-9-]/g, "")}`).join(" ");
}