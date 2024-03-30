import dotenv from 'dotenv';
dotenv.config({ path: './.env' });

import mongoose from 'mongoose';

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);

const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String
});

const taskSchema = new mongoose.Schema({
    name: String,
    description: String,
    steps: [String]
});

const taskListSchema = new mongoose.Schema({
    name: String,
    tasks: [taskSchema]
});

const User = mongoose.model('User', userSchema);

const TaskList = mongoose.model('TaskList', taskListSchema);

export {User, TaskList}