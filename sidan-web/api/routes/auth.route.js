import express from 'express';
import { signin, signout, signup } from '../controllers/auth.controller.js';

const router = express.Router();
 
router.get('/', (req,res)=> res.send('auth'))
router.post('/signin', signin)
router.post('/signup', signup)
router.post('/signout', signout)

export default router;