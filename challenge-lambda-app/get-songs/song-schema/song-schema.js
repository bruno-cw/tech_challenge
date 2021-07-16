var { buildSchema } = require('graphql');
 
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);