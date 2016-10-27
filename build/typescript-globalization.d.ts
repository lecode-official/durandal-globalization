declare module 'Globalization/CultureInfo' {
	import NumericFormatInfo = require("Globalization/NumericFormatInfo"); class CultureInfo {
	    /**
	     * Initializes a new CultureInfo instance.
	     * @param {string} name The name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
	     * @param {string} twoLetterIsoCode The ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
	     * @param {string} displayName The full localized culture name in the format "language name (country/region name)".
	     * @param {string} languageName The full localized language name.
	     * @param {string} englishName The english culture name in the format "language name (country/region name)".
	     * @param {NumericFormatInfo} numericFormat The object that contains information about the specific numeric format of the culture.
	     */
	    constructor(name: string, twoLetterIsoCode: string, displayName: string, languageName: string, englishName: string, numericFormat: NumericFormatInfo);
	    /**
	     * Contains all cultures that are supported by the web application.
	     */
	    private static _currentCulture;
	    /**
	     * Contains the built-in culture infos for the most important cultures.
	     */
	    private static cultureInfos;
	    /**
	     * Contains the name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
	     */
	    private _name;
	    /**
	     * Contains the ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
	     */
	    private _twoLetterIsoCode;
	    /**
	     * Contains the full localized culture name in the format "language name (country/region name)".
	     */
	    private _displayName;
	    /**
	     * Contains the full localized language name.
	     */
	    private _languageName;
	    /**
	     * Contains the english culture name in the format "language name (country/region name)".
	     */
	    private _englishName;
	    /**
	     * Contains an object that contains information about the specific numeric format of the culture.
	     */
	    private _numericFormat;
	    /**
	     * Gets the current culture of the web application. If the culture requested by the browser is not supported, then the default culture will be returned.
	     */
	    static readonly currentCulture: CultureInfo;
	    /**
	     * Gets the name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
	     */
	    readonly name: string;
	    /**
	     * Gets the ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
	     */
	    readonly twoLetterIsoCode: string;
	    /**
	     * Gets the full localized culture name in the format "language name (country/region name)".
	     */
	    readonly displayName: string;
	    /**
	     * Gets the full localized language name.
	     */
	    readonly languageName: string;
	    /**
	     * Gets the english culture name in the format "language name (country/region name)".
	     */
	    readonly englishName: string;
	    /**
	     * Gets an object that contains information about the specific numeric format of the culture.
	     */
	    readonly numericFormat: NumericFormatInfo;
	    /**
	     * Registers a new culture.
	     * @param {string} name The name of the culture, e.g. "de-DE" or "en-US". It must be the name of a specific culture, invariant cultures are not allowed (i.e. "en-US" instead of "en").
	     * @param {string} twoLetterIsoCode The ISO code of the culture, e.g. "de" for "de-DE" or "en" for "en-US".
	     * @param {string} displayName The full localized culture name in the format "language name (country/region name)".
	     * @param {string} languageName The full localized language name.
	     * @param {string} englishName The english culture name in the format "language name (country/region name)".
	     * @param {NumericFormatInfo} numericFormat The object that contains information about the specific numeric format of the culture.
	     */
	    static registerSpecificCulture(name: string, twoLetterIsoCode: string, displayName: string, languageName: string, englishName: string, numericFormat: NumericFormatInfo): void;
	    /**
	     * Creates a specific culture from a culture name (e.g. "en", "de", "en-US", or "de-DE"). If the culture is not supported, then the default culture ("en-US") is created.
	     * @param string} name The name of the culture for which the specific culture is to be created.
	     * @return {CultureInfo} Returns the created specific culture info.
	     */
	    static createSpecificCulture(name: string): CultureInfo;
	    /**
	     * Initializes the list of specific cultures. If the list has already been initialized, nothing has to be done.
	     */
	    private static initializeSpecificCultures();
	}
	export = CultureInfo;

}

