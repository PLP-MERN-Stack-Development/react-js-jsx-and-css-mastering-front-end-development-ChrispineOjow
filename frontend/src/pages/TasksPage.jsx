import Tasks from"../components/Tasks.jsx";

export default function TaskPage(){
    return(
        <>
          

            <div className=" bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                        
                <Tasks/>
                      
            </div>

        </>
    )
}
