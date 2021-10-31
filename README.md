# Aloompa Coding Challenge

API Graphql implemented with Node JS

## Getting Started

Set up a MongoDB account and create a connection string by going to: https://www.mongodb.com/
Go to the nodemon.json file in the root folder and input the necessary values for the connection string.
Install dependencies and start local dev server: runs on port 8080

```sh
npm install
npm start
```

## Testing GraphQL

After running npm start, open browser and navigate to: http://localhost:8080/graphql.  This will open the GraphiQL integrated development environment.

## GraphQL Examples

To add an app:
    
    mutation {
        createApp(appInput: {name: "Name of App"}) {
            _id
            name
        }
    }

To query all apps:

    query {
        apps {
            apps {
                _id
                name
            }
        }
    }

For more information on using GraphiQL visit: https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/

## API Built With:

- Express JS: Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.  Learn more at: https://expressjs.com/

- GraphQL - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API.  Learn more at: https://graphql.org/

- Mongoose: Mongoose is a Node.js based Object Data Modeling (ODM) library for MongoDB.  Learn more at https://mongoosejs.com/

- MongoDB - MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. Learn more at: https://www.mongodb.com/

* * *
author: Chad Martinez (https://github.com/Chad-Martinez)   
licence: NONE
