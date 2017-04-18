'use strict';

const resolveElement = require('./resolve_element');

const getElements = async function (element, selector) {
    const ELEMENT     = await resolveElement(element);
    const descendants = await browser.elementIdElements(ELEMENT, selector);
    return descendants.value;
};

module.exports = getElements;
