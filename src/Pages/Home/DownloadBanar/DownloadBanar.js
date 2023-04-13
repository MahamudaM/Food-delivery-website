import React from 'react';
import downloadImg from '../../../Assets/DownloadBanarImg.png'
const DownloadBanar = () => {
    return (
        <div>
            <div className='h-[31.81rem]' style={{background:`url(${downloadImg})`,backgroundRepeat:'no-repeat',backgroundSize:'100%'}}>
<h1 className='text-center pt-[8.75rem] text-[2.5rem] text-[#FFFFFF] font-bold tracking-[0.2px] leading-[3.56rem]'>Download the app now.</h1>
<span className='text-center text-2xl text-[#FFFFFF] font-medium tracking-[0.2px] leading-[2.37rem]'>Available on your favorite store. Start your premium experience now</span>
{/* button */}
<div className='flex md:flex-row justify-center  gap-4 mt-12 w-[62.81rem] mx-auto '>
<button className=' text-[#FFFFFF] w-[8.87rem] bg-[#FA4A0C] rounded-[0.62rem] font-bold leading-7 text-base tracking-[0.2px] px-[1.93rem] py-[1.12rem]'>Play store</button>
<button className='text-[#FFFFFF] w-[10.81rem] border-[0.06rem] border-solid border-[#FFFFFF] rounded-[0.62rem] px-[2.81rem] py-4 font-bold leading-7 text-base tracking-[0.2px]'>App store</button>
</div>
            </div>
        </div>
    );
};

export default DownloadBanar;