/// <reference path="../../bower_components/DefinitelyTyped/jquery/jquery.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/moment/moment.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/numeraljs/numeraljs.d.ts" />
declare module 'Globalization/DateTime' {
	/// <reference path="../Typings/References.d.ts" />
	import CultureInfo = require("Globalization/CultureInfo");
	import TimeSpan = require("Globalization/TimeSpan"); class DateTime {
	    /**
	     * Initializes a new DateTime instance.
	     * @param {number} ticks The ticks (unix timestamp in milliseconds) that represents the date and time.
	     */
	    constructor(ticks: number);
	    /**
	     * Contains the current value of the date time.
	     */
	    private dateTimeValue;
	    /**
	     * Gets the current date and time.
	     */
	    static readonly now: DateTime;
	    /**
	     * Gets the ticks (unix timestamp in milliseconds) that represent the date time.
	     */
	    readonly ticks: number;
	    /**
	     * Gets the millisecond that the date time represents.
	     */
	    readonly millisecond: number;
	    /**
	     * Gets the second that the date time represents.
	     */
	    readonly second: number;
	    /**
	     * Gets the minute that the date time represents.
	     */
	    readonly minute: number;
	    /**
	     * Gets the hour that the date time represents.
	     */
	    readonly hour: number;
	    /**
	     * Gets the day that the date time represents.
	     */
	    readonly day: number;
	    /**
	     * Gets the month that the date time represents.
	     */
	    readonly month: number;
	    /**
	     * Gets the year that the date time represents.
	     */
	    readonly year: number;
	    /**
	     * Gets a value that determines whether the date time is in UTC mode.
	     */
	    readonly isUtc: boolean;
	    /**
	     * Gets the UTC representation of the date time.
	     */
	    readonly utc: DateTime;
	    /**
	     * Gets a value that determines whether the date time is in local mode.
	     */
	    readonly isLocal: boolean;
	    /**
	     * Gets the local representation of the date time.
	     */
	    readonly local: DateTime;
	    /**
	     * Initializes a new DateTime instance from ticks (unix timestamp in milliseconds).
	     * @param {number} value The ticks that represents the date and time.
	     * @return {DateTime} Returns the created DateTime instance.
	     */
	    static fromTicks(value: number): DateTime;
	    /**
	     * Initializes a new DateTime instance from a string (if no format string are specified, then the method intelligently tries to find out which format the date time has).
	     * @param {string} value The string that is to be parsed and converted into a DateTime object.
	     * @param {string} format The format string that is used to parse the string.
	     * @param {CultureInfo} culture The culture in which the string is to be interpreted (only works in conjuction with a locale format string, e.g. "LLLL").
	     * @return {DateTime|null} Returns the parsed DateTime object if the string could be parsed and null otherwise.
	     */
	    static fromString(value: string, format?: string, culture?: CultureInfo, interpretAsUtc?: boolean): DateTime | null;
	    /**
	     * Gets the value of the date time in case the object should take part in an arithmetic operation.
	     * @return {number} Returns the value of the date time as number.
	     */
	    valueOf(): number;
	    /**
	     * Adds the provided time span to the date time.
	     * @param {TimeSpan} value The time span to be added.
	     * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    add(value: TimeSpan): DateTime;
	    /**
	     * Subtracts the provided time span from this date time.
	     * @param {TimeSpan} value The time span to be subtracted.
	     * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtract(value: TimeSpan): DateTime;
	    /**
	     * Adds the provided amount of milliseconds to the date time.
	     * @param {number} value The amount of milliseconds to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addMilliseconds(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of milliseconds to the date time.
	     * @param {number} value The amount of milliseconds to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractMillisecondss(value: number): DateTime;
	    /**
	     * Adds the provided amount of seconds to the date time.
	     * @param {number} value The amount of seconds to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addSeconds(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of seconds to the date time.
	     * @param {number} value The amount of seconds to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractSeconds(value: number): DateTime;
	    /**
	     * Adds the provided amount of minutes to the date time.
	     * @param {number} value The amount of minutes to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addMinutes(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of minutes to the date time.
	     * @param {number} value The amount of minutes to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractMinutes(value: number): DateTime;
	    /**
	     * Adds the provided amount of hours to the date time.
	     * @param {number} value The amount of hours to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addHours(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of hours to the date time.
	     * @param {number} value The amount of hours to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractHours(value: number): DateTime;
	    /**
	     * Adds the provided amount of days to the date time.
	     * @param {number} value The amount of days to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addDays(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of days to the date time.
	     * @param {number} value The amount of days to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractDays(value: number): DateTime;
	    /**
	     * Adds the provided amount of months to the date time.
	     * @param {number} value The amount of months to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addMonths(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of months to the date time.
	     * @param {number} value The amount of months to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractMonths(value: number): DateTime;
	    /**
	     * Adds the provided amount of years to the date time.
	     * @param {number} value The amount of years to be added.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    addYears(value: number): DateTime;
	    /**
	     * Subtracts the provided amount of years to the date time.
	     * @param {number} value The amount of years to be subtracted.
	     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
	     */
	    subtractYears(value: number): DateTime;
	    /**
	     * Sets the mode of the date time to UTC.
	     */
	    makeUtc(): void;
	    /**
	     * Sets the mode of the date time to local.
	     */
	    makeLocal(): void;
	    /**
	     * Gets a string representation of the date time.
	     * @param {string} format The format string.
	     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
	     * @return {string} Returns the string representation of the date time.
	     */
	    toString(format?: string, culture?: CultureInfo): string;
	    /**
	    * Gets a string representation of the date time.
	    * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
	    */
	    fromNow(culture?: CultureInfo): string;
	}
	export = DateTime;

}
declare module 'Globalization/Numeric' {
	/// <reference path="../Typings/References.d.ts" />
	import CultureInfo = require("Globalization/CultureInfo"); class Numeric {
	    /**
	     * Initializes a new Numeric instance.
	     * @param {number} value The value of the numeric.
	     */
	    constructor(value: number);
	    /**
	     * Contains all languages that have already been registered at the numeral module.
	     */
	    private static registeredLanguages;
	    /**
	     * Contains the value of the numeric.
	     */
	    private numericValue;
	    /**
	     * Switches the language of the numeral module to that is used the numeric format of the culture.
	     * @param {CultureInfo} culture The culture which should be used to switch the numeral language to.
	     */
	    private static switchLanguage(culture);
	    /**
	     * Initializes a new Numeric instance from a string.
	     * @param {string} value The string value of the number.
	     * @param {CultureInfo} culture The culture that should be used to parse the string.
	     * @return {Numeric} Returns the created Numeric instance.
	     */
	    static fromString(value: string, culture?: CultureInfo): Numeric;
	    /**
	     * Initializes a new Numeric instance from a number.
	     * @param {number} value The value of the number.
	     * @return {Numeric} Returns the created Numeric instance.
	     */
	    static fromNumber(value: number): Numeric;
	    /**
	     * Gets the value of the numeric in case the object should take part in an arithmetic operation.
	     * @return {number} Returns the value of the numeric as number.
	     */
	    valueOf(): number;
	    /**
	     * Gets the value of the numeric as number.
	     * @return {number} Returns the value of the numeric as number.
	     */
	    toNumber(): number;
	    /**
	     * Gets a string representation of the numeric.
	     * @param {string} format The format string.
	     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
	     * @return {string} Returns the string representation of the numeric.
	     */
	    toString(format?: string, culture?: CultureInfo): string;
	}
	export = Numeric;

}
declare module 'Globalization/NumericFormatInfo' {
	 class NumericFormatInfo {
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
	    constructor(decimalSeparator: string, groupSeparator: string, thousandAbbreviation: string, millionAbbreviation: string, billionAbbreviation: string, trillionAbbreviation: string, currencySymbol: string);
	    /**
	     * Gets or sets the decimal separator.
	     */
	    decimalSeparator: string;
	    /**
	     * Gets or sets the group separator, which is the separator used for thousands, millions, etc.
	     */
	    groupSeparator: string;
	    /**
	     * Gets or sets the abbreviation for a thousand.
	     */
	    thousandAbbreviation: string;
	    /**
	     * Gets or sets the abbreviation for a million.
	     */
	    millionAbbreviation: string;
	    /**
	     * Gets or sets the abbreviation for a billion.
	     */
	    billionAbbreviation: string;
	    /**
	     * Gets or sets the abbreviation for a trillion.
	     */
	    trillionAbbreviation: string;
	    /**
	     * Gets or sets the symbol of the currency.
	     */
	    currencySymbol: string;
	}
	export = NumericFormatInfo;

}
declare module 'Globalization/TimeSpan' {
	/// <reference path="../Typings/References.d.ts" />
	import CultureInfo = require("Globalization/CultureInfo");
	import DateTime = require("Globalization/DateTime"); class TimeSpan {
	    /**
	     * Initializes a new TimeSpan instance.
	     * @param {number} ticks The ticks (in milliseconds) that represents the time span.
	     */
	    constructor(ticks: number);
	    /**
	     * Contains the current value of the time span.
	     */
	    private timeSpanValue;
	    /**
	     * Gets a time span that represents an empty span.
	     */
	    static readonly zero: TimeSpan;
	    /**
	     * Gets the ticks (in milliseconds) that represent the time span.
	     */
	    readonly ticks: number;
	    /**
	     * Gets the total amount of milliseconds that represent the time span.
	     */
	    readonly totalMilliseconds: number;
	    /**
	     * Gets the total amount of seconds that represent the time span.
	     */
	    readonly totalSeconds: number;
	    /**
	     * Gets the total amount of minutes that represent the time span.
	     */
	    readonly totalMinutes: number;
	    /**
	     * Gets the total amount of hours that represent the time span.
	     */
	    readonly totalHours: number;
	    /**
	     * Initializes a new TimeSpan instance from ticks (in milliseconds).
	     * @param {number} value The ticks that represents the time span.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromTicks(value: number): TimeSpan;
	    /**
	     * Initializes a new TimeSpan instance from milliseconds.
	     * @param {number} value The milliseconds that represents the time span.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromMilliseconds(value: number): TimeSpan;
	    /**
	     * Initializes a new TimeSpan instance from seconds.
	     * @param {number} value The seconds that represents the time span.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromSeconds(value: number): TimeSpan;
	    /**
	     * Initializes a new TimeSpan instance from minutes.
	     * @param {number} value The minutes that represents the time span.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromMinutes(value: number): TimeSpan;
	    /**
	     * Initializes a new TimeSpan instance from hours.
	     * @param {number} value The hours that represents the time span.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromHours(value: number): TimeSpan;
	    /**
	     * Initializes a new TimeSpan instance from a date time. If a second date time is given, the difference is calculated.
	     * @param {DateTime} first The date time that represents the time span.
	     * @param {DateTime} second The date time that is used to calculate the difference to the first date time.
	     * @return {TimeSpan} Returns the created TimeSpan instance.
	     */
	    static fromDateTime(first: DateTime, second?: DateTime): TimeSpan;
	    /**
	     * Gets the value of the time span in case the object should take part in an arithmetic operation.
	     * @return {number} Returns the value of the time span as number.
	     */
	    valueOf(): number;
	    /**
	     * Adds the provided time span to this time span.
	     * @param {TimeSpan} value The time span to be added.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    add(value: TimeSpan): TimeSpan;
	    /**
	     * Subtracts the provided time span from this time span.
	     * @param {TimeSpan} value The time span to be subtracted.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    subtract(value: TimeSpan): TimeSpan;
	    /**
	     * Adds the provided amount of milliseconds to the time span.
	     * @param {number} value The amount of milliseconds to be added.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    addMilliseconds(value: number): TimeSpan;
	    /**
	     * Subtracts the provided amount of milliseconds to the time span.
	     * @param {number} value The amount of milliseconds to be subtracted.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    subtractMilliseconds(value: number): TimeSpan;
	    /**
	     * Adds the provided amount of seconds to the time span.
	     * @param {number} value The amount of seconds to be added.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    addSeconds(value: number): TimeSpan;
	    /**
	     * Subtracts the provided amount of seconds to the time span.
	     * @param {number} value The amount of seconds to be subtracted.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    subtractSeconds(value: number): TimeSpan;
	    /**
	     * Adds the provided amount of minutes to the time span.
	     * @param {number} value The amount of minutes to be added.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    addMinutes(value: number): TimeSpan;
	    /**
	     * Subtracts the provided amount of minutes to the time span.
	     * @param {number} value The amount of minutes to be subtracted.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    subtractMinutes(value: number): TimeSpan;
	    /**
	     * Adds the provided amount of hours to the time span.
	     * @param {number} value The amount of hours to be added.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    addHours(value: number): TimeSpan;
	    /**
	     * Subtracts the provided amount of hours to the time span.
	     * @param {number} value The amount of hours to be subtracted.
	     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
	     */
	    subtractHours(value: number): TimeSpan;
	    /**
	     * Gets a string representation of the time span.
	     * @param {string} format The format string.
	     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
	     * @return {string} Returns the string representation of the time span.
	     */
	    toString(format?: string, culture?: CultureInfo): string;
	}
	export = TimeSpan;

}
