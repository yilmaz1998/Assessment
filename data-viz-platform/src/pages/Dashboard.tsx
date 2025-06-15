import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export default function Dashboard() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Welcome to the Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-3 rounded shadow hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
