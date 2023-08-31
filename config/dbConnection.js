const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION);
        console.log("Connection success",connect.connection.host);
        console.log("Connection Name",connect.connection.name);
    } catch (err) {
        console.log(err);
    }
}

module.exports=connectDb;