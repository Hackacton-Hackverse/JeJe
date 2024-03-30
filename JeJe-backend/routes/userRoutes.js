import { Router } from 'express';

import { User } from '../model.js';

const userRouter = Router();

//Post Method
userRouter.post('/post', async (req, res) => {
    const data = new User({
        name: req.body.name,
        email: req.body.email
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
userRouter.get('/getAll', async (req, res) => {
    try{
        const data = await User.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Get by ID Method
userRouter.get('/getOne', async (req, res) => {
    try{
        const data = await User.findById(req.body.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
userRouter.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await User.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
userRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

export { userRouter};