import express from 'express';
import {Task} from '../Models/Task.model.js';
const router = express.Router();

router.get("/example", (req, res)=>{
    res.send(`The Api is working so it can't be that one`);

})

router.get("/task",async (req, res)=>{
    try{
        const task = await Task.find().sort({updatedAt: -1});
        res.json(task);
    }catch(error){
        res.status(500).json({message : error.message})
    }

})

router.post("/task", async(req, res)=>{
    try{
        const {title, task, status} = req.body;
        const newTask = new Task({title, task, status});
        await newTask.save();
        res.status(201).json(newTask);
    }catch(error){

        res.status(500).json({message: 'Server error', error:error.message});
    }
})

router.put("/task/:_id" , async(req, res)=>{
   
    const taskId = req.params._id;
    const updatedData = req.body;

    try{
        
        const updatedTask = await Task.findByIdAndUpdate(taskId, updatedData, {
            new: true,
            runValidators:true
        });

        //Check if task was actually found and updated
        if(!updatedTask){
            return res.status(404).json({message:"Task not found"});
        }

        res.status(200).json(updatedTask);

    }catch(error){

        res.status(400).json({message: error.message})
    }
})

router.delete("/task/:_id", async(req, res)=>{
    const taskId = req.params._id;
    try{

        const deletedTask = await Task.findByIdAndDelete(taskId);

        //Check if task was actually deleted
        if(!deletedTask){
           return res.status(400).json({message: "Task not found"});
        }
        res.status(200).json({message:"Task deleted"});

    }catch(error){

        res.status(500).json({message:error.message})
    }
})

export default router;