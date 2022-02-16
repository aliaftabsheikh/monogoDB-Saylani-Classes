const bcrypt = require('bcrypt')
const userModel = require('../models/user')

exports.getSignIn = (req, res) => {
    res.render("auth/signIn")
}

exports.getSignUp = (req, res) => {
    res.render("auth/signUp")
}


exports.postSignIn = async (req, res) => {
    try {
        const userCred = req.body;
        const user = await userModel.getAUser(userCred.email)
        const result = await bcrypt.compare(userCred.password, user.password);
       if(result){
        //    res.setHeader("Set-Cookie", "isAuthenticated=true; HttpOnly")
        req.session.user = userCred.email; 
           res.send('LOGIN SUCCESSFUL')
       }else{
           res.send('Invalid Email or Password')
       }
    } catch (e) {
        res.send(e)
    }
}

exports.postSignUp = async (req, res) => {
    const user = req.body;
    // const users = await userModel.fetchAll()
    userModel.getAUser(user.email)
        .then((matched) => {
            return res.send('Email Already Exists')
        })
        .catch(async(err) => {
            try {
                await userModel.storeAUser(user)
                res.redirect("SignIn")
            } catch (e) {
                console.log(e);
            }
        });
}