'use strict';

const resolveElement = require('./resolve_element');

const getAttribute = async function (element, attribute) {
    const ELEMENT = await resolveElement(element);

    attribute = await browser.elementIdAttribute(ELEMENT, attribute);

    return attribute.value;
};

module.exports = getAttribute;
