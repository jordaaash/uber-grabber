'use strict';

var getElement = require('./get_element');
var getValue   = require('./get_value');
var setValue   = require('./set_value');

var describeSetValue = function (context, type, name, value) {
    describe('enters "' + name + '" ' + type, function () {
        var input;

        before(function* () {
            input = yield getElement(context.container, type + '[name="' + name + '"]');
            if (typeof value === 'function') {
                value = value.call(this, context, name);
            }
        });

        it('enters value', function* () {
            expect(yield setValue(input, value)).to.be.true;
        });

        it('contains value', function* () {
            expect(yield getValue(input)).to.equal(value);
        });

        after(function () {
            context[name] = value;
        });
    });
};

module.exports = describeSetValue;
