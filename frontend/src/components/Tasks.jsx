import {useEffect, useState} from 'react';
import {tasksAPI} from '@/lib/api.js';
import {Spinner} from '@/components/ui/spinner'; 
import TaskManager from '@/components/TaskManager.jsx';

export default function Tasks(){
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function loadTasks(){
        try{
            const data = await tasksAPI.list();
            setTasks(data);

        }finally{
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        loadTasks();

    }, []);

    const handleUpdate = async (_id, draft) => {

        await tasksAPI.update(_id, draft);
        await  loadTasks();

    };

    
  

    const handleDelete = async (_id) => {
        await tasksAPI.delete(_id);
        await loadTasks();
    };

    if (isLoading) return <div><Spinner className="font-semibold size-11"/></div>

    return (
        <>
            <div className="space-y-4">

                {tasks.map((t)=>(
                <TaskManager
                    key={t._id}
                    task={t}
                    onSave = {handleUpdate}
                    onDelete= {handleDelete}
                    /> 
                ))}
            </div>
        </>
    )
}