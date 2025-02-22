import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
      <Navbar />
      <main className='flex-grow p-4'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;