const mongoose = require("mongoose");

const connectToDB = async () => {

    const url = "mongodb://mongodb:27017";
    console.log(process.env.MONGO_URI)
    console.log(process.env.DB_NAME)

    const connect = await mongoose.connect(url, {
        dbName: process.env.DB_NAME,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
};

module.exports = connectToDB;
