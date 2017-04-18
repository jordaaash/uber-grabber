'use strict';

const getElement = require('./get_element');

const describeSubmit = function (context, next) {
    describe('submits form', function () {
        let button;

        before(async function () {
            const container = context.container;

            button = await getElement(container, 'button[type="submit"]:enabled');
        });

        it('clicks button', async function () {
            await expectClick(button);
        });

        if (next != null) {
            next.call(this);
        }
    });
};

module.exports = describeSubmit;
