const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://Disha:Disha123@cluster0.hmlogwa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// const mongoURI = "mongodb+srv://rahulgoyal9418:rahulgoel@cluster0.atlnfor.mongodb.net/cloudnote?retryWrites=true&w=majority";
const connectToMongo = () => {
    
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI)
    .then( ()=> {
        console.log("connected");
    })

}

module.exports = connectToMongo;