const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user');

dotenv.config();
const app = express();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection is successful'))
  .catch((err) => {
    console.log(err);
  });
app.use(express.json());

app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});
