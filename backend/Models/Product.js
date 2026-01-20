import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
    name: { type: String, required: true, maxlength: [150, "max length allowed 150 character"], trim: true },
    description: { type: String, trim: true, maxlength: [2000, "max lenth 2000"] },
    price: { type: Number, required: true },
    rating: { type: Number, min: 0, max: 5 },
    image: [{ type: String }],
    discount: { type: Number },
    category: { type: String, required: true },
    subCategory: { type: String },
    isAvailable: { type: Boolean, default: true },
    MFG: { type: Date },
    EXP: { type: Date },
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, {
    timestamps: true
});

export const Product = mongoose.model("Product", ProductSchema)