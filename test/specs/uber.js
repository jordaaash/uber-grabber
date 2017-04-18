'use strict';

const moment    = require('moment');
const Promise   = require('bluebird');
const fs        = require('fs');
const writeFile = Promise.promisify(fs.writeFile);

describe('uber', function () {
    const data = {};

    before(start('https://login.uber.com/login'));

    describe('login', function () {
        const context = {};

        before(async function () {
            context.container = await browser.element('#login-form');
        });

        describeInput(context, 'email', global.email);

        describeInput(context, 'password', global.password);

        describeSubmit(context, function () {
            it('obtains login cookie', async function () {
                await browser.pause(3000);
                await expectCookie('currentLoginSession');
            });
        });
    });

    describe('trips', function () {
        global.trips.forEach(function (trip) {
            describe('trip: ' + trip, function () {
                let dateTime, startTime, startAddress, endTime, endAddress, car, miles, time, fare;
                before(async function () {
                    await browser.url(trip);
                });

                it('gets data', async function () {
                    dateTime     = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.page-lead > div');
                    startTime    = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div.trip-address.grid.grid--full.soft-double--bottom > div.grid__item.nine-tenths > p');
                    startAddress = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div.trip-address.grid.grid--full.soft-double--bottom > div.grid__item.nine-tenths > h6');
                    endTime      = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div:nth-child(2) > div.grid__item.nine-tenths > p');
                    endAddress   = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft.separated--bottom > div:nth-child(2) > div.grid__item.nine-tenths > h6');
                    car          = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(1) > h5');
                    miles        = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(2) > h5');
                    time         = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(1) > div.separated.section--light > div.soft--top > div > div:nth-child(3) > h5');
                    fare         = await getText('#slide-menu-content > div > div.flexbox__item.flexbox__item--expand > div > div > div.flexbox__item.four-fifths.page-content > div.trip-details__breakdown.container > div > div:nth-child(2) > table > tbody > tr:last-child > td.text--right.alpha.weight--semibold');

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

    after(async function () {
        const rows = [['date', 'fare', 'miles', 'time', 'startAddress', 'startTime', 'endAddress', 'endTime', 'car', 'trip']];
        Object.keys(data).map(function (trip) {
            const row = data[trip];
            rows.push([row.date, row.fare, row.miles, row.time, row.startAddress, row.startTime, row.endAddress, row.endTime, row.car, trip]);
        });
        const tsv = rows.map(function (row) {
            return row.join('\t');
        }).join('\n');
        await browser.end();
        await writeFile(global.file, tsv);
    });
});
