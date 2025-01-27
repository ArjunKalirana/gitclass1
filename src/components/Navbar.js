import React from 'react'
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom"
import {  toast } from 'react-hot-toast';

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 mx-auto'>
    <Link to="/">
    <img src={logo} alt='Logo' width={160} height={32}loading='lazy'/>
    </Link>
    <nav>
      <ul className='flex gap-x-6 text-white' >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
     
      </nav>

      <div className=' flex  gap-3 item-center'>
        {!isLoggedIn &&
          <Link to="/login">
            <button className=' text-white py-[8px] px-[12px] rounded-[8px] border 'style={{ borderColor: '#4a4a4a', backgroundColor: '#333333' }}>
              Login
            </button>
          </Link>
        }
        {!isLoggedIn &&
          <Link to="/signup">
          <button className=' text-white py-[8px] px-[12px] rounded-[8px] border 'style={{ borderColor: '#4a4a4a', backgroundColor: '#333333' }}>
          Sign Up
            </button>
          </Link>
        } 
        {isLoggedIn &&
          <Link to="/">
            <button className=' text-white py-[8px] px-[12px] rounded-[8px] border 'style={{ borderColor: '#4a4a4a', backgroundColor: '#333333' }} onClick={() => {
              setIsLoggedIn(false);
              toast.success("logged Out");
            }}>
              Log Out
            </button>
          </Link>
        }
        {isLoggedIn &&
          <Link to="/dashboard">
          <button className=' text-white py-[8px] px-[12px] rounded-[8px] border 'style={{ borderColor: '#4a4a4a', backgroundColor: '#333333' }}>
              Dashboard
            </button>
          </Link>
        }
      </div>
      
    
    </div>
  )
}

export default Navbar