// Replace true or false with 0 or 1
function replaceBoolean(parameters) {
    for (const key in parameters) {
        if (parameters[key] === 'true') {
            parameters[key] = '1';
        } else if (parameters[key] === 'false') {
            parameters[key] = '0';
        }
    }
    return parameters;
}

// Replace null with an empty string
function replaceNull(parameters) {
    for (const key in parameters) {
        if (parameters[key] === null) {
            parameters[key] = '';
        }
    }
    return parameters;
}

// Replace string with another string
function replaceString(parameters, oldString, newString) {
    for (const key in parameters) {
        if (parameters[key] === oldString) {
            parameters[key] = newString;
        }
    }
    return parameters;
}