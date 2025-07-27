
import 'dotenv/config';
import express, { json } from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import { serve, setup } from 'swagger-ui-express';
import swaggerSpec from './swagger'; // Lo crearemos más adelante

config();

const app = express();
app.use(cors());
app.use(json());

// Conexión a MongoDB
connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Rutas
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import orderRoutes from './routes/orderRoutes';
app.use('/api/orders', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', productRoutes);

// Documentación con Swagger
app.use('/api-docs', serve, setup(swaggerSpec));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));