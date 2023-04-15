import React, { useState } from 'react';
import logo from '../../Assets/logo.svg'
import bar from '../../Assets/bar.svg'
const Hader = () => {
    const [open,setOpen] = useState(false)
    const menus = [
        {id:1,name:'Home'},
        {id:2,name:'Product'},
        {id:3,name:'Faq'},
        {id:4,name:'Contact'},
    ]
    return (
        <div>
            <nav className='md:pl-[5.62rem] md:pr-[2.5rem] pt-[1.63rem] pb-[1.75rem] shadow md:flex md:items-center md:justify-between'>
                 {/* logo */}
<div className='flex justify-between items-center '>
    <span className='cursor-pointer'>
        <img src={logo} alt="" />
    </span>
    {/* toggol manu */}
   <div onClick={()=>setOpen(!open)} className='w-[18.5px] h-[16px] mx-2  cursor-pointer md:hidden block'>
   {
        open? <span className='mb-4' >
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
         </span>
        : 
        <span >
        <img src={bar} alt="" />
    </span>
    }
   </div>
  
</div>
<ul className={`md:flex md:w-auto md:static justify-center absolute w-full  transition-all ease-in duration-400 ${open?'top-16' : 'top-[-400px]'}`}>
    {
        menus.map(menu=> <li className='px-10 my-6 md:my-0' key={menu.id}>
        <a href="/" className='text-[#252B42]  font-semibold text-[1rem] tracking-[0.2px] hover:text-[#FA4A0C] duration-500'>{menu.name}</a>
    </li>)
    }
   
    
</ul>
            </nav>
        </div>
    );
};

export default Hader;