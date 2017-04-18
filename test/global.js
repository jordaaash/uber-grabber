'use strict';

require('mocha');

const chai        = require('chai');
const WebdriverIO = require('webdriverio');

chai.config.includeStack = true;

global.chai   = chai;
global.expect = chai.expect;

global.browser = WebdriverIO.remote({
    baseUrl:             'https://riders.uber.com/trips',
    desiredCapabilities: { browserName: 'chrome' },
    screenshotPath:      './test/screenshots/errors/',
    waitforTimeout:      1000
});

global.start = require('./utils/start');
global.stop  = require('./utils/stop');

global.getAttribute = require('./utils/get_attribute');
global.getElement   = require('./utils/get_element');
global.getElements  = require('./utils/get_elements');
global.getText      = require('./utils/get_text');
global.getURL       = require('./utils/get_url');
global.getValue     = require('./utils/get_value');

global.clickElement = require('./utils/click_element');
global.setValue     = require('./utils/set_value');

global.describeInput  = require('./utils/describe_input');
global.describeSubmit = require('./utils/describe_submit');

global.expectClick  = require('./utils/expect_click');
global.expectCookie = require('./utils/expect_cookie');
