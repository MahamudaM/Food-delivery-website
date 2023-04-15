import React from 'react';
import bothphone from '../../../Assets/bothphone.png'
const SmallHomeBanar = () => {
    return (
        <div >
            {/* banar img md:bg-none block bg-cover md:bg-white */}
           
          <div className="bg-[#FAFAFA]" >
{/* text w-[58.68rem]*/}
<div className='  pt-[4.5rem] '>
<h3 className=' text-center text-2xl text-[#737373] font-bold tracking-[0.1px] leading-9'>Food app</h3>
<h1 className='text-center font-[Poppins] font-bold text-[#252B42] text-[3.62rem] leading-[5rem] tracking-[0.2px]'>Why stay hungry when <br/>
you can order form Bella Onojie</h1>
 <p className='text-center text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>Download the bella onoje’s food app now on</p>

</div>
 {/* button */}
 <div className=' text-center gap-[2.12rem] mt-12   '>
<button className=' text-[#FFFFFF] mb-[1.06rem]  bg-[#FA4A0C] rounded-[1.87rem] px-[3.65rem] py-4 font-bold leading-9 text-2xl tracking-[0.1px]'>Play store</button>
<button className='text-[#FA4A0C]  border-[0.06rem] border-solid border-[#FA4A0C] rounded-[1.87rem] px-[3.65rem] py-4 font-bold leading-9 text-2xl tracking-[0.1px]'>App store</button>
</div>
{/* mobile image  */}
<div className=''>
<div className='sm:mt-[-7.12rem]  sm:ml-[19.77rem]'>
<img src={bothphone} alt="" />

</div>

 </div>
            </div>  
            
 
     
        </div>
    );
};

export default SmallHomeBanar;