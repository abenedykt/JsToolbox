/**
 * Created with JetBrains WebStorm.
 * User: Arkadiusz Benedykt
 * Date: 09.05.13
 * Time: 20:24
 */

function format(input, format) {

    function addLeadingZeros() {
        while (value.length < format.length) {
            value = '0' + value;
        }
    }

    function formatIsProvided(format) {
        return format != undefined;
    }

    var value = String(input);

    if (formatIsProvided(format)) {
        addLeadingZeros();
    }
    return value;
}
