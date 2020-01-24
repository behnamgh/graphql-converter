This is a package to help you in creating your graphql query out of array of string
# Instruction

## Installation
```
npm i graphql-converter
```
## Simple use
```javascript
import { gqlBuilder } from "graphql-converter";
// or
const gqlBuilder = require("graphql-converter").gqlBuilder;

// then you can convert your query
gqlBuilder(["test"]) // output is: { test }


gqlBuilder(["user.firstname","user.family","user.role", "user.email","user.address.street","user.address.postalCode"]) 
/* output is:
{
    user{
        firstname
        family
        role
        email
        address {
            street
            postalCode
        }
    }
}
/*
```
## Use with qgl with variable
```javascript
import gql from 'graphql-tag';
import { gqlBuilder } from "graphql-converter";


export const LOAD_LANG = gql`
query languages($token: String!){
languages(input:{perPage:100,page:1,q:"*",token:$token})
${gqlBuilder([
  "count",
  "result.key",
  "result.title",
  "result.id"
])}
}`
/* 
equal with:
export const LOAD_LANG = gql`
query languages($token: String!){
languages(input:{perPage:100,page:1,q:"*",token:$token}){
    count
    result{
        key
        title
        id
        }
    }
}`
*/
```