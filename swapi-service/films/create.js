'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); 

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
  const timestamp = new Date().getTime();
  const data = JSON.parse(event.body);
  if (typeof data.text !== 'string') {
    callback(null, {
      statusCode: 400,
      headers: { 'Content-Type': 'text/plain' },
      body: 'Couldn\'t create the film item.',
    });
    return;
  }

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      titulo: data.titulo,
      episodio_id : data.episodio_id,
      sinopsis : data.sinopsis,
      director : data.director,
      productor : data.productor,
      fecha_lanzamiento : data.fecha_lanzamiento,
      especies : data.especies,
      naves : data.naves,
      vehiculos : data.vehiculos,
      personajes : data.personajes,
      planetas : data.planetas,
      url : data.url,
      creado: timestamp,
      editado: timestamp,
    },
  };

  // write the film to the database
  dynamoDb.put(params, (error) => {
    if (error) {
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t create the film item.',
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      body: JSON.stringify(params.Item),
    };
    callback(null, response);
  });
};