import express from 'express';
import  productRouter  from './src/modules/products/product.router.js';
import  userRouter from './src/modules/users/user.router.js';
import cors from 'cors';
const app = express();
app.use(cors())
app.use(express.json());


app.use(productRouter);
app.use(userRouter)



const port = 3000;
app.listen(port,()=>{
    console.log(`app listen to port '${port}`);
})