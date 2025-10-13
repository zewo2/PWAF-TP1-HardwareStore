import 'dotenv/config';
import process from 'process';
import express from 'express';
import cors from 'cors';
import contactsroutes from './routes/contactsroutes.js';
import productsroutes from './routes/productsroutes.js';

const app = express();
app.use(cors({origin: 'http://localhost:5173'})); //frontend Vite/React
app.use(express.json());

// Health check route
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// Main routes
app.use('/api/products', productsroutes);
app.use('/api/contacts', contactsroutes);

// Serve local images, if they exist
app.use('/public', express.static('public'));

app.listen(process.env.PORT || 3001, () =>
  console.log(`✅ API ready at http://localhost:${process.env.PORT || 3001}`)
);