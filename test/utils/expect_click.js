'use strict';

const clickElement = require('./click_element');

const expectClick = async function (element) {
    expect(await clickElement(element)).to.be.true;
};

module.exports = expectClick;
