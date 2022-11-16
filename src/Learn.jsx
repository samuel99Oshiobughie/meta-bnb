import { image1, image2, image3 } from "./assets"; 

const Learn = () => {
  return (
    <>
     <section className="bg-[#A02279] max-sm:pb-[700px]">
      <div>
        <h4 className="font-red font-bold text-5xl leading-[60px] text-white pt-[186px]  ml-[20px] "> Metabnb NFTs</h4>
        <p className="font-red font-normal text-lg leading-[35px] text-white pt-[35px] ml-[20px] ">Discover our NFT gift cards collection. Loyal<br/> customers gets amazing gift cards which are<br/> traded as NFTs. These NFTs gives our cutomer<br/> access to loads of our exclusive services.</p>
        <button className="bg-white w-[156px] h-[48px] rounded-lg font-red font-normal text-base leading-[19px] text-center text-[#A02279] mt-[57.55px] ml-[20px] ">Learn more</button>
      </div>
      <img className="w-[210px] h-[253.89px] absolute left-[150px] top-[5400px]" src={image1} alt="image 1"/>
      <img className="w-[210px] h-[253.89px] absolute left-[20px] top-[5510px]" src={image2} alt="image 2"/>
      <img className="w-[210px] h-[253.89px] absolute left-[155px] top-[5573px]" src={image3} alt="image 3"/>
    </section>
    </>
    // <>
    //  <section className="bg-[#A02279] pb-[251.45px] max-sm:pb-[700px] max-sm:w-[638px]">
    //   <div>
    //     <h4 className="font-red font-bold text-5xl leading-[60px] text-white pt-[186px]  ml-[100px] max-xl:ml-[20px]"> Metabnb NFTs</h4>
    //     <p className="font-red font-normal text-lg leading-[35px] text-white pt-[35px] ml-[100px]  max-xl:ml-[20px]">Discover our NFT gift cards collection. Loyal<br/> customers gets amazing gift cards which are<br/> traded as NFTs. These NFTs gives our cutomer<br/> access to loads of our exclusive services.</p>
    //     <button className="bg-white w-[156px] h-[48px] rounded-lg font-red font-normal text-base leading-[19px] text-center text-[#A02279] mt-[57.55px] ml-[100px] max-xl:ml-[20px] ">Learn more</button>
    //   </div>
    //   <img className="w-[378.2px] h-[253.89px] absolute left-[828px] top-[1970px]  max-xl:top-[2700px] max-xl:left-[580px] max-sm:left-[230px] max-sm:top-[5400px]" src={image1} alt="image 1"/>
    //   <img className="w-[378.2px] h-[253.89px] absolute left-[597px] top-[2070px] max-xl:top-[2820px] max-xl:left-[370px] max-sm:left-[10px] max-sm:top-[5510px]" src={image2} alt="image 2"/>
    //   <img className="w-[378.2px] h-[253.89px] absolute left-[877.53px] top-[2140px] max-xl:top-[2868px] max-xl:left-[640px] max-sm:left-[250px] max-sm:top-[5577px]" src={image3} alt="image 3"/>
    // </section>
    // </>
  )
}

export default Learn