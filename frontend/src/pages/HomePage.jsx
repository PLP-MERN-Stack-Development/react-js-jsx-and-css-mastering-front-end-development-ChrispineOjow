import Tasks from '@/components/Tasks';
import TaskModal from '../components/TaskInput';



// import Footer from './components/Footer';


function HomePage() {


  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
       

        <header className="bg-white dark:bg-gray-800 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">PLP Task Manager</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <p className="text-lg mb-4">
                 Welcome to our Task manager do you want to add tasks
              </p>
              <TaskModal/>

              
            </div>
          </div>
          
          {/* API data display will go here */}
          <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">API Data</h2>
            
            <Tasks/>
          
          </div>
        </main>

      </div>
    </>
  );
}

export default HomePage; 