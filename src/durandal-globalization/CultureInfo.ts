
///<amd-module name='durandal-globalization/CultureInfo'/>

// #region Import Directives

import NumericFormatInfo = require("durandal-globalization/NumericFormatInfo");

// #endregion

/**
 * Represents a class, that provides information about a specific culture.
 */
class CultureInfo {

    // #region Constructors

    /**
     * Initializes a new CultureInfo instance.
     * @param {string} name The name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
     * @param {string} twoLetterIsoCode The ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
     * @param {string} displayName The full localized culture name in the format "language name (country/region name)".
     * @param {string} languageName The full localized language name.
     * @param {string} englishName The english culture name in the format "language name (country/region name)".
     * @param {NumericFormatInfo} numericFormat The object that contains information about the specific numeric format of the culture.
     */
    constructor(name: string, twoLetterIsoCode: string, displayName: string, languageName: string, englishName: string, numericFormat: NumericFormatInfo) {
        this._name = name;
        this._twoLetterIsoCode = twoLetterIsoCode;
        this._displayName = displayName;
        this._languageName = languageName;
        this._englishName = englishName;
        this._numericFormat = numericFormat;
    }

    // #endregion

    // #region Private Static Fields

    /**
     * Contains all cultures that are supported by the web application.
     */
    private static _currentCulture: CultureInfo;

    /**
     * Contains the built-in culture infos for the most important cultures.
     */
    private static cultureInfos: { [name: string]: CultureInfo; };

    // #endregion

    // #region Private Fields

    /**
     * Contains the name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
     */
    private _name: string;

    /**
     * Contains the ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
     */
    private _twoLetterIsoCode: string;

    /**
     * Contains the full localized culture name in the format "language name (country/region name)".
     */
    private _displayName: string;

    /**
     * Contains the full localized language name.
     */
    private _languageName: string;

    /**
     * Contains the english culture name in the format "language name (country/region name)".
     */
    private _englishName: string;

    /**
     * Contains an object that contains information about the specific numeric format of the culture.
     */
    private _numericFormat: NumericFormatInfo;


    // #endregion

    // #region Public Static Properties

    /**
     * Gets the current culture of the web application. If the culture requested by the browser is not supported, then the default culture will be returned.
     */
    public static get currentCulture(): CultureInfo {

        // Initializes the current culture if it does not exist
        if (!CultureInfo._currentCulture) {
            CultureInfo._currentCulture = CultureInfo.createSpecificCulture("invariant");
        }

        // Returns the current culture
        return CultureInfo._currentCulture;
    }

    /**
     * Sets the current culture of the web application.
     * @param {CultureInfo} newCurrentCulture The new current culture of the web application.
     */
    public static set currentCulture(newCurrentCulture: CultureInfo) {
        CultureInfo._currentCulture = newCurrentCulture;
    }

    // #endregion

    // #region Public Properties

    /**
     * Gets the name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Gets the ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
     */
    public get twoLetterIsoCode(): string {
        return this._twoLetterIsoCode;
    }

    /**
     * Gets the full localized culture name in the format "language name (country/region name)".
     */
    public get displayName(): string {
        return this._displayName;
    }

    /**
     * Gets the full localized language name.
     */
    public get languageName(): string {
        return this._languageName;
    }

    /**
     * Gets the english culture name in the format "language name (country/region name)".
     */
    public get englishName(): string {
        return this._englishName;
    }

    /**
     * Gets an object that contains information about the specific numeric format of the culture.
     */
    public get numericFormat(): NumericFormatInfo {
        return this._numericFormat;
    }

    // #endregion

    // #region Public Static Methods

    /**
     * Registers a new culture.
     * @param {string} name The name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
     * @param {string} twoLetterIsoCode The ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
     * @param {string} displayName The full localized culture name in the format "language name (country/region name)".
     * @param {string} languageName The full localized language name.
     * @param {string} englishName The english culture name in the format "language name (country/region name)".
     * @param {NumericFormatInfo} numericFormat The object that contains information about the specific numeric format of the culture.
     */
    public static registerSpecificCulture(name: string, twoLetterIsoCode: string, displayName: string, languageName: string, englishName: string, numericFormat: NumericFormatInfo) {

        // Checks if the default cultures already exist, if not, then they are created
        CultureInfo.initializeSpecificCultures();

        // Creates the new culture and adds it to the registered cultures
        CultureInfo.cultureInfos[name] = new CultureInfo(name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat);
        CultureInfo.cultureInfos[twoLetterIsoCode] = new CultureInfo(name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat);
    }

    /**
     * Creates a specific culture from a culture name (e.g. "en", "de", "en-US", or "de-DE"). If the culture is not supported, then the default culture ("en-US") is created.
     * @param string} name The name of the culture for which the specific culture is to be created.
     * @return {CultureInfo} Returns the created specific culture info.
     */
    public static createSpecificCulture(name: string): CultureInfo {

        // Checks if the default cultures already exist, if not, then they are created
        CultureInfo.initializeSpecificCultures();

        // Checks if the specified culture exists, if it exists, then it is returned, otherwise the default culture is returned
        if (!CultureInfo.cultureInfos[name]) {
            return CultureInfo.cultureInfos["invariant"];
        } else {
            return CultureInfo.cultureInfos[name];
        }
    }

    // #endregion

    // #region Private Static Methods

    /**
     * Initializes the list of specific cultures. If the list has already been initialized, nothing has to be done.
     */
    private static initializeSpecificCultures() {

        // Checks if the default cultures already exist, if not, then they are created
        if (!CultureInfo.cultureInfos) {
            CultureInfo.cultureInfos = {
                "en-US": new CultureInfo("en-US", "en", "English (United States)", "English", "English (United States)", new NumericFormatInfo(".", ",", "k", "m", "b", "t", "$")),
                "de-DE": new CultureInfo("de-DE", "de", "Deutsch (Deutschland)", "Deutsch", "German (Germany)", new NumericFormatInfo(",", ".", "k", "m", "b", "t", "€")),
                "invariant": new CultureInfo("invariant", "invariant", "Invariant Culture", "Invariant", "Invariant Culture", new NumericFormatInfo(".", ",", "k", "m", "b", "t", "$"))
            };
            CultureInfo.cultureInfos["en"] = CultureInfo.cultureInfos["en-US"];
            CultureInfo.cultureInfos["de"] = CultureInfo.cultureInfos["de-DE"];
        }
    }

    // #endregion

}

// Exports the module, so that it can be loaded via Require
export = CultureInfo;