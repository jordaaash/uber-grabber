'use strict';

const resolveElement = async function (element) {
    if (typeof element === 'string') {
        element = await browser.element(element);
    }
    return element.ELEMENT || element.value.ELEMENT;
};

module.exports = resolveElement;
