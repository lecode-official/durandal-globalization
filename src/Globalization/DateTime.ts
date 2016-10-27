
///<amd-module name='Globalization/DateTime'/>

// #region Import Directives

/// <reference path="../Typings/References.d.ts" />

import CultureInfo = require("Globalization/CultureInfo");
import moment = require("moment");
import TimeSpan = require("Globalization/TimeSpan");

// #endregion

/**
 * Represents an implementation of a culture-aware date object.
 */
class DateTime {

    // #region Constructors

    /**
     * Initializes a new DateTime instance.
     * @param {number} ticks The ticks (unix timestamp in milliseconds) that represents the date and time.
     */
    constructor(ticks: number) {
        this.dateTimeValue = moment(ticks);
    }

    // #endregion

    // #region Private Fields

    /**
     * Contains the current value of the date time.
     */
    private dateTimeValue: moment.Moment;

    // #endregion

    // #region Public Static Properties

    /**
     * Gets the current date and time.
     */
    public static get now(): DateTime {
        return new DateTime(moment().valueOf());
    }

    // #endregion

    // #region Public Properties

    /**
     * Gets the ticks (unix timestamp in milliseconds) that represent the date time.
     */
    public get ticks(): number {
        return this.valueOf();
    }

    /**
     * Gets the millisecond that the date time represents.
     */
    public get millisecond(): number {
        return this.dateTimeValue.millisecond();
    }

    /**
     * Gets the second that the date time represents.
     */
    public get second(): number {
        return this.dateTimeValue.second();
    }

    /**
     * Gets the minute that the date time represents.
     */
    public get minute(): number {
        return this.dateTimeValue.minute();
    }

    /**
     * Gets the hour that the date time represents.
     */
    public get hour(): number {
        return this.dateTimeValue.hour();
    }

    /**
     * Gets the day that the date time represents.
     */
    public get day(): number {
        return this.dateTimeValue.day();
    }

    /**
     * Gets the month that the date time represents.
     */
    public get month(): number {
        return this.dateTimeValue.month();
    }

    /**
     * Gets the year that the date time represents.
     */
    public get year(): number {
        return this.dateTimeValue.year();
    }

    /**
     * Gets a value that determines whether the date time is in UTC mode.
     */
    public get isUtc(): boolean {
        return this.dateTimeValue.utcOffset() == 0;
    }

    /**
     * Gets the UTC representation of the date time.
     */
    public get utc(): DateTime {
        var copy = new DateTime(this.ticks);
        copy.makeUtc();
        return copy;
    }

    /**
     * Gets a value that determines whether the date time is in local mode.
     */
    public get isLocal(): boolean {
        return this.dateTimeValue.utcOffset() == 0;
    }

    /**
     * Gets the local representation of the date time.
     */
    public get local(): DateTime {
        var copy = new DateTime(this.ticks);
        copy.makeLocal();
        return copy;
    }

    // #endregion

    // #region Public Static Methods
    
    /**
     * Initializes a new DateTime instance from ticks (unix timestamp in milliseconds).
     * @param {number} value The ticks that represents the date and time.
     * @return {DateTime} Returns the created DateTime instance. 
     */
    public static fromTicks(value: number): DateTime {
        return new DateTime(value);
    }

    /**
     * Initializes a new DateTime instance from a string (if no format string are specified, then the method intelligently tries to find out which format the date time has).
     * @param {string} value The string that is to be parsed and converted into a DateTime object.
     * @param {string} format The format string that is used to parse the string.
     * @param {CultureInfo} culture The culture in which the string is to be interpreted (only works in conjuction with a locale format string, e.g. "LLLL").
     * @return {DateTime|null} Returns the parsed DateTime object if the string could be parsed and null otherwise.
     */
    public static fromString(value: string, format?: string, culture?: CultureInfo, interpretAsUtc: boolean = false): DateTime|null {

        // Parses the string using moment
        var newMoment: moment.Moment;
        if (!!format) {
            if (!!culture) {
                newMoment = interpretAsUtc ? moment.utc(value, format, culture.twoLetterIsoCode, true) : moment(value, format, culture.twoLetterIsoCode, true);
            } else {
                newMoment = interpretAsUtc ? moment.utc(value, format, CultureInfo.currentCulture.twoLetterIsoCode, true) : moment(value, format, CultureInfo.currentCulture.twoLetterIsoCode, true);
            }
        } else {
            newMoment = interpretAsUtc ? moment.utc(value, undefined, true) : moment(value, undefined, true);
        }
        
        // Checks if the date time is valid, if so then the new date time is returned, otherwise null is returned
        if (newMoment.isValid()) {
            return new DateTime(newMoment.valueOf());
        } else {
            return null;
        }
    }
    
    // #endregion

    // #region Public Methods

