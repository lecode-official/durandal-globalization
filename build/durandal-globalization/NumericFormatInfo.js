///<amd-module name='durandal-globalization/NumericFormatInfo'/>
define("durandal-globalization/NumericFormatInfo", ["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * Represents an object that contains information about a specific number format. This is used by a CultureInfo to determine the default numeric format of the culture.
     */
    var NumericFormatInfo = /** @class */ (function () {
        // #region Constructors
        /**
         * Initializes a new NumericFormatInfo instance.
         * @param {string} decimalSeparator The decimal separator.
         * @param {string} groupSeparator The group separator, which is the separator used for thousands, millions, etc.
         * @param {string} thousandAbbreviation The abbreviation for a thousand.
         * @param {string} millionAbbreviation The abbreviation for a million.
         * @param {string} billionAbbreviation The abbreviation for a billion.
         * @param {string} trillionAbbreviation The abbreviation for a trillion.
         * @param {string} currencySymbol The symbol of the currency.
         */
        function NumericFormatInfo(decimalSeparator, groupSeparator, thousandAbbreviation, millionAbbreviation, billionAbbreviation, trillionAbbreviation, currencySymbol) {
            this.decimalSeparator = decimalSeparator;
            this.groupSeparator = groupSeparator;
            this.thousandAbbreviation = thousandAbbreviation;
            this.millionAbbreviation = millionAbbreviation;
            this.billionAbbreviation = billionAbbreviation;
            this.trillionAbbreviation = trillionAbbreviation;
            this.currencySymbol = currencySymbol;
        }
        return NumericFormatInfo;
    }());
    return NumericFormatInfo;
});
