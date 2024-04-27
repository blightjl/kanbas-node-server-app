import mongoose from "mongoose";
const { Schema } = mongoose;

const lessonSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    module: { type: String, required: true }
});

const moduleSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    course: { type: String, required: true },
    lessons: [lessonSchema] 
}, { collection: "modules" });

export default moduleSchema;
