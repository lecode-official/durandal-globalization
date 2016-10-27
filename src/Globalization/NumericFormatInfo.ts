
///<amd-module name='Globalization/NumericFormatInfo'/>

/**
 * Represents an object that contains information about a specific number format. This is used by a CultureInfo to determine the default numeric format of the culture.
 */
class NumericFormatInfo {

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
    constructor(decimalSeparator: string, groupSeparator: string, thousandAbbreviation: string, millionAbbreviation: string, billionAbbreviation: string, trillionAbbreviation: string, currencySymbol: string) {
        this.decimalSeparator = decimalSeparator;
        this.groupSeparator = groupSeparator;
        this.thousandAbbreviation = thousandAbbreviation;
        this.millionAbbreviation = millionAbbreviation;
        this.billionAbbreviation = billionAbbreviation;
        this.trillionAbbreviation = trillionAbbreviation;
        this.currencySymbol = currencySymbol;
    }

    // #endregion

    // #region Public Properties
    
    /**
     * Gets or sets the decimal separator.
     */
    public decimalSeparator: string;
    
    /**
     * Gets or sets the group separator, which is the separator used for thousands, millions, etc.
     */
    public groupSeparator: string;

    /**
     * Gets or sets the abbreviation for a thousand.
     */
    public thousandAbbreviation: string;
    
    /**
     * Gets or sets the abbreviation for a million.
     */
    public millionAbbreviation: string;
    
    /**
     * Gets or sets the abbreviation for a billion.
     */
    public billionAbbreviation: string;
    
    /**
     * Gets or sets the abbreviation for a trillion.
     */
    public trillionAbbreviation: string;
    
    /**
     * Gets or sets the symbol of the currency.
     */
    public currencySymbol: string;

    // #endregion

}

// Exports the module, so that it can be loaded by Require
export = NumericFormatInfo;