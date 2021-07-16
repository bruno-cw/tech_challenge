import {lambdaHandler} from '../../App';
import { APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import {describe, it} from 'mocha'
import chai from 'chai';

const expect = chai.expect;
let event : APIGatewayProxyEvent;

describe('Tests getSongs', function () {
    this.timeout(15000);
    it('succesfully returns song data', async () => {
        const result : APIGatewayProxyResult = await lambdaHandler(event)

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);

        expect(result.body).to.be.a('string');
        let songData = JSON.parse(result.body);
        expect(songData.songs.length).to.be.above(0);
    });
});
