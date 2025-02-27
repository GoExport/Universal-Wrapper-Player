// Grab the parameters from the URL
function getParams() {
    const params = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    urlParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}

// Function to perform replacements
function replacePlaceholders(obj, replacements) {
    const result = {};
    Object.keys(obj).forEach((key) => {
        let value = obj[key];
        if (typeof value === 'string') {
            value = value.replace(/%\w+%/g, (match) => replacements[match] || match);
        }
        result[key] = value;
    });
    return result;
}

// Filter out the parameters that shouldn't be in the final object
function filterParams(params, filter) {
    Object.keys(params).forEach((key) => {
        if (key in filter) {
            delete params[key];
        }
    });
}

// Get the parameters
const params = getParams();

// Flash parameters
const defaultFlashParams = {
    swf: "https://lightspeed.flashthemes.net/static/animation/aisd82ij/player.swf?v=2",
};

// Default flash variables
const defaultFlashVars = {
    "isPublished": 1,
    "tlang": "en_US",
    "is_private_shared": 0,
    "autostart": 0,
    "ctc": "go",
    "ad": 0,
    "appCode": "go",
    "is_slideshow": 0,
    "is_emessage": 0,
    "movieLid": 0,
    "isEmbed": 1,
    "showButtons": 1,
    "endStyle": 1,
    "isWide": 1,
    "pwm": 1,
    "ut": -1,
    "userId": null,
    "username": "",
    "uemail": "",
    "numContact": "",
    "playcount": 0,
    "copyable": 0,
    "refuser": "",
    "utm_source": "",
    "chain_mids": "",
    "movieOwnerId": "%userid%",
    "movieId": null,
    "apiserver": "https://flashthemes.net/",
    "storePath": "https://flashthemes.net/static/store/<store>?v=%userid%",
    "clientThemePath": "https://lightspeed.flashthemes.net/static/ct/ad44370a650793d9/<client_theme>"
};

// Attribute parameters
const defaultFlashAttributes = {
    allowScriptAccess: "always",
    allowFullScreen: "true",
};

// Merge user parameters with default parameters
const mergedFlashAttributes = { ...defaultFlashAttributes, ...params };
const mergedFlashParams = { ...defaultFlashParams, ...params };
const mergedFlashVars = { ...defaultFlashVars, ...params };

// Filters out each set of parameters from each other's object
filterParams(mergedFlashAttributes, defaultFlashParams);
filterParams(mergedFlashParams, defaultFlashAttributes);
filterParams(mergedFlashVars, defaultFlashAttributes);
filterParams(mergedFlashVars, defaultFlashParams);

allParams = {
    ...mergedFlashAttributes,
    ...mergedFlashParams,
    ...mergedFlashVars,
};

// Required parameters
const required = [
    "movieId",
    "userId"
];

// Recommended parameters
const recommended = [
    "userId"
];

// Replacements
const replacements = {
    "%userid%": params.userId,
    "%movieid%": params.movieId,
};

// Check for existence of required parameters
required.forEach((key) => {
    if (!(key in params)) {
        alert(`Missing required parameter: ${key}`);
        throw new Error(`Missing required parameter: ${key}`);
    }
});

// Check for existence of recommended parameters
recommended.forEach((key) => {
    if (!(key in params)) {
        console.warn(`Missing recommended parameter: ${key}`);
    }
});

// Parameters object
const paramsObject = {
    flashAttributes: replacePlaceholders(mergedFlashAttributes, replacements),
    flashParams: replacePlaceholders(mergedFlashParams, replacements),
    flashVars: replacePlaceholders(mergedFlashVars, replacements),
};