const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        await mongoose.connect('mongodb+srv://diego:atlas51@cluster0.5rwej.mongodb.net/cafe', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("BD Online")
    } catch (error) {
        console.log(error);
        throw new Error("la tas cagando pai")
    }
}

module.exports = {
    dbConnection
}