const validateAndSetDefault = (value, min, max, defaultValue, errorType) => {
    if (typeof value !== 'number' || value < min || value > max) {
        console.error(`${errorType} value ${value}. Using default: ${defaultValue}`);
        return defaultValue;
    }
    return value;
};

export default validateAndSetDefault;
