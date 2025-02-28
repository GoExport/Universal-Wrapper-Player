/**
 * Loads, filters, and exposes the parameters from the URL.
 * @returns {Object} Parameters
 */
function loadParameters() {
    const env = getEnvironment() || 'local'; // Default to 'local' if no env is specified
    const config = environment[env];
    const queryParams = getQueryParams();

    let flashSpecial = { ...config.special };
    let flashAttributes = { ...config.attributes };
    let flashVars = { ...config.flashvars };
    let flashParams = { ...config.params };

    // Override config with query parameters
    for (const key in queryParams) {
        if (config.special && config.special.hasOwnProperty(key)) {
            flashSpecial[key] = queryParams[key];
        } else if (config.attributes && config.attributes.hasOwnProperty(key)) {
            flashAttributes[key] = queryParams[key];
        } else if (config.flashvars && config.flashvars.hasOwnProperty(key)) {
            flashVars[key] = queryParams[key];
        } else if (config.params && config.params.hasOwnProperty(key)) {
            flashParams[key] = queryParams[key];
        }
    }

    validateParameters(flashSpecial, 'special');
    validateParameters(flashAttributes, 'attribute');
    validateParameters(flashVars, 'flashvar');
    validateParameters(flashParams, 'param');

    // Replace true or false with 0 or 1
    flashVars = replaceBoolean(flashVars);

    // Replace null with an empty string
    flashVars = replaceNull(flashVars);

    // Replace placeholders with values
    flashVars = replaceString(flashVars, placeholders['%userid%'], flashVars['movieOwnerId']);

    return {
        flashSpecial: flashSpecial,
        flashAttributes: flashAttributes,
        flashVars: flashVars,
        flashParams: flashParams
    };
}

// Validate parameters
function validateParameters(parameters, type) {
    for (const key in parameters) {
        if (parameters[key] === null) {
            if (shouldWarn) {
                console.warn(`Missing ${type} value for ${key}`);
            } else {
                throw new Error(`Missing ${type} value for ${key}`);
            }
        }
    }
}