///<amd-module name='Globalization/TimeSpan'/>
define("Globalization/TimeSpan", ["require", "exports", "Globalization/CultureInfo", "moment"], function (require, exports, CultureInfo, moment) {
    "use strict";
    // #endregion
    /**
     * Represents an implementation of a time span that can be used to do date and time calculation.
     */
    var TimeSpan = /** @class */ (function () {
        // #region Constructors
        /**
         * Initializes a new TimeSpan instance.
         * @param {number} ticks The ticks (in milliseconds) that represents the time span.
         */
        function TimeSpan(ticks) {
            this.timeSpanValue = moment(ticks);
        }
        Object.defineProperty(TimeSpan, "zero", {
            // #endregion
            // #region Public Static Properties
            /**
             * Gets a time span that represents an empty span.
             */
            get: function () {
                return new TimeSpan(0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "ticks", {
            // #endregion
            // #region Public Properties
            /**
             * Gets the ticks (in milliseconds) that represent the time span.
             */
            get: function () {
                return this.valueOf();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalMilliseconds", {
            /**
             * Gets the total amount of milliseconds that represent the time span.
             */
            get: function () {
                return this.ticks;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalSeconds", {
            /**
             * Gets the total amount of seconds that represent the time span.
             */
            get: function () {
                return this.totalMilliseconds / 1000.0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalMinutes", {
            /**
             * Gets the total amount of minutes that represent the time span.
             */
            get: function () {
                return this.totalSeconds / 60.0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeSpan.prototype, "totalHours", {
            /**
             * Gets the total amount of hours that represent the time span.
             */
            get: function () {
                return this.totalMinutes / 60.0;
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Public Static Methods
        /**
         * Initializes a new TimeSpan instance from ticks (in milliseconds).
         * @param {number} value The ticks that represents the time span.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromTicks = function (value) {
            return new TimeSpan(value);
        };
        /**
         * Initializes a new TimeSpan instance from milliseconds.
         * @param {number} value The milliseconds that represents the time span.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromMilliseconds = function (value) {
            return TimeSpan.fromTicks(value);
        };
        /**
         * Initializes a new TimeSpan instance from seconds.
         * @param {number} value The seconds that represents the time span.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromSeconds = function (value) {
            return TimeSpan.fromTicks(value * 1000);
        };
        /**
         * Initializes a new TimeSpan instance from minutes.
         * @param {number} value The minutes that represents the time span.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromMinutes = function (value) {
            return TimeSpan.fromSeconds(value * 60);
        };
        /**
         * Initializes a new TimeSpan instance from hours.
         * @param {number} value The hours that represents the time span.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromHours = function (value) {
            return TimeSpan.fromMinutes(value * 60);
        };
        /**
         * Initializes a new TimeSpan instance from a date time. If a second date time is given, the difference is calculated.
         * @param {DateTime} first The date time that represents the time span.
         * @param {DateTime} second The date time that is used to calculate the difference to the first date time.
         * @return {TimeSpan} Returns the created TimeSpan instance.
         */
        TimeSpan.fromDateTime = function (first, second) {
            if (!!second) {
                return TimeSpan.fromTicks(first.ticks - second.ticks);
            }
            else {
                return TimeSpan.fromTicks(first.ticks);
            }
        };
        // #endregion
        // #region Public Methods
        /**
         * Gets the value of the time span in case the object should take part in an arithmetic operation.
         * @return {number} Returns the value of the time span as number.
         */
        TimeSpan.prototype.valueOf = function () {
            return this.timeSpanValue.valueOf();
        };
        /**
         * Adds the provided time span to this time span.
         * @param {TimeSpan} value The time span to be added.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.add = function (value) {
            this.timeSpanValue = moment(this.ticks + value.ticks);
            return this;
        };
        /**
         * Subtracts the provided time span from this time span.
         * @param {TimeSpan} value The time span to be subtracted.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.subtract = function (value) {
            this.timeSpanValue = moment(this.ticks - value.ticks);
            return this;
        };
        /**
         * Adds the provided amount of milliseconds to the time span.
         * @param {number} value The amount of milliseconds to be added.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.addMilliseconds = function (value) {
            this.timeSpanValue.add(value, "milliseconds");
            return this;
        };
        /**
         * Subtracts the provided amount of milliseconds to the time span.
         * @param {number} value The amount of milliseconds to be subtracted.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.subtractMilliseconds = function (value) {
            this.timeSpanValue.subtract(value, "milliseconds");
            return this;
        };
        /**
         * Adds the provided amount of seconds to the time span.
         * @param {number} value The amount of seconds to be added.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.addSeconds = function (value) {
            this.timeSpanValue.add(value, "seconds");
            return this;
        };
        /**
         * Subtracts the provided amount of seconds to the time span.
         * @param {number} value The amount of seconds to be subtracted.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.subtractSeconds = function (value) {
            this.timeSpanValue.subtract(value, "seconds");
            return this;
        };
        /**
         * Adds the provided amount of minutes to the time span.
         * @param {number} value The amount of minutes to be added.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.addMinutes = function (value) {
            this.timeSpanValue.add(value, "minutes");
            return this;
        };
        /**
         * Subtracts the provided amount of minutes to the time span.
         * @param {number} value The amount of minutes to be subtracted.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.subtractMinutes = function (value) {
            this.timeSpanValue.subtract(value, "minutes");
            return this;
        };
        /**
         * Adds the provided amount of hours to the time span.
         * @param {number} value The amount of hours to be added.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.addHours = function (value) {
            this.timeSpanValue.add(value, "hours");
            return this;
        };
        /**
         * Subtracts the provided amount of hours to the time span.
         * @param {number} value The amount of hours to be subtracted.
         * @return {TimeSpan} Returns the current time span in order to easily chain arithmetic operations.
         */
        TimeSpan.prototype.subtractHours = function (value) {
            this.timeSpanValue.subtract(value, "hours");
            return this;
        };
        /**
         * Gets a string representation of the time span.
         * @param {string} format The format string.
         * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
         * @return {string} Returns the string representation of the time span.
         */
        TimeSpan.prototype.toString = function (format, culture) {
            // Sets the locale of the moment object depending on the culture
            this.timeSpanValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);
            // Returns the formatted value
            if (!format)
                return this.timeSpanValue.format();
            return this.timeSpanValue.format(format);
        };
        return TimeSpan;
    }());
    return TimeSpan;
});
