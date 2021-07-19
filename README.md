 # iHeartMedia - Music Lab - Code Challenge - bruno-cw

 ## Usage Instructions

 ### 1- Install AWS SAM CLI

 ### 2- Configure it with your keys ( add a new `credentials` file in the `~/.aws` directory on Linux, or `%userprofile%\.aws` on Windows ) with the following content:
 ```
[default]
aws_access_key_id={your_access_key}
aws_secret_access_key={your_secret_access_key}

 ```
 ### 3- Start up API locally on port 3000:
```
cd challenge-lambda-app
cd getsongs
npm install
tsc
cd ..
sam local start-api

```
 ### 4- Start up React App on port 3001:
```
cd challenge-react-app
npm install
npm start

# Will prompt the following message:
# ? Something is already running on port 3000.
# Would you like to run the app on another port instead? » YES
```
 ## Testing
 ### API:
```
cd challenge-lambda-app
cd getsongs
npm install
npm test
```

 ### React App:
```
cd challenge-react-app
npm install
npm test
```
## Checklist
### UI Checklist

- [x] Create a React App using functional based components and hooks. No class based components, please.

- [x] Create 2 views ( pages ) using React Router.

- [x] Create a page that renders a table displaying a list songs coming from the API. Each row is a song, each column is a song attribute. 

  - [x] Do not use `table` tags

- [x] Employ **some** styling but it doesn't have to be much. You can use the styled-components library but do not use any other styling help.

- [x] Allow the user to scroll vertically and horizontally through columns and rows that go off screen.

- [x] Allow the user to sort the order of the song rows by the column values.

- [x] It **does not** need to be mobile responsive.

### API Checklist

- [x] Store the included JSON file in an S3 bucket and use the AWS SAM CLI with a **node.js** lambda function to serve the frontend with the data.
