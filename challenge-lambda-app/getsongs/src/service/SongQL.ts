
import aws from "aws-sdk";
import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
} from 'graphql';

const s3 = new aws.S3();
const params : aws.S3.GetObjectRequest = {
    Bucket: "challenge-bucket-bruno-cw",
    Key: "songData.json"
}


const getSongData = async (sort: string, direction : string) : Promise<object> => {
    try {
        let response = await s3.getObject(params).promise();
        if (!response.Body) {
            throw "Failed to get song data!"
        }
        let songData : object[] = JSON.parse(response.Body.toString("utf-8"));

        if (sort === null){
            return songData;
        }

        if (direction !== "asc" && direction !== "desc"){
            throw "Invalid Direction"
        }

        if (sort === "songReleaseDate"){
            return songData.sort((a: any, b: any) =>  (Date.parse(a[sort]) > Date.parse(b[sort])) ? (direction == "asc"? 1 : -1) : (direction == "asc"? -1 : 1));
        }
        return songData.sort((a: any, b: any) => (a[sort] > b[sort]) ? (direction == "asc"? 1 : -1) : (direction == "asc"? -1 : 1));
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const Song = new GraphQLObjectType({
    name: "song",
    fields: {
        song: { type: GraphQLString },
        artist: { type: GraphQLString },
        songReleaseDate: { type: GraphQLString },
        playCount: { type: GraphQLInt },
        metricA: { type: GraphQLInt },
        metricB: { type: GraphQLInt },
        metricC: { type: GraphQLInt },
        metricD: { type: GraphQLInt },
        metricE: { type: GraphQLInt },
        metricF: { type: GraphQLInt },
        metricG: { type: GraphQLInt },
        metricH: { type: GraphQLInt },
        metricI: { type: GraphQLInt },
        metricJ: { type: GraphQLInt },
        metricK: { type: GraphQLInt },
        metricL: { type: GraphQLInt },
        metricM: { type: GraphQLInt },
        metricN: { type: GraphQLInt },
        metricO: { type: GraphQLInt },
        metricP: { type: GraphQLInt },
    }
})

export const GetSongs = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            songs: {
                type: new GraphQLList(Song),
                args: {
                    sort: { type: GraphQLString },
                    direction: { type: GraphQLString }
                },
                resolve : (obj, args, context, info) => {
                    let sort : string = args.sort;
                    let direction : string = args.direction;
                    return getSongData(sort,direction);
                },
            },
        },
    }),
});

export const DefaultSongSource : string = `
{
    songs(sort : "song" direction: "asc" ) {
        song
        artist
        songReleaseDate
        playCount
        metricA
        metricB
        metricC
        metricD
        metricE
        metricF
        metricG
        metricH
        metricI
        metricJ
        metricK
        metricL
        metricM
        metricN
        metricO
        metricP
    }
}
`



