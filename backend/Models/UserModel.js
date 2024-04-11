const {Schema, model} = require("../connection")

const UserSchema = new Schema({
    email : String,
    password : String,
    cpassword : String,
    
});
 module.exports = model("user", UserSchema)