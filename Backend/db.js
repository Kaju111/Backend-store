const mongoose = require('mongoose');

const mongoURL = "mongodb://localhost:27019/inotebook"

const connectToMongo = () =>{
    mongoose.connect(mongoURL).then(async () => {
       console.log("connect to Mongo")

   }).catch((err) => console.log(err))
}

module.exports = connectToMongo;

