import '../App.css';
import React from 'react';
import { useState } from 'react';

function Header(){
    const[toggleMenu, setToggleMenu] = useState(false);
    return(
       <header className="flex justify-between px-2 py-5 bg-head text-white font-passion-one text-2xl">
        <p className="flex font-passion-one text-2xl px-4">Shalini's Portfolio</p>
        <nav className='hidden md:block'>
        <ul className="flex">
            <li className='hover:text-red-500 px-4'><a href = 'https://shaliniga.github.io/Shalini-Portfolio'>Home</a></li>
            <li className='hover:text-red-500 px-4'><a href = '#about'>About</a></li>
            <li className='hover:text-red-500 px-4'><a href = '#resume'>Resume</a></li>
            <li className='hover:text-red-500 px-4'><a href = '#contact'>Contact</a></li>
        </ul>
        </nav>
        {toggleMenu && <nav className='block md:hidden '>
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col mobile-menu bg-head">
            <li><a href = 'https://shaliniga.github.io/Shalini-Portfolio'>Home</a></li>
            <li><a href = '#about'>About</a></li>
            <li><a href = '#resume'>Resume</a></li>
            <li><a href = '#contact'>Contact</a></li>
        </ul>
        </nav>}
        <button onClick={()=>setToggleMenu(!toggleMenu)}className='block md:hidden'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</button>
       </header>
    );
}

export default Header;