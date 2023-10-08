const User = require('../models/user')
const Organization = require("../models/organization");
const UserProfileModel = require("../models/userProfile");
const OrganizationProfileModel = require("../models/organizationProfile");
const { hashPassword, comparePassword } = require('../helpers/auth')
const jwt = require('jsonwebtoken');

const test = (req, res) => {
    res.json('test is working')
} 

// REGISTER ENDPOINT
const registerUser = async (req, res) => {
    try{
        const {name, email, userType, password} = req.body;
        // check if name was entered
        if(!name) {
            return res.json({
                error: 'Name is Required'
            })
        };
        // check for good password
        if(!password || password.length < 6){
            return res.json({
                error: 'Password is required. Password should be at least 6 characters long.'
            })
        };
        // check email
        const existUser = await User.findOne({email}); //this checks if the email typed is already existing in the database
        const existOrganization = await Organization.findOne({email});
        if(existUser || existOrganization){
            return res.json({
                error: 'User with this Email already exists'
            })
        }

        let responseObj;

        const hashedPassword = await hashPassword(password)
        // creating user in the database
        if (userType === "Contributor") {
            responseObj = await User.create({
                name, email, userType, password: hashedPassword
            });
            if (responseObj && responseObj._id) {
                await UserProfileModel.create({ user: responseObj._id });
            }
        } else {
            responseObj = await Organization.create({
                name, email, userType, password: hashedPassword
            });
            if (responseObj && responseObj._id) {
                await OrganizationProfileModel.create({ organization: responseObj._id });
            }
        }
        
        return res.json(responseObj);
    }catch (error){
        console.log(error)
    }

}

// LOGIN ENDPOINT
const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;

        // check if user exists
        const user = await User.findOne({email});
        const org = await Organization.findOne({email});
        if(!user && !org){
            return res.json({
                error: 'No User Found'
            })
        }

        if(user) {
            const match = await comparePassword(password, user.password);
            if(match){
                // if it is matched we will assign them a web token, basically a cookie to track them
                jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
                    if(err) throw err;
                    res.json({
                        name : user.name,
                        role : user.userType,
                        token
                    })
                    // res.cookie('token', token).json(user)
                })
            }
            if(!match){
                return res.json({
                    error: 'Incorrect Password'
                })
            }
        } else {
            const match = await comparePassword(password, org.password);
            if(match){
                // if it is matched we will assign them a web token, basically a cookie to track them
                jwt.sign({email: org.email, id: org._id, name: org.name, role: 'organization'}, process.env.JWT_SECRET, {}, (err, token) => {
                    if(err) throw err;
                    res.json({
                        name : org.name,
                        role : org.userType,
                        token
                    })
                })
            }
            if(!match){
                return res.json({
                    error: 'Incorrect Password'
                })
            }
        }
    }catch (error) {
 
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
}