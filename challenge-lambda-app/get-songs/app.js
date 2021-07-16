const aws = require("aws-sdk");
const s3 = new aws.S3();

const params = {
    Bucket: "challenge-bucket-bruno-cw",
    Key: "songData.json"
}

let response;
exports.lambdaHandler = async (event, context) => {
    try {
        let songData = await getSongData();
        response = {
            "statusCode": 200,
            "body": {
                "songs" : songData
            }
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

const getSongData = async () => {
    try {
        let response = await s3.getObject(params).promise();
        return response.Body.toString('utf-8');
    } catch (err) {
        console.log(err);
        return err
    }
}
