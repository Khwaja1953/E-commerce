import mongoose from "mongoose";
const UserModel = mongoose.Schema({
name: {type:String, required: true},
email: {type:String,required: true,unique: true},
password: {type: String, required: true},
phone: {type: String, required: true, unique: true, max:10},
role: {type: String, enum: ["ADMIN","USER"], default: "USER"},
address: [
    {
        building: {type: String},
            area: { type: String, required: true },
            landmark: String,
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true },
            country: { type: String, required: true },
            phone: { type: String,required:true,max:10},
            alternatephone: { type: String,max:10},
    }
],
cartitems:[
        {
            productdetails:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'Product'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ],

},
{timeStamps: true}
);

const User = mongoose.model('User',UserModel);
export default User;