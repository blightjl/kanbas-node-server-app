import mongoose from "mongoose";

// Assuming `lessons` is an array of strings
const courseSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, default: "" }, 
    startDate: { type: String, default: "" }, 
    endDate: { type: String, default: "" }, 
    image: String,
}, { collection: "courses" });

export default courseSchema;
