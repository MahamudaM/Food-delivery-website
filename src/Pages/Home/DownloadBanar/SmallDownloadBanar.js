import React from 'react';

const SmallDownloadBanar = () => {
    return (
        <div>
        <div className=' mt-12 bg-[#252B42]' >
<h1 className='text-center pt-[8.75rem] text-[2.5rem] text-[#FFFFFF] font-bold tracking-[0.2px] leading-[3.56rem]'>Download the app now.</h1>
<p className='text-center text-2xl text-[#FFFFFF] font-medium tracking-[0.2px] leading-[2.37rem]'>Available on your favorite store. Start your premium experience now</p>
{/* button w-[8.87rem] w-[10.81rem]*/}
<div className='flex sm:flex-col justify-center  gap-4 mt-12 mx-auto pb-[6.87rem] '>
<button className=' text-[#FFFFFF]  bg-[#FA4A0C] rounded-[0.62rem] font-bold leading-7 text-base tracking-[0.2px] px-[1.93rem] py-[1.12rem]'>Play store</button>
<button className='text-[#FFFFFF]  border-[0.06rem] border-solid border-[#FFFFFF] rounded-[0.62rem] px-[2.81rem] py-4 font-bold leading-7 text-base tracking-[0.2px]'>App store</button>
</div>
        </div>
    </div>
    );
};

export default SmallDownloadBanar;