    /**
     * Gets the value of the date time in case the object should take part in an arithmetic operation.
     * @return {number} Returns the value of the date time as number. 
     */
    public valueOf(): number {
        return this.dateTimeValue.valueOf();
    }

    /**
     * Adds the provided time span to the date time.
     * @param {TimeSpan} value The time span to be added.  
     * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
     */
    public add(value: TimeSpan): DateTime {
        this.dateTimeValue = moment(this.ticks + value.ticks);
        return this;
    }

    /**
     * Subtracts the provided time span from this date time.
     * @param {TimeSpan} value The time span to be subtracted.  
     * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtract(value: TimeSpan): DateTime {
        this.dateTimeValue = moment(this.ticks - value.ticks);
        return this;
    }

    /**
     * Adds the provided amount of milliseconds to the date time.
     * @param {number} value The amount of milliseconds to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addMilliseconds(value: number): DateTime {
        this.dateTimeValue.add(value, "milliseconds");
        return this;
    }

    /**
     * Subtracts the provided amount of milliseconds to the date time.
     * @param {number} value The amount of milliseconds to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractMillisecondss(value: number): DateTime {
        this.dateTimeValue.subtract(value, "milliseconds");
        return this;
    }

    /**
     * Adds the provided amount of seconds to the date time.
     * @param {number} value The amount of seconds to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addSeconds(value: number): DateTime {
        this.dateTimeValue.add(value, "seconds");
        return this;
    }

    /**
     * Subtracts the provided amount of seconds to the date time.
     * @param {number} value The amount of seconds to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractSeconds(value: number): DateTime {
        this.dateTimeValue.subtract(value, "seconds");
        return this;
    }

    /**
     * Adds the provided amount of minutes to the date time.
     * @param {number} value The amount of minutes to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addMinutes(value: number): DateTime {
        this.dateTimeValue.add(value, "minutes");
        return this;
    }

    /**
     * Subtracts the provided amount of minutes to the date time.
     * @param {number} value The amount of minutes to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractMinutes(value: number): DateTime {
        this.dateTimeValue.subtract(value, "minutes");
        return this;
    }

    /**
     * Adds the provided amount of hours to the date time.
     * @param {number} value The amount of hours to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addHours(value: number): DateTime {
        this.dateTimeValue.add(value, "hours");
        return this;
    }

    /**
     * Subtracts the provided amount of hours to the date time.
     * @param {number} value The amount of hours to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractHours(value: number): DateTime {
        this.dateTimeValue.subtract(value, "hours");
        return this;
    }

    /**
     * Adds the provided amount of days to the date time.
     * @param {number} value The amount of days to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addDays(value: number): DateTime {
        this.dateTimeValue.add(value, "days");
        return this;
    }

    /**
     * Subtracts the provided amount of days to the date time.
     * @param {number} value The amount of days to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractDays(value: number): DateTime {
        this.dateTimeValue.subtract(value, "days");
        return this;
    }

    /**
     * Adds the provided amount of months to the date time.
     * @param {number} value The amount of months to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addMonths(value: number): DateTime {
        this.dateTimeValue.add(value, "months");
        return this;
    }

    /**
     * Subtracts the provided amount of months to the date time.
     * @param {number} value The amount of months to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractMonths(value: number): DateTime {
        this.dateTimeValue.subtract(value, "months");
        return this;
    }

    /**
     * Adds the provided amount of years to the date time.
     * @param {number} value The amount of years to be added.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public addYears(value: number): DateTime {
        this.dateTimeValue.add(value, "years");
        return this;
    }

    /**
     * Subtracts the provided amount of years to the date time.
     * @param {number} value The amount of years to be subtracted.  
     * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
     */
    public subtractYears(value: number): DateTime {
        this.dateTimeValue.subtract(value, "years");
        return this;
    }

    /**
     * Sets the mode of the date time to UTC.
     */
    public makeUtc() {
        this.dateTimeValue = this.dateTimeValue.utc();
    }

    /**
     * Sets the mode of the date time to local.
     */
    public makeLocal() {
        this.dateTimeValue = this.dateTimeValue.local();
    }
    
    /**
     * Gets a string representation of the date time.
     * @param {string} format The format string.
     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used. 
     * @return {string} Returns the string representation of the date time.
     */
    public toString(format?: string, culture?: CultureInfo): string {

        // Sets the locale of the moment object depending on the culture
        this.dateTimeValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);

        // Returns the formatted value
        if (!format)
            return this.dateTimeValue.format();
        return this.dateTimeValue.format(format);
    }

    /**
    * Gets a string representation of the date time.
    * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used. 
    */
    public fromNow(culture?: CultureInfo): string {

        // Sets the locale of the moment object depending on the culture
        this.dateTimeValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);

        // Returns the formatted value
        return this.dateTimeValue.fromNow();
    }

    // #endregion    
}

// Exports the module, so that it can be loaded by Require
export = DateTime;