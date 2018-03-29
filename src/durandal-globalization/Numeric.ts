
///<amd-module name='durandal-globalization/Numeric'/>

// #region Import Directives

import CultureInfo = require("durandal-globalization/CultureInfo");
import numeral = require("numeral");

// #endregion

/**
 * Represents a class that can be used to deal with localized number formats.
 */
class Numeric {

    // #region Constructors

    /**
     * Initializes a new Numeric instance.
     * @param {number} value The value of the numeric.
     */
    constructor(value: number) {
        this.numericValue = numeral(value);
    }

    // #endregion

    // #region Private Static Fields

    /**
     * Contains all languages that have already been registered at the numeral module.
     */
    private static registeredLanguages: string[] = [];

    // #endregion

    // #region Private Fields

    /**
     * Contains the value of the numeric.
     */
    private numericValue: Numeral;

    // #endregion

    // #region Private Static Methods

    /**
     * Switches the language of the numeral module to that is used the numeric format of the culture.
     * @param {CultureInfo} culture The culture which should be used to switch the numeral language to.
     */
    private static switchLanguage(culture: CultureInfo) {

        // Checks whether the language has already been registered
        if (!Numeric.registeredLanguages.some(registeredLanguage => culture.name === registeredLanguage)) {

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
                ordinal: () => "",
                currency: {
                    symbol: culture.numericFormat.currencySymbol
                }
            });

            // Adds it to the registered languages
            Numeric.registeredLanguages.push(culture.name);
        }

        // Switches the language of numeral
        numeral.language(culture.name);
    }

    // #endregion

    // #region Public Static Methods

    /**
     * Initializes a new Numeric instance from a string.
     * @param {string} value The string value of the number.
     * @param {CultureInfo} culture The culture that should be used to parse the string.
     * @return {Numeric} Returns the created Numeric instance.
     */
    public static fromString(value: string, culture?: CultureInfo): Numeric {

        // Switches the language of numeric in order to interpret the string in the right culture
        Numeric.switchLanguage(!!culture ? culture : CultureInfo.currentCulture);

        // Returns the created Numeric instance
        return new Numeric(numeral().unformat(value));
    }

    /**
     * Initializes a new Numeric instance from a number.
     * @param {number} value The value of the number.
     * @return {Numeric} Returns the created Numeric instance.
     */
    public static fromNumber(value: number): Numeric {

        // Returns the created Numeric instance
        return new Numeric(value);
    }

    // #endregion

    // #region Public Methods

    /**
     * Gets the value of the numeric in case the object should take part in an arithmetic operation.
     * @return {number} Returns the value of the numeric as number.
     */
    public valueOf(): number {
        return this.numericValue.value();
    }

    /**
     * Gets the value of the numeric as number.
     * @return {number} Returns the value of the numeric as number.
     */
    public toNumber(): number {
        return this.numericValue.value();
    }

    /**
     * Gets a string representation of the numeric.
     * @param {string} format The format string.
     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
     * @return {string} Returns the string representation of the numeric.
     */
    public toString(format?: string, culture?: CultureInfo): string {

        // Switches the language of numeric in order to get the requested format
        Numeric.switchLanguage(!!culture ? culture : CultureInfo.currentCulture);

        // Returns the formatted string
        if (!!format) {
            return this.numericValue.format(format);
        } else {
            return this.numericValue.value().toString();
        }
    }

    // #endregion

}

// Exports the module, so that it can be loaded by Require
export = Numeric;