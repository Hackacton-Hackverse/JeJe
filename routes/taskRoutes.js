import { Router } from 'express';

import { TaskList } from '../model.js';

const taskRouter = Router();

//Post Method
taskRouter.post('/post', async (req, res) => {
    const data = new TaskList({
        name: req.body.name,
        tasks: req.body.tasks
    })

    try {
        console.log(data)
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
taskRouter.get('/getAll', async (req, res) => {
    try{
        const data = await TaskList.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
taskRouter.get('/getOne/:id', async (req, res) => {
    try{
        const data = await TaskList.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
taskRouter.patch('/updateName/:id', async (req, res) => {
    try {
        const data = await TaskList.findById(req.params.id);

        data.name = req.body.name;

        await data.save();

        res.send(data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
taskRouter.delete('/deleteList/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await TaskList.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Add task To List
taskRouter.patch('/addTask/:id', async (req, res) => {
    try {
        const tasklist = await TaskList.findById(req.params.id);

        tasklist.tasks.push(req.body);

        await tasklist.save();

        res.send(tasklist)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete task from List
taskRouter.patch('/removeTask/:id', async (req, res) => {
    try {
        const tasklist = await TaskList.findById(req.params.id);

        tasklist.tasks.id(req.body.task_id).deleteOne();

        await tasklist.save();

        res.send(tasklist)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update task from List
taskRouter.patch('/updateTask/:id', async (req, res) => {
    try {
        const tasklist = await TaskList.findById(req.params.id);

        const task = tasklist.tasks.id(req.body.task_id);

        task.name = req.body.name?req.body.name:task.name;
        task.description = req.body.description?req.body.description:task.description;
        task.steps = req.body.steps?req.body.steps:task.steps;

        await tasklist.save();

        res.send(tasklist)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export {taskRouter};