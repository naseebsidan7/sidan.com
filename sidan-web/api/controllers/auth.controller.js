import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
     
       const { email, password } = req.body;
       if(!email || !password){
        return res.status(400).json({ message: 'Email and password are required.'})
       }

       try {
          const salt = bcrypt.genSaltSync(10)
          const hashedPassword = bcrypt.hashSync(password, salt);
          const newUser = new User({ email, password: hashedPassword });
 
          await newUser.save()
          console.log(newUser)
          res.status(201).json({message: "User registered successfully!" });

       } catch (err) {
           console.log(err)
           next(err)
     }
}

export const signin = async (req, res, next) => {
     try {
        const { email, password } = req.body;
   
        if (!email || !password) {
            return next(errorHandler(400, "Email and password are required." )) 
        }

        const validUser = await User.findOne({ email })
        if(!validUser) return next(errorHandler(404, 'Invalid email or password.'))

        const validPassword = bcrypt.compareSync(password, validUser.password)
        if(!validPassword) return next(errorHandler(401, 'Invalid email or password.'))

        // Generate a JWT token
         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET )
         

        const { password: pass, ...rest } = validUser._doc;
    
        res.cookie('access_token', token, {httpOnly: true, expires: new Date(Date.now() + 30 *  24 * 60 * 60 * 100 )})
        .status(200).json(rest)

     } catch (err) {
        console.log(err)
        next(err)
     }
}

export const signout = async (req, res, next) => {
    try {
        res.clearCookie('access_token')
        res.status(200).json('User has been logged out!')
    } catch (err) {
        console.log(err)
    }
}