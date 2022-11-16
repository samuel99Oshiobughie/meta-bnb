import { Link } from "react-router-dom";
import home from "./assets/home.png";
import homeName from "./assets/home-name.png";
import { close, menu } from "./assets";

const Navbar = ({click}) => {
  return (
    <div className="flex">
        <div className="flex ml-[0px] mt-[51px]">
            <img className="w-[30px] h-[25px]" src={home} alt="home-icon"/>
            <img className="w-[40px] h-[10px] mt-[14px]" src={homeName} alt="home-name"/>
        </div>
          <div className="ml-[20px] mt-[55px]">
              <Link to="/" className="font-red font-normal text-xs ml-[0px]  text-black w-28 h-6">Home</Link>
              <Link to="/place" className="font-red ml-[5px] font-normal text-xs  text-black w-32 h-6">Place to stay</Link>
              <Link to="/" className="font-red ml-[5px] font-normal text-xs text-black w-28 h-6">NFTs</Link>
              <Link to="/" className="font-red ml-[5px] font-normal text-xs text-black w-28 h-6">Community</Link>
          </div>
          <button className="font-red font-normal mt-[35px] ml-[15px] mr-[0px] text-xs text-white w-[5rem] h-11 button" 
            onClick={click}>Connect Wallet</button>
    </div>
    // <div className="flex max-sm:w-[638px]">
    //     <div className="flex ml-[40px] max-sm:ml-[0px] max-xl:ml-[20px] mt-[46.67px] max-sm:mt-[53px]">
    //         <img className="w-[41.99px] max-sm:w-[30px] h-[36.37px] max-sm:h-[25px]" src={home} alt="home-icon"/>
    //         <img className="w-[188.1px] max-sm:w-[110px] h-[32.19px] max-sm:h-[20px] mt-[4.47px]" src={homeName} alt="home-name"/>
    //     </div>
    //       <div className="ml-[140px] max-md:ml-[0px]  max-xl:ml-[80px] mt-[58px]">
    //           <Link to="/" className="font-red font-normal text-2xl  max-sm:ml-[35px] max-xl:ml-[0px] max-sm:text-base text-black w-28 h-6">Home</Link>
    //           <Link to="/place" className="font-red ml-[40px]  max-sm:ml-[20px] font-normal text-2xl max-sm:text-base text-black w-32 h-6">Place to stay</Link>
    //           <Link to="/" className="font-red ml-[40px] max-sm:ml-[20px] font-normal text-2xl max-sm:text-base text-black w-28 h-6">NFTs</Link>
    //           <Link to="/" className="font-red ml-[40px]  max-sm:ml-[20px] font-normal text-2xl max-sm:text-base text-black w-28 h-6">Community</Link>
    //       </div>
    //       <button className="font-red font-normal mt-[43px] max-sm:mt-[45px] ml-[180px] max-sm:ml-[50px]  max-xl:ml-[50px] max-sm:mr-[0px] text-white w-[10.62rem] max-sm:w-[7.5rem] h-12 max-sm:h-11 button" 
    //         onClick={click}>Connect Wallet</button>
    // </div>
  )
}

export default Navbar

