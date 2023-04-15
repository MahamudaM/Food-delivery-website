import React from 'react';
import image from '../../../Assets/checkout.png'
const Checkout = () => {
    return (
        <div>
            <div className='md:flex flex-row gap-[10.62rem] md:px-[6.65rem]'>
            <div>
<img src={image} alt="" />
            </div>
            {/* text   mt-[4.87rem]*/}
            <div className='text-center md:text-left md:mt-[14.56rem]'>
<p className=' text-2xl text-[#FA4A0C] font-bold tracking-[0.1px] leading-9'>Checkout</p>
<h1 className=' text-[2.5rem] text-[#252B42] font-bold tracking-[0.2px] leading-[3.56rem]'>When you done check out <br className='md:block hidden'/>
and get it delivered.</h1>
<span className=' text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>When you done check out and get it <br className='md:block hidden'/>
delivered with ease.</span>
            </div>
            </div>  
        </div>
    );
};

export default Checkout;