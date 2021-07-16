import aws from "aws-sdk";
import { APIGatewayProxyEvent, APIGatewayProxyResult} from "aws-lambda";
const s3 = new aws.S3();

const params : aws.S3.GetObjectRequest = {
    Bucket: "challenge-bucket-bruno-cw",
    Key: "songData.json"
}

let response : APIGatewayProxyResult;
export const lambdaHandler = async (event : APIGatewayProxyEvent ) : Promise<APIGatewayProxyResult> => {
    try {
        let songData = await getSongData();
        response = {
            "statusCode": 200,
            "headers" : {
                "contentType": "application/json"
            },
            "body": JSON.stringify({
                "songs" : songData
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response;
};

const getSongData = async () : Promise<object> => {
    try {
        let response = await s3.getObject(params).promise();
        if (!response.Body) {
            throw "Failed to get song data!"
        }
        return JSON.parse(response.Body.toString('utf-8'));
    } catch (err) {
        console.log(err);
        throw err;
    }
}
