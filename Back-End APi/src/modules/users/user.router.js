import express from 'express';
const router = express.Router();
import {getusers,Adduser,updateuser,deleteuser} from "./user.controller.js"

router.get('/users',getusers)

router.post('/user',Adduser)

router.patch('/user',updateuser)

router.delete('/user',deleteuser)

export default router