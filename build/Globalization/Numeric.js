///<amd-module name='Globalization/Numeric'/>
define("Globalization/Numeric", ["require", "exports", "Globalization/CultureInfo", "numeral"], function (require, exports, CultureInfo, numeral) {
    "use strict";
    // #endregion
    /**
     * Represents a class that can be used to deal with localized number formats.
     */
    var Numeric = /** @class */ (function () {
        // #region Constructors
        /**
         * Initializes a new Numeric instance.
         * @param {number} value The value of the numeric.
         */
        function Numeric(value) {
            this.numericValue = numeral(value);
        }
        // #endregion
        // #region Private Static Methods
        /**
         * Switches the language of the numeral module to that is used the numeric format of the culture.
         * @param {CultureInfo} culture The culture which should be used to switch the numeral language to.
         */
        Numeric.switchLanguage = function (culture) {
            // Checks whether the language has already been registered
            if (!Numeric.registeredLanguages.some(function (registeredLanguage) { return culture.name === registeredLanguage; })) {
                // Registers the language of the culture
                numeral.language(culture.name, {
                    delimiters: {
                        thousands: culture.numericFormat.groupSeparator,
                        decimal: culture.numericFormat.decimalSeparator
                    },
                    abbreviations: {
                        thousand: culture.numericFormat.thousandAbbreviation,
                        million: culture.numericFormat.millionAbbreviation,
                        billion: culture.numericFormat.billionAbbreviation,
                        trillion: culture.numericFormat.trillionAbbreviation
                    },
                    ordinal: function () { return ""; },
                    currency: {
                        symbol: culture.numericFormat.currencySymbol
                    }
                });
                // Adds it to the registered languages
                Numeric.registeredLanguages.push(culture.name);
            }
            // Switches the language of numeral
            numeral.language(culture.name);
        };
        // #endregion
        // #region Public Static Methods
        /**
         * Initializes a new Numeric instance from a string.
         * @param {string} value The string value of the number.
         * @param {CultureInfo} culture The culture that should be used to parse the string.
         * @return {Numeric} Returns the created Numeric instance.
         */
        Numeric.fromString = function (value, culture) {
            // Switches the language of numeric in order to interpret the string in the right culture
            Numeric.switchLanguage(!!culture ? culture : CultureInfo.currentCulture);
            // Returns the created Numeric instance
            return new Numeric(numeral().unformat(value));
        };
        /**
         * Initializes a new Numeric instance from a number.
         * @param {number} value The value of the number.
         * @return {Numeric} Returns the created Numeric instance.
         */
        Numeric.fromNumber = function (value) {
            // Returns the created Numeric instance
            return new Numeric(value);
        };
        // #endregion
        // #region Public Methods
        /**
         * Gets the value of the numeric in case the object should take part in an arithmetic operation.
         * @return {number} Returns the value of the numeric as number.
         */
        Numeric.prototype.valueOf = function () {
            return this.numericValue.value();
        };
        /**
         * Gets the value of the numeric as number.
         * @return {number} Returns the value of the numeric as number.
         */
        Numeric.prototype.toNumber = function () {
            return this.numericValue.value();
        };
        /**
         * Gets a string representation of the numeric.
         * @param {string} format The format string.
         * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
         * @return {string} Returns the string representation of the numeric.
         */
        Numeric.prototype.toString = function (format, culture) {
            // Switches the language of numeric in order to get the requested format
            Numeric.switchLanguage(!!culture ? culture : CultureInfo.currentCulture);
            // Returns the formatted string
            if (!!format) {
                return this.numericValue.format(format);
            }
            else {
                return this.numericValue.value().toString();
            }
        };
        // #endregion
        // #region Private Static Fields
        /**
         * Contains all languages that have already been registered at the numeral module.
         */
        Numeric.registeredLanguages = [];
        return Numeric;
    }());
    return Numeric;
});
