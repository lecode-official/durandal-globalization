
///<amd-module name='Globalization/TimeSpan'/>

// #region Import Directives

import CultureInfo = require("Globalization/CultureInfo");
import DateTime = require("Globalization/DateTime");
import moment = require("moment");

// #endregion

/**
 * Represents an implementation of a time span that can be used to do date and time calculation.
 */
class TimeSpan {

    // #region Constructors

    /**
     * Initializes a new TimeSpan instance.
     * @param {number} ticks The ticks (in milliseconds) that represents the time span.
     */
    constructor(ticks: number) {
        this.timeSpanValue = moment(ticks);
    }

    // #endregion

    // #region Private Fields

    /**
     * Contains the current value of the time span.
     */
    private timeSpanValue: moment.Moment;

    // #endregion

    // #region Public Static Properties

    /**
     * Gets a time span that represents an empty span.
     */
    public static get zero(): TimeSpan {
        return new TimeSpan(0);
    }

    // #endregion

    // #region Public Properties

    /**
     * Gets the ticks (in milliseconds) that represent the time span.
     */
    public get ticks(): number {
        return this.valueOf();
    }

    /**
     * Gets the total amount of milliseconds that represent the time span.
     */
    public get totalMilliseconds(): number {
        return this.ticks;
    }

    /**
     * Gets the total amount of seconds that represent the time span.
     */
    public get totalSeconds(): number {
        return this.totalMilliseconds / 1000.0;
    }

    /**
     * Gets the total amount of minutes that represent the time span.
     */
    public get totalMinutes(): number {
        return this.totalSeconds / 60.0;
    }

    /**
     * Gets the total amount of hours that represent the time span.
     */
    public get totalHours(): number {
        return this.totalMinutes / 60.0;
    }

    // #endregion

    // #region Public Static Methods
    
    /**
     * Initializes a new TimeSpan instance from ticks (in milliseconds).
     * @param {number} value The ticks that represents the time span.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromTicks(value: number): TimeSpan {
        return new TimeSpan(value);
    }

    /**
     * Initializes a new TimeSpan instance from milliseconds.
     * @param {number} value The milliseconds that represents the time span.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromMilliseconds(value: number): TimeSpan {
        return TimeSpan.fromTicks(value);
    }

    /**
     * Initializes a new TimeSpan instance from seconds.
     * @param {number} value The seconds that represents the time span.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromSeconds(value: number): TimeSpan {
        return TimeSpan.fromTicks(value * 1000);
    }

    /**
     * Initializes a new TimeSpan instance from minutes.
     * @param {number} value The minutes that represents the time span.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromMinutes(value: number): TimeSpan {
        return TimeSpan.fromSeconds(value * 60);
    }

    /**
     * Initializes a new TimeSpan instance from hours.
     * @param {number} value The hours that represents the time span.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromHours(value: number): TimeSpan {
        return TimeSpan.fromMinutes(value * 60);
    }
    
    /**
     * Initializes a new TimeSpan instance from a date time. If a second date time is given, the difference is calculated.
     * @param {DateTime} first The date time that represents the time span.
     * @param {DateTime} second The date time that is used to calculate the difference to the first date time.
     * @return {TimeSpan} Returns the created TimeSpan instance. 
     */
    public static fromDateTime(first: DateTime, second?: DateTime): TimeSpan {
        if (!!second) {
            return TimeSpan.fromTicks(first.ticks - second.ticks);
        } else {
            return TimeSpan.fromTicks(first.ticks);
        }
    }

    // #endregion

    // #region Public Methods

    /**
     * Gets the value of the time span in case the object should take part in an arithmetic operation.
     * @return {number} Returns the value of the time span as number. 
     */
    public valueOf(): number {
        return this.timeSpanValue.valueOf();
    }
    
    /**
     * Adds the provided time span to this time span.
     * @param {TimeSpan} value The time span to be added.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public add(value: TimeSpan): TimeSpan {
        this.timeSpanValue = moment(this.ticks + value.ticks);
        return this;
    }

    /**
     * Subtracts the provided time span from this time span.
     * @param {TimeSpan} value The time span to be subtracted.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public subtract(value: TimeSpan): TimeSpan {
        this.timeSpanValue = moment(this.ticks - value.ticks);
        return this;
    }

    /**
     * Adds the provided amount of milliseconds to the time span.
     * @param {number} value The amount of milliseconds to be added.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public addMilliseconds(value: number): TimeSpan {
        this.timeSpanValue.add(value, "milliseconds");
        return this;
    }

    /**
     * Subtracts the provided amount of milliseconds to the time span.
     * @param {number} value The amount of milliseconds to be subtracted.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public subtractMilliseconds(value: number): TimeSpan {
        this.timeSpanValue.subtract(value, "milliseconds");
        return this;
    }

    /**
     * Adds the provided amount of seconds to the time span.
     * @param {number} value The amount of seconds to be added.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public addSeconds(value: number): TimeSpan {
        this.timeSpanValue.add(value, "seconds");
        return this;
    }

    /**
     * Subtracts the provided amount of seconds to the time span.
     * @param {number} value The amount of seconds to be subtracted.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public subtractSeconds(value: number): TimeSpan {
        this.timeSpanValue.subtract(value, "seconds");
        return this;
    }

    /**
     * Adds the provided amount of minutes to the time span.
     * @param {number} value The amount of minutes to be added.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public addMinutes(value: number): TimeSpan {
        this.timeSpanValue.add(value, "minutes");
        return this;
    }

    /**
     * Subtracts the provided amount of minutes to the time span.
     * @param {number} value The amount of minutes to be subtracted.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public subtractMinutes(value: number): TimeSpan {
        this.timeSpanValue.subtract(value, "minutes");
        return this;
    }

    /**
     * Adds the provided amount of hours to the time span.
     * @param {number} value The amount of hours to be added.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public addHours(value: number): TimeSpan {
        this.timeSpanValue.add(value, "hours");
        return this;
    }

    /**
     * Subtracts the provided amount of hours to the time span.
     * @param {number} value The amount of hours to be subtracted.  
     * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
     */
    public subtractHours(value: number): TimeSpan {
        this.timeSpanValue.subtract(value, "hours");
        return this;
    }
    
    /**
     * Gets a string representation of the time span.
     * @param {string} format The format string.
     * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used. 
     * @return {string} Returns the string representation of the time span.
     */
    public toString(format?: string, culture?: CultureInfo): string {

        // Sets the locale of the moment object depending on the culture
        this.timeSpanValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);

        // Returns the formatted value
        if (!format)
            return this.timeSpanValue.format();
        return this.timeSpanValue.format(format);
    }

    // #endregion

}

// Exports the module, so that it can be loaded by Require
export = TimeSpan;