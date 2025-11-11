import { Button } from "./ui/button";
import {Card, CardHeader, CardContent} from "./ui/card";
import{useState} from "react";
import {Input} from "./ui/input";
import {Textarea} from "./ui/textarea";



function TaskManager({task,onSave, onDelete}){
    
    
    const [isEditing, setIsEditing ] = useState(false);
    const [draft, setDraft] = useState({
        title : task?.title || '', 
        task : task?.task || ''
    });

    return(
        <Card className = 'w-full mb-4 overflow-hidden'>

            <CardHeader className="flex items-center justify-between">
                {/* this is conditional rendering */}
                {
                    !isEditing ? (
                        <>
                            <h3 className="text-lg font-semibold">{task.title}</h3>
                            <div className="flex gap-2">
                                <Button className="bg-slate-700 hover:bg-slate-800" onClick={()=>setIsEditing(true)}>
                                    Edit
                                </Button>
                                <Button className="bg-red-600 hover:bg-red-700" onClick={()=>onDelete(task._id)}>
                                    Delete
                                </Button>
                            </div>
                        </>
                    ):(

                        <h3 className="text-lg font-semibold">Edit Note</h3>

                    )
                }

            </CardHeader>

            <CardContent className="space-y-4">
                {
                    !isEditing ? (

                        <p className="text-slate-700 whitespace-pre-wrap">{task.task || <em>No content</em>}</p>

                    ):(

                        <form onSubmit={(e)=>{e.preventDefault(); onSave(task._id, draft);setIsEditing(false);}} className="space-y-4">

                            <Input value={draft.title} onChange = {(e)=>setDraft({...draft, title: e.target.value})} />

                            <Textarea rows={5} value={draft.task} onChange = {(e)=>  setDraft({...draft, task:e.target.value})} />

                            <div className="flex gap-2">

                                <Button type="submit" className="bg-green-600 hover:bg-green-700">
                                    Save
                                </Button>

                                <Button className="bg-slate-600 hover:bg-slate-700" onClick={()=>setIsEditing(false)}>
                                    Cancel
                                </Button>

                            </div>

                        </form>
                    )
                }
                 
                <p className="text-xs text-slate-500">Updated{new Date(task.updatedAt).toLocaleString()}</p>

            </CardContent>


        </Card>
    )
}

export default TaskManager;