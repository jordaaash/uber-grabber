'use strict';

const resolveElement = require('./resolve_element');

const clickElement = async function (element) {
    const ELEMENT  = await resolveElement(element);
    const response = await browser.elementIdClick(ELEMENT);
    return (response.state === 'success');
};

module.exports = clickElement;
