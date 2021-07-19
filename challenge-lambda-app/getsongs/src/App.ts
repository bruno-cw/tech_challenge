import { APIGatewayEventRequestContext, APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
import { graphql, GraphQLFieldResolver } from "graphql";
import { DefaultSongSource, GetSongs } from "./service/SongQL";

const response = (statusCode : number , body : object) : APIGatewayProxyResult => {
    return {
        "statusCode" : statusCode,
        "headers" : {
            "content-type": "application/json",
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "http://localhost:3001",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"     
        },
        "body": JSON.stringify(body)
    };
};

export const lambdaHandler = async (event : APIGatewayProxyEvent, 
    context? : APIGatewayEventRequestContext, 
    callback? :Function, 
    customResolver? : GraphQLFieldResolver<any, any> 
    ) : Promise<APIGatewayProxyResult> => {
    try {
        let queryString = event.queryStringParameters?.q;
        let result = await graphql(customResolver ? GetSongs(customResolver) :GetSongs(), queryString || DefaultSongSource);

        if (result.errors){
            return response(400, result)
        }
        return response(200, {songs: result})
    } catch (err) {
        console.log(err);
        return err;
    }
};