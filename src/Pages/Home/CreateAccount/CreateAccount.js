import React from 'react';
import image from '../../../Assets/createAccountImg.png'
const CreateAccount = () => {
    return (
        <div className=''>
           
            <p className='border-2 border-[#E4E4E4] lg:w-[55.25rem] lg:mx-auto'></p>
            <h1 className='text-center font-[Poppins] text-[2.75rem] text-[#000000] mt-[4.5rem]  font-semibold tracking-[0.1px] leading-9'>How the app works</h1>
                             
           <div className='md:flex flex-row md:gap-[7.31rem]  md:px-[6.65rem]'>
            <div className=' '>
<img src={image} alt="" />
            </div>
            {/*flex flex-row md:flex-col  text mt-[5.18rem]   mt-[15.25rem] pt-[4.87rem] mb-[3.68rem]*/}
            <div className=' md:mt-[15.25rem] text-center md:text-left'>
<p className=' text-2xl text-[#FA4A0C] font-bold tracking-[0.1px] leading-9'>Create an account</p>
<h1 className=' text-[2.5rem] text-[#252B42] font-bold tracking-[0.2px] leading-[3.56rem]'>Create/login to an existing <br className='md:block hidden'/>
account to get started</h1>
<span className=' text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>An account is created with your email <br className='md:block hidden'/>
and a desired password</span>
            </div>
            </div> 
        </div>
    );
};

export default CreateAccount;