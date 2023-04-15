import React from 'react';
import banarImg from '../../../Assets/BanarImg.png'
// import mobile1 from '../../../Assets/banarOrangMobile.png'
// import mobile2 from '../../../Assets/banarWhiteMobile.png'
import bothphone from '../../../Assets/bothphone.png'
import Hader from '../../../SharePage/Hader/Hader';
const HomeBanars = () => {
    return (
        <div >
            {/* banar img  md:bg-white */}
           
          <div className="md:bg-none block bg-cover" style={{background:`url(${banarImg})`,backgroundRepeat:'no-repeat'}} >
{/* text w-[58.68rem]*/}
<div className=' mx-auto pt-[4.5rem]'>
<h3 className=' text-center text-2xl text-[#F6F6F6] font-bold tracking-[0.1px] leading-9'>Food app</h3>
<h1 className='text-center font-[Poppins] font-bold text-[#FFFFFF] text-[3.62rem] leading-[5rem] tracking-[0.2px]'>Why stay hungry when <br/>
you can order form Bella Onojie</h1>
 <p className='text-center text-2xl text-[#F6F6F6] font-medium tracking-[0.2px] leading-[2.37rem]'>Download the bella onoje’s food app now on</p>

</div>
 {/* button 


 */}
 <div className='flex lg:flex-row  sm:flex-col justify-center  gap-[2.12rem] mt-12  mx-auto '>
<button className=' text-[#FFFFFF]  bg-[#FA4A0C] rounded-[1.87rem] px-[3.65rem] py-4 font-bold leading-9 text-2xl tracking-[0.1px]'>Play store</button>
<button className='text-[#FFFFFF]  border-[0.06rem] border-solid border-[#FFFFFF] rounded-[1.87rem] px-[3.65rem] py-4 font-bold leading-9 text-2xl tracking-[0.1px]'>App store</button>
</div>
{/* mobile image flex flex-row items-center */}
<div className=''>
<div className='lg:mt-[-5.42rem]  lg:ml-[21.67rem]'>
<img src={bothphone} alt="" />

</div>

 </div>
            </div>  
            
 
     
        </div>
    );
};
export default HomeBanars;