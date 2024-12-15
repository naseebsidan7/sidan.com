import Project from "../models/project.model.js"
import { errorHandler } from "../utils/error.js"

export const createProject = async (req, res, next) => {
    try {
        const { title, description, skills, imageUrls, liveLink, githubLink, category } = req.body;
         
        console.log(title, description, skills, imageUrls, liveLink, githubLink , category)
        
        if (!title || !description || !imageUrls  || !skills || !liveLink || !githubLink || !category) {
          return res.status(400).json({ message: "All fields are required" });
        }
 
 
        const projectCount = await Project.countDocuments();
       
        const newProjectData = {
            title,
            description,
            skills,
            imageUrls,
            liveLink,
            githubLink,
            category,
            index: projectCount + 1, // The next available index
        };

        const project = await Project.create(newProjectData)
        return res.status(201).json({
            message: "Project created successfully",
            project,
        });

    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

export const updateProject = async (req, res, next) => {
    try {

        const { id } = req.params;
        const { title, description, imageUrls, skills, liveLink, githubLink } = req.body;
        if (!title || !description || !imageUrls || !skills || !liveLink || !githubLink) {
          return res.status(400).json({ message: "All fields are required" });
        }

    

        const project = await Project.findByIdAndUpdate(
            id,
            { title, description, imageUrls, skills, liveLink, githubLink }, // Fields to update
            { new: true, runValidators: true } 
        )

        if (!project) {
            return next(errorHandler(404, "Project not found"));
        }

        return res.status(200).json({
            message: "Project updated successfully",
            project,
        });

    } catch (err) {
        console.log(err.message)
        next(err)
    }
}

export const deleteProject = async (req, res, next) => {
    try {
        const project = await Project.findById(req.params.id);
        if(!project) return next(errorHandler(404,'Project not found!'))

        await Project.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'Project deleted successfully',
        });
        
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}


export const getProjects = async (req, res, next) => {
    try {
        const limit = parseInt(req.query.limit) || 10;
        const projects = await Project.find()
                         .limit(limit)

         return res.status(200).json(projects)
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}


export const getProjectById = async (req, res, next) => {
    try {
        const project = await Project.findOne({ index: req.params.index });
        if(!project) return next(errorHandler(404, "Project is not found!"));

        return res.status(201).json(project);
    } catch (err) {
        console.log(err.message)
        next(err)
    }
}