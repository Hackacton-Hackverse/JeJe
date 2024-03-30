import express from 'express';
import { userRouter } from './routes/userRoutes.js';
import { taskRouter } from './routes/taskRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/v1/users', userRouter)

app.use('/api/v1/tasks', taskRouter)

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})