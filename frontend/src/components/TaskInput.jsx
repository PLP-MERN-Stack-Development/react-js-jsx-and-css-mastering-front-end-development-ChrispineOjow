import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"
import {Label} from "./ui/label"
import { Textarea } from './ui/textarea';
import {Button}from './ui/button';
import{ useState }from 'react';
import {tasksAPI} from '../lib/api'


export default function TaskModal(){
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isSaving, setIsSaving] = useState(false)
    const [isModalOpen, setIsModalOpen]= useState(false)

    async function handleAdd(task){
        try{
        const created = await tasksAPI.create(task);
        setTasks(prev=>[created, ...prev ]);
        return true;
        }catch(error){
            console.error("Failed to create task", error)
            return false;
        }

    };

    async function handleSave(e){
        e.preventDefault();
        if(!title.trim() || !description.trim()){
            alert("Please enter both a title and a description.")
            return;
        }

        setIsSaving(true);

        const newTask = {
            title : title.trim(),
            task : description.trim(),
        }

        const success = await handleAdd(newTask);

        setTitle('');
        setDescription('');
        setIsSaving(false);
        setIsModalOpen(false)
        if(success){
            window.location.reload();
        }

    }

    return(

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            
            <DialogTrigger asChild>
                <Button onClick={()=>setIsModalOpen(true)}>Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    
                </DialogHeader>
                <form onSubmit={handleSave}> 
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                        <Label>Title</Label>
                        <Input 
                            id="title" 
                            value={title}  
                            className="border border-black"
                            onChange={(e)=> setTitle(e.target.value)}
                            disabled={isSaving}
                        />

                        </div>
                        <div className="grid gap-3 mb-5">
                            <Label >Task</Label>
                            <Textarea 
                                id="description"
                                value={description}
                                onChange={(e)=> setDescription(e.target.value)}
                                disabled={isSaving}
                                className="border border-black w-full resize-none"/>
                                
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline" type="button" disabled={isSaving}>Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={isSaving}>
                            {isSaving ? 'Saving..': 'Save'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
            
        </Dialog>
    )
              
            
}