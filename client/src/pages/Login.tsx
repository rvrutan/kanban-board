import { useState, FormEvent, ChangeEvent } from "react";
import Auth from '../utils/auth';
import { login } from "../api/authAPI";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (err) {
      console.error('Failed to login', err);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100 p-4'>
      <div className='card w-full max-w-md shadow-lg bg-white p-8'>
        <h1 className='text-2xl font-bold text-center mb-4'>Login</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control mb-4'>
            <label className='label'>
              <span className='label-text'>Username</span>
            </label>
            <input 
              type='text'
              name='username'
              value={loginData.username || ''}
              onChange={handleChange}
              className='input input-bordered w-full'
              placeholder='Enter your username'
              required
            />
          </div>
          <div className='form-control mb-6'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input 
              type='password'
              name='password'
              value={loginData.password || ''}
              onChange={handleChange}
              className='input input-bordered w-full'
              placeholder='Enter your password'
              required
            />
          </div>
          <button type='submit' className='btn btn-primary w-full'>Submit Form</button>
        </form>
      </div>
    </div>
  );
};

export default Login;