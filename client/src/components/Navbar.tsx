import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import auth from '../utils/auth';

const Navbar = () => {
  const [ loginCheck, setLoginCheck ] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true);
    }
  };

  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

  return (
    <div className='navbar bg-base-100 shadow-md'>
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost normal-case text-xl'>Krazy Kanban Board</Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          {!loginCheck ? (
            <li><Link to='/login' className='btn'>Login</Link></li>
          ) : (
            <li><button className='btn' onClick={() => auth.logout()}>Logout</button></li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar;