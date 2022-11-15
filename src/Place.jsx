import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import star from "./assets/Star.png";
import { placeCards } from "./constants";

const Place = () => {
  return (
    <>
    <Navbar />
      <nav className="flex ml-[40px] max-sm:ml-[0px]">
        <Link to="/place" className="w-[98px]  max-sm:w-[55px] h-[25px] font-red font-normal text-xl  max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[134.67px] ml-[20px] max-sm:ml-[35px]">Resturant</Link>
        <Link to="/place" className="w-[78px] max-sm:w-[45px] h-[25px] font-red font-normal text-xl  max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[134.67px] ml-[38px] max-sm:ml-[15px]">Cottage</Link>
        <Link to="/place" className="w-[62px] max-sm:w-[35px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[134.67px] ml-[38px] max-sm:ml-[15px]">Castle</Link>
        <Link to="/place" className="w-[112px] max-sm:w-[62px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[135px] ml-[69px] max-sm:ml-[15px]">fantast city</Link>
        <Link to="/place" className="w-[59px] max-sm:w-[33px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[135px] ml-[38px] max-sm:ml-[15px]">beach</Link>
        <Link to="/place" className="w-[76px] max-sm:w-[43px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[135px] ml-[45px] max-sm:ml-[15px]">Carbins</Link>
        <Link to="/place" className="w-[77px] max-sm:w-[47px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[135px] ml-[42px] max-sm:ml-[15px]">Off-grid</Link>
        <Link to="/place" className="w-[53px] max-sm:w-[31px] h-[25px] font-red font-normal text-xl max-xl:text-base max-sm:text-sm text-[#434343] leading-[25px] mt-[135px] ml-[48px] max-sm:ml-[15px]">Farm</Link>
        <button className="w-[161px] max-sm:w-[110px] h-[48px] max-sm:h-[40px] max-xl:h-[40px]  max-xl:mt-[125px] box-border border-[1px] border-solid border-[#B4B4B4] rounded-lg mt-[120px] ml-[48px] max-sm:ml-[15px] max-xl:w-[100px] max-xl:mr-[35px]">
          <h4>Location</h4>
        </button>
      </nav>
      <div className="flex flex-wrap max-sm:flex-col max-sm:ml-[145px] max-xl:ml-[30px] mt-[75px] mb-[92px]">
        {placeCards.map((card, i) => (
          <div key={i} className="box-border w-[292px] h-[372px] mt-[24px] ml-[24px] border-solid border-[#D7D7D7] border-[1px] rounded-[15px]">
            <img className=" w-[260px] h-[265px] mt-[16px] ml-[16px] mr-[16px] " src={card} alt="place card"/>
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
    <Footer />
    </>
  )
}

export default Place