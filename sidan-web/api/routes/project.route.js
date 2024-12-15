import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createProject, deleteProject, getProjectById, getProjects, updateProject } from '../controllers/project.controller.js';
 
const router = express.Router();
 
 

router.post('/create', verifyToken, createProject)
router.get('/getProjects', getProjects)
router.get('/getProject/:index', getProjectById)
router.put('/updateProject/:id', updateProject);
router.delete('/deleteProject/:id', deleteProject);

export default router;