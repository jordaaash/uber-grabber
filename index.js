'use strict';

var path = require('path');

global.file     = path.resolve(__dirname, 'uber.tsv');
global.email    = '<email>';
global.password = '<password>';
global.trips    = [
    'https://riders.uber.com/trips/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    'https://riders.uber.com/trips/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    'https://riders.uber.com/trips/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    'https://riders.uber.com/trips/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX',
    'https://riders.uber.com/trips/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX'
];