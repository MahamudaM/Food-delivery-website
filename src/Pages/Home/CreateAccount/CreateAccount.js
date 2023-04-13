import React from 'react';
import image from '../../../Assets/createAccountImg.png'
const CreateAccount = () => {
    return (
        <div>
            <h1 className='text-center text-[2.75rem] text-[#000000] mt-[4.5rem] mb-[3.62rem] font-semibold tracking-[0.1px] leading-9'>How the app works</h1>
           <div className='flex flex-row gap-[10.62rem]'>
            <div>
<img src={image} alt="" />
            </div>
            {/* text   mt-[4.87rem]*/}
            <div className='mt-[14.56rem]'>
<p className=' text-2xl text-[#FA4A0C] font-bold tracking-[0.1px] leading-9'>Create an account</p>
<h1 className=' text-[2.5rem] text-[#252B42] font-bold tracking-[0.2px] leading-[3.56rem]'>Create/login to an existing <br/>
account to get started</h1>
<span className=' text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>An account is created with your email <br/>
and a desired password</span>
            </div>
            </div> 
        </div>
    );
};

export default CreateAccount;