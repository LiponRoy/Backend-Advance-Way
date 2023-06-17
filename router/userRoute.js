import express from 'express';
import { addUser, getAll } from '../controller/userController.js';

const userRouter = express.Router();
//adding data
userRouter.post('/add', addUser);
//getting all data
userRouter.get('/all', getAll);
// //getting single data
// instructorRouter.get('/getOne/:id', getOneData);
// //update data
// instructorRouter.put('/update/:id', updateData);
// //delete data
// instructorRouter.delete('/delete/:id', deleteData);

export default userRouter;
