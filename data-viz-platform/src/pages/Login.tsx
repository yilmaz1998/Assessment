import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error: any) {
      alert('Login failed: ' + error.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error: any) {
      alert('Google login failed: ' + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col justify-center text-center items-center">
      <div className="bg-white w-full max-w-md bg-white shadow-lg rounded-xl p-12">
        <p className="text-xl mb-3">Welcome to Data Visualization Platform</p>
        <h3 className='mb-3'>Login Page</h3>
          <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="btn btn-secondary mb-3 "
        >
         Sign in with Google <GoogleIcon className='ml-2'/>
        </button>
        
      <form onSubmit={handleEmailLogin} className="flex flex-col max-w-full">
        <div className="form-floating mb-3">
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Username" />
          <label>Email</label>
        </div>
        <div className="form-floating mb-3">
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          <label>Password</label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary"
        >
          Login
        </button>
      </form>
      <div className='text-center'>
        <p className="mt-4 text-gray-600">Don't have an account?</p>
        <Link to="/register" className="text-blue-600">Register</Link>
      </div> 
      </div>
     
    </div>
  );
}
