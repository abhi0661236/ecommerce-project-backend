import mongoose from "mongoose";
import {isEmail} from 'validator';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: [true, "Please enter an email."],
        unique: true,
        lowercase: true,
        validate:[isEmail, 'Please enter a valid email.'],
    },
    password:{
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters.'],
    },
    register_date: {
        type: Date,
        default: Date.now()
    }
});


const User = mongoose.model('user', UserSchema);
export default User;