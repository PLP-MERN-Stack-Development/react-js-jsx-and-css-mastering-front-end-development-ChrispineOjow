import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {type:String, required:true},
    task: {type:String, required:true},
    status: {type:String, enum:['pending','in-progress','completed'], default:'pending'},
    createdAt: {type:Date, default:Date.now}
}, {timestamps:true});

export const Task = mongoose.model('Task', taskSchema);

