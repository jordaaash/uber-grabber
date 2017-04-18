'use strict';

const resolveElement = require('./resolve_element');

const setValue = async function (element, value) {
    const ELEMENT  = await resolveElement(element);
    const response = await browser.elementIdClear(ELEMENT).elementIdValue(ELEMENT, value);
    return (response.state === 'success');
};

module.exports = setValue;
