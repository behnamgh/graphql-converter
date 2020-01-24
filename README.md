This is a package to help you in creating your graphql query out of array of string
# Instruction
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

