import mongoose from "mongoose";
export const UserModel = mongoose.Schema({
name: {type:String},
email: {type:String,unique}
})