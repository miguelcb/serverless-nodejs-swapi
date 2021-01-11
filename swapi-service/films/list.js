const axios = require('axios');
'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const params = {
  TableName: process.env.DYNAMODB_TABLE,
};

module.exports.list = async (event, context, callback) => {
  // fetch all films from the database and swapi
  const response = await axios.get('https://swapi.py4e.com/api/films/')
  
  dynamoDb.scan(params, (error, result) => {
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the films.',
      });
      return;
    }

    // create a response
    const allItems = [...response.data, ...result.Items]
    const response = {
      statusCode: 200,
      body: JSON.stringify(allItems),
    };
    callback(null, response);
  });
};