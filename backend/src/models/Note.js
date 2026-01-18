import mongoose from "mongoose"

const noteScema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        
    }, 
    {timestamps: true}
)

const Note = mongoose.model("Note", noteScema)

export default Note