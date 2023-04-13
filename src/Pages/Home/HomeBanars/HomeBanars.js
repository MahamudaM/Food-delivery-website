import React from 'react';
import banarImg from '../../../Assets/BanarImg.png'
import mobile1 from '../../../Assets/banarOrangMobile.png'
import mobile2 from '../../../Assets/banarWhiteMobile.png'
const HomeBanars = () => {
    return (
        <div >
            {/* banar img */}
          <div className='h-[38.69rem]' style={{background:`url(${banarImg})`,backgroundRepeat:'no-repeat',backgroundSize:'100%'}} >
{/* text w-[58.68rem]*/}
<div className='w-[62.81rem] mx-auto pt-[4.5rem]'>
<h3 className=' text-center text-2xl text-[#F6F6F6] font-bold tracking-[0.1px] leading-9'>Food app</h3>
<h1 className='text-center font-bold text-[#FFFFFF] text-[3.62rem] leading-[5rem] tracking-[0.2px]'>Why stay hungry when <br/>
you can order form Bella Onojie</h1>
 <p className='text-center text-2xl text-[#F6F6F6] font-medium tracking-[0.2px] leading-[2.37rem]'>Download the bella onoje’s food app now on</p>

</div>
 {/* button */}
 <div className='flex md:flex-row justify-center  gap-[2.12rem] mt-12 w-[62.81rem] mx-auto '>
<button className=' text-[#FFFFFF] w-[14.75rem] bg-[#FA4A0C] rounded-[1.87rem] font-bold leading-9 text-2xl tracking-[0.1px]'>Play store</button>
<button className='text-[#FFFFFF] w-[14.75rem] border-[0.06rem] border-solid border-[#FFFFFF] rounded-[1.87rem] px-[3.65rem] py-4 font-bold leading-9 text-2xl tracking-[0.1px]'>App store</button>
</div>

            </div>  
            {/* mobile image */}
 <div className='flex flex-row'>
<div className=' bottom-[-25.12rem] left-[19.87rem]'>
<img src={mobile1} alt="" />

</div>
<div className=' top-[-49.07rem] left-[42.88rem]'>
<img src={mobile2} alt="" />
</div>
 </div>
            <p className='border-2 border-[#E4E4E4] w-[55.25rem] mx-auto'>
</p>
        </div>
    );
};
export default HomeBanars;