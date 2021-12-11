const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signupController = async (req,res)=>{
    // console.log(req.body);
    //destruction incomming user data
    const { username, email, password} = req.body;

    //check if email already exists
    try{
        //query up the database if there is maching email
        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({
                errorMessage: 'Email already exisits',
            });
        }

        //create a new user instance
        const newUser = new User();
        newUser.username = username;
        newUser.email = email;

        //generate the salt.
        const salt = await bcrypt.genSalt(10);

        //salt the password with hash
        newUser.password = await bcrypt.hash(password, salt);

        // console.log(newUser.password);
        await newUser.save();

        //send success message
        res.json({
            successMessage:'Registration Success. Please Sign In',
        });

    }
    catch(err){
        console.log('signupController error:', err);
        res.status(500).json({
            errorMessage:'Server error',
        });
    }
};