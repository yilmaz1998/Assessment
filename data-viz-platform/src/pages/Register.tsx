import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful! Please log in.');
      navigate('/login');
    } catch (error: any) {
      alert('Error: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col justify-center text-center items-center">
       <div className="bg-white w-full max-w-md bg-white shadow-lg rounded-xl p-12">
       <h3 className="text-5xl">Register Page</h3>
      <form onSubmit={handleRegister} className="flex flex-col max-w-full">
      <div className="form-floating mt-3 mb-3">
        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username"/>
        <label>Email</label>
      </div>
      <div className="form-floating mb-3">
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <label>Password</label>
      </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          Register
        </button>
      </form>
      <div className='text-center'>
      <p className="mt-4 text-gray-600">If you already have an account?</p>
        <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
      </div>
    </div>
   </div>
  );
};
