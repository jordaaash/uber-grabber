'use strict';

var resolveElement = require('./resolve_element');

var clickElement = function* (element) {
    var ELEMENT  = yield resolveElement(element);
    var response = yield browser.elementIdClick(ELEMENT);
    return (response.state === 'success');
};

module.exports = clickElement;
