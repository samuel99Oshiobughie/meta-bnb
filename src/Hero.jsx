import { home1, home2, home3, home4 } from  "./assets";

const Hero = () => {
  return (
    <>
    <section className="flex flex-col md:flex-row">
      <div className="mt-[162.13px]">
        <p className="font-red font-normal text-[40px] md:text-[56px] leading-[140%] tracking-[-0.02em] text-[#434343] ml-[5px] md:ml-[40px]">
          Rent a <span className="text-[#A02279]">Place</span> away from<br/>
          <span className="text-[#A02279]">Home</span>in the <span className="text-[#A02279]">Metaverse</span>
        </p>
        <p className="font-red font-normal text-sm md:text-2xl leading-[35px] text-[#434343] mt-[48px] ml-[5px] md:ml-[40px]">we provide you access to luxury and affordable houses <br/> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone
        </p>
        <div className="flex mt-[48.08px] ml-[5px] md:ml-[40px]">
          <input 
          type="search"
          name="search"
          id="name"
          placeholder="    Search for location"
          className="w-[200px] md:w-[300px] h-[54px] rounded-tl-lg rounded-bl-lg box-border border-[1px] border-solid border-[#A3A3A3]"
          >
            </input>
          <button className="w-[100px] md:w-[230px] h-[54px] bg-[#A02279] rounded-tr-lg rounded-br-lg font-red font-normal text-base leading-[19px] text-center text-white">Search</button>
        </div>
      </div>
      <div className="flex flex-col w-[300px]  ml-[0px] md:ml-[190px] md:mt-[0px] mt-[580px]">
          <img className="w-[180px] md:w-[234px] h-[176px] absolute top-[850px] md:top-[315px] ml-[5px] md:ml-[0px]" src={home1} alt="home one"/>
          <img className="w-[180px] md:w-[234px] h-[176px] absolute top-[1034px] md:top-[499px] ml-[5px] md:ml-[0px]" src={home2} alt="home two"/>
          <img className="w-[180px] md:w-[234px] h-[176px] absolute top-[780px] md:top-[216px] ml-[189px] md:ml-[242px]" src={home3} alt="home three"/>
          <img className="w-[180px] md:w-[234px] h-[176px] absolute top-[964px] md:top-[400px] ml-[189px] md:ml-[242px]" src={home4} alt="home four"/>
      </div>
    </section>
    </>
      // <>
      // <section className="flex  max-sm:flex-col max-sm:w-[638px] ">
      //   <div className="mt-[162.13px]">
      //     <p className="font-red font-normal text-[56px]  max-xl:text-[40px] leading-[140%] tracking-[-0.02em] text-[#434343] ml-[40px]">
      //       Rent a <span className="text-[#A02279]">Place</span> away from<br/>
      //       <span className="text-[#A02279]">Home</span>in the <span className="text-[#A02279]">Metaverse</span>
      //     </p>
      //     <p className="font-red font-normal text-2xl max-xl:text-xl leading-[35px] text-[#434343] mt-[48px] ml-[40px]">we provide you access to luxury and affordable houses <br/> in the metaverse, get a chance to turn your <br /> imagination to reality at your comfort zone
      //     </p>
      //     <div className="flex mt-[48.08px] ml-[40px]">
      //       <input 
      //       type="search"
      //       name="search"
      //       id="name"
      //       placeholder="    Search for location"
      //       className="w-[300px]  max-xl:w-[250px] h-[54px] rounded-tl-lg rounded-bl-lg box-border border-[1px] border-solid border-[#A3A3A3]"
      //       >
      //         </input>
      //       <button className="w-[230px]  max-xl:w-[200px] h-[54px] bg-[#A02279] rounded-tr-lg rounded-br-lg font-red font-normal text-base leading-[19px] text-center text-white">Search</button>
      //     </div>
      //   </div>
      //   <div className="flex flex-col w-[300px] ml-[190px] max-sm:ml-[0px]  max-xl:ml-[35px] max-sm:mt-[580px]">
      //       <img className="w-[234px] h-[176px] absolute top-[315px]  max-xl:top-[300px] max-sm:top-[850px] max-sm:ml-[70px]" src={home1} alt="home one"/>
      //       <img className="w-[234px] h-[176px] absolute top-[499px]  max-xl:top-[484px] max-sm:top-[1034px] max-sm:ml-[70px]" src={home2} alt="home two"/>
      //       <img className="w-[234px] h-[176px] absolute top-[216px] ml-[242px] max-sm:top-[780px] max-sm:ml-[312px]" src={home3} alt="home three"/>
      //       <img className="w-[234px] h-[176px] absolute top-[400px] ml-[242px] max-sm:top-[964px] max-sm:ml-[312px]" src={home4} alt="home four"/>
      //   </div>
      // </section>
      // </>
  )
}

export default Hero