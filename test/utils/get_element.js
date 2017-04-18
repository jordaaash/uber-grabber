'use strict';

const resolveElement = require('./resolve_element');

const getElement = async function (element, selector) {
    const ELEMENT    = await resolveElement(element);
    const descendant = await browser.elementIdElement(ELEMENT, selector);
    return descendant.value;
};

module.exports = getElement;
