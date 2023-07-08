const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

mongoose.connect('mongodb+srv://Admin:mdbpass1@sandbox.itqbhwo.mongodb.net/an22_sample_database?retryWrites=true&w=mahority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', () => console.log('Now connected to MongoDB Atlas.'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/courses', courseRoutes);

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server Running on Localhost:${process.env.PORT || 4000}`);
});


