// js/params.js

/**
 * Get query
 * @returns {Object} Query parameters
 */
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    const queryParams = {};
    for (const [key, value] of params.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}

/**
 * Get query parameter
 * @param {string} param Query parameter
 * @returns {string} Query parameter value
 */
function getQueryParam(param) {
    return getQueryParams()[param];
}

/**
 * Get environment
 * @returns {string} Environment
 */
function getEnvironment() {
    return getQueryParam('env');
}