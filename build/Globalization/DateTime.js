///<amd-module name='Globalization/DateTime'/>
define("Globalization/DateTime", ["require", "exports", "Globalization/CultureInfo", "moment"], function (require, exports, CultureInfo, moment) {
    "use strict";
    // #endregion
    /**
     * Represents an implementation of a culture-aware date object.
     */
    var DateTime = /** @class */ (function () {
        // #region Constructors
        /**
         * Initializes a new DateTime instance.
         * @param {number} ticks The ticks (unix timestamp in milliseconds) that represents the date and time.
         */
        function DateTime(ticks) {
            this.dateTimeValue = moment(ticks);
        }
        Object.defineProperty(DateTime, "now", {
            // #endregion
            // #region Public Static Properties
            /**
             * Gets the current date and time.
             */
            get: function () {
                return new DateTime(moment().valueOf());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "ticks", {
            // #endregion
            // #region Public Properties
            /**
             * Gets the ticks (unix timestamp in milliseconds) that represent the date time.
             */
            get: function () {
                return this.valueOf();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "millisecond", {
            /**
             * Gets the millisecond that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.millisecond();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "second", {
            /**
             * Gets the second that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.second();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "minute", {
            /**
             * Gets the minute that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.minute();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "hour", {
            /**
             * Gets the hour that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.hour();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "day", {
            /**
             * Gets the day that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.day();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "month", {
            /**
             * Gets the month that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.month();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "year", {
            /**
             * Gets the year that the date time represents.
             */
            get: function () {
                return this.dateTimeValue.year();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "isUtc", {
            /**
             * Gets a value that determines whether the date time is in UTC mode.
             */
            get: function () {
                return this.dateTimeValue.utcOffset() == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "utc", {
            /**
             * Gets the UTC representation of the date time.
             */
            get: function () {
                var copy = new DateTime(this.ticks);
                copy.makeUtc();
                return copy;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "isLocal", {
            /**
             * Gets a value that determines whether the date time is in local mode.
             */
            get: function () {
                return this.dateTimeValue.utcOffset() == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "local", {
            /**
             * Gets the local representation of the date time.
             */
            get: function () {
                var copy = new DateTime(this.ticks);
                copy.makeLocal();
                return copy;
            },
            enumerable: true,
            configurable: true
        });
        // #endregion
        // #region Public Static Methods
        /**
         * Initializes a new DateTime instance from ticks (unix timestamp in milliseconds).
         * @param {number} value The ticks that represents the date and time.
         * @return {DateTime} Returns the created DateTime instance.
         */
        DateTime.fromTicks = function (value) {
            return new DateTime(value);
        };
        /**
         * Initializes a new DateTime instance from a string (if no format string are specified, then the method intelligently tries to find out which format the date time has).
         * @param {string} value The string that is to be parsed and converted into a DateTime object.
         * @param {string} format The format string that is used to parse the string.
         * @param {CultureInfo} culture The culture in which the string is to be interpreted (only works in conjuction with a locale format string, e.g. "LLLL").
         * @return {DateTime|null} Returns the parsed DateTime object if the string could be parsed and null otherwise.
         */
        DateTime.fromString = function (value, format, culture, interpretAsUtc) {
            if (interpretAsUtc === void 0) { interpretAsUtc = false; }
            // Parses the string using moment
            var newMoment;
            if (!!format) {
                if (!!culture) {
                    newMoment = interpretAsUtc ? moment.utc(value, format, culture.twoLetterIsoCode, true) : moment(value, format, culture.twoLetterIsoCode, true);
                }
                else {
                    newMoment = interpretAsUtc ? moment.utc(value, format, CultureInfo.currentCulture.twoLetterIsoCode, true) : moment(value, format, CultureInfo.currentCulture.twoLetterIsoCode, true);
                }
            }
            else {
                newMoment = interpretAsUtc ? moment.utc(value, undefined, true) : moment(value, undefined, true);
            }
            // Checks if the date time is valid, if so then the new date time is returned, otherwise null is returned
            if (newMoment.isValid()) {
                return new DateTime(newMoment.valueOf());
            }
            else {
                return null;
            }
        };
        // #endregion
        // #region Public Methods
        /**
         * Gets the value of the date time in case the object should take part in an arithmetic operation.
         * @return {number} Returns the value of the date time as number.
         */
        DateTime.prototype.valueOf = function () {
            return this.dateTimeValue.valueOf();
        };
        /**
         * Adds the provided time span to the date time.
         * @param {TimeSpan} value The time span to be added.
         * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.add = function (value) {
            this.dateTimeValue = moment(this.ticks + value.ticks);
            return this;
        };
        /**
         * Subtracts the provided time span from this date time.
         * @param {TimeSpan} value The time span to be subtracted.
         * @return {TimeSpan} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtract = function (value) {
            this.dateTimeValue = moment(this.ticks - value.ticks);
            return this;
        };
        /**
         * Adds the provided amount of milliseconds to the date time.
         * @param {number} value The amount of milliseconds to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addMilliseconds = function (value) {
            this.dateTimeValue.add(value, "milliseconds");
            return this;
        };
        /**
         * Subtracts the provided amount of milliseconds to the date time.
         * @param {number} value The amount of milliseconds to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractMillisecondss = function (value) {
            this.dateTimeValue.subtract(value, "milliseconds");
            return this;
        };
        /**
         * Adds the provided amount of seconds to the date time.
         * @param {number} value The amount of seconds to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addSeconds = function (value) {
            this.dateTimeValue.add(value, "seconds");
            return this;
        };
        /**
         * Subtracts the provided amount of seconds to the date time.
         * @param {number} value The amount of seconds to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractSeconds = function (value) {
            this.dateTimeValue.subtract(value, "seconds");
            return this;
        };
        /**
         * Adds the provided amount of minutes to the date time.
         * @param {number} value The amount of minutes to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addMinutes = function (value) {
            this.dateTimeValue.add(value, "minutes");
            return this;
        };
        /**
         * Subtracts the provided amount of minutes to the date time.
         * @param {number} value The amount of minutes to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractMinutes = function (value) {
            this.dateTimeValue.subtract(value, "minutes");
            return this;
        };
        /**
         * Adds the provided amount of hours to the date time.
         * @param {number} value The amount of hours to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addHours = function (value) {
            this.dateTimeValue.add(value, "hours");
            return this;
        };
        /**
         * Subtracts the provided amount of hours to the date time.
         * @param {number} value The amount of hours to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractHours = function (value) {
            this.dateTimeValue.subtract(value, "hours");
            return this;
        };
        /**
         * Adds the provided amount of days to the date time.
         * @param {number} value The amount of days to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addDays = function (value) {
            this.dateTimeValue.add(value, "days");
            return this;
        };
        /**
         * Subtracts the provided amount of days to the date time.
         * @param {number} value The amount of days to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractDays = function (value) {
            this.dateTimeValue.subtract(value, "days");
            return this;
        };
        /**
         * Adds the provided amount of months to the date time.
         * @param {number} value The amount of months to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addMonths = function (value) {
            this.dateTimeValue.add(value, "months");
            return this;
        };
        /**
         * Subtracts the provided amount of months to the date time.
         * @param {number} value The amount of months to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractMonths = function (value) {
            this.dateTimeValue.subtract(value, "months");
            return this;
        };
        /**
         * Adds the provided amount of years to the date time.
         * @param {number} value The amount of years to be added.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.addYears = function (value) {
            this.dateTimeValue.add(value, "years");
            return this;
        };
        /**
         * Subtracts the provided amount of years to the date time.
         * @param {number} value The amount of years to be subtracted.
         * @return {DateTime} Returns the current date time in order to easily chain arithmetic operations.
         */
        DateTime.prototype.subtractYears = function (value) {
            this.dateTimeValue.subtract(value, "years");
            return this;
        };
        /**
         * Sets the mode of the date time to UTC.
         */
        DateTime.prototype.makeUtc = function () {
            this.dateTimeValue = this.dateTimeValue.utc();
        };
        /**
         * Sets the mode of the date time to local.
         */
        DateTime.prototype.makeLocal = function () {
            this.dateTimeValue = this.dateTimeValue.local();
        };
        /**
         * Gets a string representation of the date time.
         * @param {string} format The format string.
         * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
         * @return {string} Returns the string representation of the date time.
         */
        DateTime.prototype.toString = function (format, culture) {
            // Sets the locale of the moment object depending on the culture
            this.dateTimeValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);
            // Returns the formatted value
            if (!format)
                return this.dateTimeValue.format();
            return this.dateTimeValue.format(format);
        };
        /**
        * Gets a string representation of the date time.
        * @param {CultureInfo} culture The format provider that is used to format the string. If none is provided, the current culture is used.
        */
        DateTime.prototype.fromNow = function (culture) {
            // Sets the locale of the moment object depending on the culture
            this.dateTimeValue.locale(!!culture ? culture.twoLetterIsoCode : CultureInfo.currentCulture.twoLetterIsoCode);
            // Returns the formatted value
            return this.dateTimeValue.fromNow();
        };
        return DateTime;
    }());
    return DateTime;
});
