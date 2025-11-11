import { useState } from 'react';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom';
import TaskPage from './pages/TasksPage';
import HomePage from './pages/HomePage';

// Import your components here
// import Button from './components/Button';

// import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar  />
        {/* Defining my routes */}
        <Routes>
          {/* Route to the Home page */}
          <Route path="/" element={<HomePage/>}/>

          {/* Route to Tasks Page */}
          <Route path="/tasks" element={<TaskPage/>}/>
        </Routes>

        <main>
        </main>

        {/* Footer component will go here */}
        <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App; 