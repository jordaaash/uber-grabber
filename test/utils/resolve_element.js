'use strict';

var resolveElement = function* (element) {
    if (typeof element === 'string') {
        element = yield browser.element(element);
    }
    return element.ELEMENT || element.value.ELEMENT;
};

module.exports = resolveElement;
