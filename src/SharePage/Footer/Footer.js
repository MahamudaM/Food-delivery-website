import React from 'react';
import logo from '../../Assets/logo.svg'
import twitter from '../../Assets/twitter-outlined.svg'
import facebook from '../../Assets/facebook-filled.svg'
import instagram from '../../Assets/instagram.svg'
const Footer = () => {
    return (
        <div>
            <div className='flex flex-row justify-between items-center lg:mx-[7.18rem] mb-[3.31rem]'>
<img className='cursor-pointer' src={logo} alt="" />
<div className='flex flex-row gap-6 '>
<img className='cursor-pointer' src={twitter} alt="" />
<img className='cursor-pointer' src={facebook} alt="" />
<img className='cursor-pointer' src={instagram} alt="" />  
</div>
<span className='text-xs font-bold text[#5C5C5C] tracking-[0.1px]'>Copywright 2020 Bella Onojie.com</span>
            </div>
        </div>
    );
};

export default Footer;