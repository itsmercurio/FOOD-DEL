import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://itsmercurio:33858627@cluster0.emikm.mongodb.net/food-del')).isObjectIdOrHexString(()=>console.log("DB Connected"));

    console.log('DB Connected');
}