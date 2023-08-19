import mongoose from "mongoose";
const schema = new mongoose.Schema({
    category: {
        type: String,
        require: [true, "please enter category"]
    }
})

export const Category = mongoose.model("Category", schema)