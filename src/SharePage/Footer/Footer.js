import React from 'react';
import logo from '../../Assets/logo.svg'
import twitter from '../../Assets/twitter-outlined.svg'
import facebook from '../../Assets/facebook-filled.svg'
import instagram from '../../Assets/instagram.svg'
const Footer = () => {
    return (
        <div>
            {/* lg:flex-row md:flex-col justify-center */}
            <div className='md:flex  md:justify-between text-center items-center mt-[2.37rem] lg:mx-[7.18rem] mb-[3.31rem]'>
<img className='cursor-pointer hidden lg:block' src={logo} alt="" />
<div className='justify-center items-center flex md:flex-row  gap-6 '>
<img className='cursor-pointer' src={twitter} alt="" />
<img className='cursor-pointer' src={facebook} alt="" />
<img className='cursor-pointer' src={instagram} alt="" />  
</div>
<span className='text-xs font-[Roboto] font-bold text[#5C5C5C] tracking-[0.1px]'>Copywright 2020 Bella Onojie.com</span>
            </div>
        </div>
    );
};

export default Footer;