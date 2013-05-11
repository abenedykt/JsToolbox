/**
 * Created with JetBrains WebStorm.
 * User: Arkadiusz Benedykt
 * Date: 09.05.13
 * Time: 20:24
 */


var jsToolbox = (function () {

    var addLeadingZeros = function (value, format) {
            while (value.length < format.length) {
                value = '0' + value;
            }
            return value;
        },
        formatIsProvided = function (format) {
            return format != undefined;
        },
        format = function (input, format) {

            var value = String(input);

            if (formatIsProvided(format)) {
                value = addLeadingZeros(value, format);
            }
            return value;
        };
    return {format: format};
}());