'use strict';

const getElement = require('./get_element');
const getValue   = require('./get_value');
const setValue   = require('./set_value');

const describeSetValue = function (context, type, name, value) {
    describe('enters "' + name + '" ' + type, function () {
        let input;

        before(async function () {
            input = await getElement(context.container, type + '[name="' + name + '"]');
            if (typeof value === 'function') {
                value = value.call(this, context, name);
            }
        });

        it('enters value', async function () {
            expect(await setValue(input, value)).to.be.true;
        });

        it('contains value', async function () {
            expect(await getValue(input)).to.equal(value);
        });

        after(function () {
            context[name] = value;
        });
    });
};

module.exports = describeSetValue;
