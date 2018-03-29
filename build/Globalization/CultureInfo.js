///<amd-module name='Globalization/CultureInfo'/>
define("Globalization/CultureInfo", ["require", "exports", "Globalization/NumericFormatInfo"], function (require, exports, NumericFormatInfo) {
    "use strict";
    // #endregion
    /**
     * Represents a class, that provides information about a specific culture.
     */
    var CultureInfo = /** @class */ (function () {
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
        function CultureInfo(name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat) {
            this._name = name;
            this._twoLetterIsoCode = twoLetterIsoCode;
            this._displayName = displayName;
            this._languageName = languageName;
            this._englishName = englishName;
            this._numericFormat = numericFormat;
        }
        Object.defineProperty(CultureInfo, "currentCulture", {
            // #endregion
            // #region Public Static Properties
            /**
             * Gets the current culture of the web application. If the culture requested by the browser is not supported, then the default culture will be returned.
             */
            get: function () {
                // Initializes the current culture if it does not exist
                if (!CultureInfo._currentCulture) {
                    CultureInfo._currentCulture = CultureInfo.createSpecificCulture("invariant");
                }
                // Returns the current culture
                return CultureInfo._currentCulture;
            },
            /**
             * Sets the current culture of the web application.
             * @param {CultureInfo} newCurrentCulture The new current culture of the web application.
             */
            set: function (newCurrentCulture) {
                CultureInfo._currentCulture = newCurrentCulture;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "name", {
            // #endregion
            // #region Public Properties
            /**
             * Gets the name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
             */
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "twoLetterIsoCode", {
            /**
             * Gets the ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
             */
            get: function () {
                return this._twoLetterIsoCode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "displayName", {
            /**
             * Gets the full localized culture name in the format "language name (country/region name)".
             */
            get: function () {
                return this._displayName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "languageName", {
            /**
             * Gets the full localized language name.
             */
            get: function () {
                return this._languageName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "englishName", {
            /**
             * Gets the english culture name in the format "language name (country/region name)".
             */
            get: function () {
                return this._englishName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CultureInfo.prototype, "numericFormat", {
            /**
             * Gets an object that contains information about the specific numeric format of the culture.
             */
            get: function () {
                return this._numericFormat;
            },
            enumerable: true,
            configurable: true
        });
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
        CultureInfo.registerSpecificCulture = function (name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat) {
            // Checks if the default cultures already exist, if not, then they are created
            CultureInfo.initializeSpecificCultures();
            // Creates the new culture and adds it to the registered cultures
            CultureInfo.cultureInfos[name] = new CultureInfo(name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat);
            CultureInfo.cultureInfos[twoLetterIsoCode] = new CultureInfo(name, twoLetterIsoCode, displayName, languageName, englishName, numericFormat);
        };
        /**
         * Creates a specific culture from a culture name (e.g. "en", "de", "en-US", or "de-DE"). If the culture is not supported, then the default culture ("en-US") is created.
         * @param string} name The name of the culture for which the specific culture is to be created.
         * @return {CultureInfo} Returns the created specific culture info.
         */
        CultureInfo.createSpecificCulture = function (name) {
            // Checks if the default cultures already exist, if not, then they are created
            CultureInfo.initializeSpecificCultures();
            // Checks if the specified culture exists, if it exists, then it is returned, otherwise the default culture is returned
            if (!CultureInfo.cultureInfos[name]) {
                return CultureInfo.cultureInfos["invariant"];
            }
            else {
                return CultureInfo.cultureInfos[name];
            }
        };
        // #endregion
        // #region Private Static Methods
        /**
         * Initializes the list of specific cultures. If the list has already been initialized, nothing has to be done.
         */
        CultureInfo.initializeSpecificCultures = function () {
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
        };
        return CultureInfo;
    }());
    return CultureInfo;
});
