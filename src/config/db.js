const mongoose = require('mongoose');

//Permite hacer una nueva conexión de MongoDb
mongoose.connect(process.env.MONGO_URL);