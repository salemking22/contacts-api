const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contacts API',
      version: '1.0.0',
      description: 'API for managing contacts',
    },
    servers: [
      {
        url: 'https://contacts-api-d727.onrender.com/api',
      },
    ],
    components: {
      schemas: {
        Contact: {
          type: 'object',
          required: ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'],
          properties: {
            firstName: {
              type: 'string',
              description: 'First name of the contact',
              example: 'Jane',
            },
            lastName: {
              type: 'string',
              description: 'Last name of the contact',
              example: 'Doe',
            },
            email: {
              type: 'string',
              description: 'Email address of the contact',
              example: 'jane@example.com',
            },
            favoriteColor: {
              type: 'string',
              description: 'Favorite color of the contact',
              example: 'blue',
            },
            birthday: {
              type: 'string',
              format: 'date',
              description: 'Birthday of the contact',
              example: '1992-05-15',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
