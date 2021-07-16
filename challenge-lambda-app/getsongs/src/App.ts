import { APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import { graphql } from "graphql";
import { DefaultSongSource, GetSongs } from "./service/SongQL";

const response = (statusCode : number , body : object) : APIGatewayProxyResult => {
    return {
        "statusCode" : statusCode,
        "headers" : {
            "content-type": "application/json"
        },
        "body": JSON.stringify(body)
    };
};

export const lambdaHandler = async (event : APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    try {
        let queryString = event.queryStringParameters?.q;
        let result = await graphql(GetSongs, queryString || DefaultSongSource);

        if (result.errors){
            return response(400, result)
        }
        return response(200, {songs: result})
    } catch (err) {
        console.log(err);
        return err;
    }
};