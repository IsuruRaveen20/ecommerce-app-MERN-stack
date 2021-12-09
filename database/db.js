const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://ecom-user:testing123@mern-ecom.m9re4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
        {
           useNewUrlParser: true,
           useUnifiedtopology: true
        }); 

        console.log('Database Connection Success');
    }catch(err){
        console.log(err);
    }
}

module.exports = connectDB;