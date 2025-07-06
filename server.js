require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

const contactsRouter = require('./routes/contacts');

app.use('/api/contacts', contactsRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
