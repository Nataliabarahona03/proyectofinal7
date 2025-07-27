// swagger.js
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Archivos que contienen las anotaciones de la API
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;