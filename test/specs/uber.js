'use strict';

var moment    = require('moment');
var Promise   = require('bluebird');
var fs        = require('fs');
var writeFile = Promise.promisify(fs.writeFile);

describe('uber', function () {
    var data = {};

    before(start('https://login.uber.com/login'));

    describe('login', function () {
        var context = {};

        before(function* () {
            context.container = yield browser.element('#login-form');
        });

        describeInput(context, 'email', email);

        describeInput(context, 'password', password);

        describeSubmit(context, function () {
            it('obtains login cookie', function* () {
                yield browser.pause(3000);
                yield expectCookie('currentLoginSession');
            });
        });
    });

    describe('trips', function () {
        trips.forEach(function (trip) {
            describe('trip: ' + trip, function () {
                var dateTime, startTime, startAddress, endTime, endAddress, car, miles, time, fare;
                before(function* () {
                    yield browser.url(trip);
                });

                it('gets data', function* () {
                    dateTime     = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.page-lead > div');
                    startTime    = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div.trip-address.grid.grid--full.soft-double--bottom > div.grid__item.nine-tenths > p');
                    startAddress = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div.trip-address.grid.grid--full.soft-double--bottom > div.grid__item.nine-tenths > h6');
                    endTime      = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div:nth-child(2) > div.grid__item.nine-tenths > p');
                    endAddress   = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div:nth-child(2) > div.grid__item.nine-tenths > h6');
                    car          = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(1) > h5');
                    miles        = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(2) > h5');
                    time         = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(3) > h5');
                    fare         = yield getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(2) > table > tbody > tr:last-child > td.text--right.alpha.weight--semibold');

                    dateTime = moment(dateTime, 'h:mm A on MMMM D YYYY');

                    data[trip] = {
                        date:         dateTime.format('YYYY-MM-DD'),
                        fare:         fare,
                        miles:        miles,
                        time:         time,
                        startAddress: startAddress,
                        startTime:    startTime,
                        endAddress:   endAddress,
                        endTime:      endTime,
                        car:          car
                    };
                });
            });
        });
    });

    after(function* () {
        var rows = [['date', 'fare', 'miles', 'time', 'startAddress', 'startTime', 'endAddress', 'endTime', 'car', 'trip']];
        Object.keys(data).map(function (trip) {
            var row = data[trip];
            rows.push([row.date, row.fare, row.miles, row.time, row.startAddress, row.startTime, row.endAddress, row.endTime, row.car, trip]);
        });
        var tsv = rows.map(function (row) {
            return row.join('\t');
        }).join('\n');
        yield browser.end();
        yield writeFile(file, tsv);
    });
});
