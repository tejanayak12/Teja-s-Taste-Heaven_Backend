import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://TasteHeaven:Teja5566@cluster0.iwtai4d.mongodb.net/food-delivery").then(() => console.log("Db Connected"));
}