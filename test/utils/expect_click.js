'use strict';

var clickElement = require('./click_element');

var expectClick = function* (element) {
    expect(yield clickElement(element)).to.be.true;
};

module.exports = expectClick;
