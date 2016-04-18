'use strict';

var getElement = require('./get_element');

var describeSubmit = function (context, next) {
    describe('submits form', function () {
        var button;

        before(function* () {
            var container = context.container;

            button = yield getElement(container, 'button[type="submit"]:enabled');
        });

        it('clicks button', function* () {
            yield expectClick(button);
        });

        if (next != null) {
            next.call(this);
        }
    });
};

module.exports = describeSubmit;
