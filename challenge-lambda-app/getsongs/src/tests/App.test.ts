import { lambdaHandler } from '../App';
import { APIGatewayProxyResult } from "aws-lambda";
import { describe, it } from 'mocha'
import chai from 'chai';
import { GraphQLFieldResolver } from 'graphql';

const CreateEvent = require('aws-event-mocks');

const mockResolver: GraphQLFieldResolver<any, any> = () => {
    return [
        { "song": "song 3", "artist": "blur", "songReleaseDate" : "10/10/1900", "playCount" : 32 },
        { "song": "song 2", "artist": "blur", "songReleaseDate" : "10/10/2001", "playCount" : 99 }
    ]
}

const expect = chai.expect;

describe('Tests getSongs', function () {
    this.timeout(15000);
    it('returns song data', async () => {

        const mockEvent = CreateEvent({ template: "aws:apiGateway" })
        const result: APIGatewayProxyResult = await lambdaHandler(mockEvent,undefined, undefined, mockResolver);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);

        expect(result.body).to.be.a('string');
        let songData = JSON.parse(result.body);
        expect(songData.songs.data.songs).to.be.an('array');
    });

    it('executes GraphQL queries', async () => {

        const queryEvent = CreateEvent({
            template: "aws:apiGateway", merge: {
                queryStringParameters: { q: `{ songs(sort : "song" direction: "desc" ) {song artist songReleaseDate playCount} }` }
            }
        })
        const result: APIGatewayProxyResult = await lambdaHandler(queryEvent,undefined, undefined, mockResolver);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(200);
        let songData = JSON.parse(result.body);
        expect(songData.songs.data.songs.length).to.be.above(1);
        let song1 = songData.songs.data.songs[0];
        let song2 = songData.songs.data.songs[1];
        expect(song1.song.localeCompare(song2.song)).to.equals(1);
    });

    it('rejects malformed GraphQL queries', async () => {

        const queryEvent = CreateEvent({
            template: "aws:apiGateway", merge: {
                queryStringParameters: { q: `{ songs(sort : "song" direction: "desc" ) {song artist ---- ` }
            }
        })
        const result: APIGatewayProxyResult = await lambdaHandler(queryEvent,undefined, undefined, mockResolver);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(400);
    });
});
