require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB!'))
  .catch(err => console.error('❌ Error connecting to MongoDB:', err));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const contactsRouter = require('./routes/contacts');
app.use('/api/contacts', contactsRouter);

app.get('/', (req, res) => {
  res.send('Contacts API is live 🎉');
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
