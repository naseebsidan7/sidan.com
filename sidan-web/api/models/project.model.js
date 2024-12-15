import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
      
     title: {
        type: String,
        required: true
      },
      description: {
        type: Array,
        required: true
      },
      imageUrls: {
        type: Array,
        required: true
      },
      skills: {
        type: Array,
        required: true
      },
      liveLink: {
        type: String,
        required: true
      },
      githubLink: {
        type: String,
        required: true
      },
      category: {
        type: String,
        required: true
      },
      index: {
        type: Number,
        required: true,
        unique: true
      },

}, { timestamps: true })


const Project = mongoose.model('Project', projectSchema)
export default Project;