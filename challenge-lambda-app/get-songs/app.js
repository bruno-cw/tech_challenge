const axios = require('axios')
const url = "https://challenge-bucket-bruno-cw.s3.us-east-2.amazonaws.com/songData.json";

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
        let response = await axios(url);
        return response.data;
    } catch (err) {
        console.log(err);
        return err
    }
}
