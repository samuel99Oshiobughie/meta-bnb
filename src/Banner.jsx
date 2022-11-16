import { mbToken, sea, meta } from "./assets";

const Banner = () => {
  return (
    <>
    <section className="flex  items-center px-[0px] py-2.5 h-[70px] bg-[#A02279] mt-[67px] ">
      <img className="ml-[5px]  w-[80px]" src={mbToken} alt="mb token"/>
      <img className="ml-[60px] w-[80px]" src={meta} alt="meta token"/>
      <img className="ml-[60px] w-[80px]" src={sea} alt="sea token"/>
    </section>
    </>
    // <>
    // <section className="flex  items-center px-2.5 max-sm:px-[0px]  max-xl:mt-[104px] py-2.5 h-[70px] bg-[#A02279] mt-[67px] max-sm:w-[638px]">
    //   <img className="ml-[50px] max-sm:ml-[15px]  max-xl:ml-[15px] max-sm:w-[130px]" src={mbToken} alt="mb token"/>
    //   <img className="ml-[264px] max-sm:ml-[120px] max-xl:ml-[195px] max-sm:w-[130px]" src={meta} alt="meta token"/>
    //   <img className="ml-[264px] max-sm:ml-[95px] max-xl:ml-[135px] max-sm:w-[130px]" src={sea} alt="sea token"/>
    // </section>
    // </>
  )
}

export default Banner