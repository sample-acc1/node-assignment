require('dotenv').config();
const express = require('express');
const connectDB = require('./config');
const app = express();

connectDB();

app.use(express.json()); // For parsing application/json

app.use('/api', require('./routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
