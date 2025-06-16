import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useState } from 'react';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <header className="bg-gray-100 px-3 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-800">Data Viz Platform</h1>
      <div className="flex items-center gap-4">
        <button onClick={toggleSideBar} className='btn btn-primary w-32'>Edit Variables</button>
        <button
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Logout
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-58 lg:w-128 bg-gray-700 text-white transform transition-transform duration-800 ease-in-out z-10
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Variables</h2>
          <button onClick={toggleSideBar} className="text-gray-300 hover:text-white">
            ✕
          </button>
        </div>
        <div className="p-4">
          <p>This is your variable editing panel.</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
