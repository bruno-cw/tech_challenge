'use strict';

const app = require('../../app.js');
const chai = require('chai');
const expect = chai.expect;
var event, context;

describe('Tests getSongs', function () {
    it('succesfully returns song data', async () => {
        const result = await app.lambdaHandler(event, context)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);

        expect(result.body).to.be.an('object');
        let songData = result.body.songs;
        expect(songData.length).to.be.above(0);
    });
});
