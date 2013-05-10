/**
 * Created with JetBrains WebStorm.
 * User: Arkadiusz Benedykt
 * Date: 09.05.13
 * Time: 20:16
 */

TestCase("Leading Zeros Formatter", {
    "test when no format is passed it returns the same value": function () {
        var input = 10;
        var result = jsToolbox.format(input);
        assertEquals('10', result);
    },
    "test when format is passed it returns the propper ammount of leading zeros": function () {
        var input = 12;
        var result = jsToolbox.format(input, '0000');
        assertEquals('0012', result);
    },
    "test when format is NaN it returns the same value": function () {
        var input = 10;
        var result = jsToolbox.format(input, NaN);
        assertEquals('10', result);
    }
});