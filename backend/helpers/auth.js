const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {  //this just increases the security of the password, the higher the value it is the more secure it will be
            if(err){
                reject(err)
            }
            bcrypt.hash(password, salt, (err,hash) => {  // here we are hashing the password
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password, hashed) => {  //this will use for the login api
    return bcrypt.compare(password, hashed)
}

module.exports = {
    hashPassword,
    comparePassword
}