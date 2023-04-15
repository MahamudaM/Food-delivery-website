import React from 'react';
import image from '../../../Assets/explorImg.png'
const ExploreVarieties = () => {
    return (
//         <div className='mx-auto'>
//             <div className='flex lg:flex-row md:flex-col lg:gap-[7.31rem] '>
            
//             {/* text   mt-[4.87rem]*/}
//             <div className='mt-[14.56rem]'>
// <p className=' text-2xl text-[#FA4A0C] font-bold tracking-[0.1px] leading-9'>Explore varieties</p>
// <h1 className=' text-[2.5rem] text-[#252B42] font-bold tracking-[0.2px] leading-[3.56rem]'>Shop for your favorites <br/>
// meal as e dey hot.</h1>
// <span className=' text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>Shop for your favorite meals or drinks<br/>
// and enjoy while doing it.</span>
//             </div>
//             {/* img */}
//             <div>
// <img src={image} alt="" />
//             </div>
//             </div>  
//         </div>
<div>
            <div className='md:flex  lg:flex-row-reverse gap-[7.31rem] '>
            <div>
<img src={image} alt="" />
            </div>
            {/* text   mt-[4.87rem]*/}
            <div className='md:mt-[14.56rem] text-center md:text-left'>
<p className=' text-2xl text-[#FA4A0C] font-bold tracking-[0.1px] leading-9'>Explore varieties</p>
<h1 className=' text-[2.5rem] text-[#252B42] font-bold tracking-[0.2px] leading-[3.56rem]'>Shop for your favorites <br className='md:block hidden'/>
meal as e dey hot.</h1>
<span className=' text-2xl text-[#737373] font-medium tracking-[0.2px] leading-[2.37rem]'>Shop for your favorite meals or drinks<br className='md:block hidden'/>
and enjoy while doing it.</span>
            </div>
            </div>  
        </div>
    );
};

export default ExploreVarieties;