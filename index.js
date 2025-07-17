require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

// Serve Swagger documentation at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Import and use routes
const contactsRouter = require('./routes/contacts');
app.use('/api/contacts', contactsRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Contacts API is live 🎉');
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
