import star from "./assets/Star.png";
import { adventures } from "./constants";

const Sample = () => {
  return (
    <>
    <section className="max-sm:w-[638px]">
      <h4 className="font-red font-bold text-5xl max-sm:text-4xl  max-xl:ml-[150px] leading-[60px] text-[#000000] ml-[313px] max-sm:ml-[50px] mt-[39px]" >Inspiration for your next adventure</h4>
      <div className="flex flex-wrap max-sm:flex-col mt-[43px]  max-xl:ml-[80px] max-sm:ml-[90px] mb-[92px]">
        {adventures.map((adventure, i) =>(
           <div key={i} className="box-border w-[292px] h-[372px] mt-[24px] ml-[24px]  max-xl:ml-[90px] border-solid border-[#D7D7D7] border-[1px] rounded-[15px]">
           <img className=" w-[260px] h-[265px] mt-[16px] ml-[16px] mr-[16px] " src={adventure} alt="place card"/>
           <div className="flex">
             <div>
               <p className="w-[67px] h-[14px] mt-[16px] ml-[16px] font-red font-normal text-xs leading-[13px] text-[#434343]">Desert King</p>
               <p className="w-[83px] h-[14px] mt-[10px] ml-[16px] font-red font-normal text-xs leading-[13px] text-[#434343]">2345km away</p>
               <div className="flex mt-[9px] ml-[16px]">
                 <img src={star} alt="star"/>
                 <img className="ml-[8px]" src={star} alt="star"/>
                 <img className="ml-[8px]" src={star} alt="star"/>
                 <img className="ml-[8px]" src={star} alt="star"/>
                 <img className="ml-[8px]" src={star} alt="star"/>
               </div>
             </div>
             <div>
               <p className="w-[88px] h-[14px] mt-[16px] ml-[92px] font-red font-bold text-xs leading-[13px] text-[#434343]">1MBT per night</p>
               <p className="w-[148px] h-[14px] mt-[10px] ml-[53px] font-red font-normal text-xs leading-[13px] text-[#434343]">available for 2weeks stay</p>
             </div>
           </div>  
         </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Sample