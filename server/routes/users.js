import express from "express"
import {signUp,logIn} from "../controllers/Auth.js"
import {getAllUsers,updateProfile} from '../controllers/users.js'
import auth from '../middlewares/Auth.js'
const router = express.Router();
router.post('/signup',signUp)
router.post('/login',logIn)
router.get('/getAllUsers',getAllUsers)
router.patch('/update/:id',auth,updateProfile)

export default router
