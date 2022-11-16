import homePlane from "./assets/home-plane.png";
import namePlane from "./assets/name-plane.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import facebook from "./assets/facebook.png";
import { footerLinks } from "./constants";

const Footer = () => {
  return (
    <section className="bg-[#1D1D1E] flex h-[700px] md:h-[322px]">
        <div className="flex-col absolute ml-[35px] md:ml-[113px]  md:mt-[0px] mt-[350px]">
            <div className="flex">
                <img 
                src={homePlane}
                alt=" home icon"
                className='w-[41.99px] h-[39.68px] mt-[58px]'
                />
                <img 
                src={namePlane}
                alt=" name icon"
                className='w-[188.1px] h-[35.12px] mt-[62.88px]'
                />
            </div>
            <div className="flex">
                <img 
                src={facebook}
                alt="facebook"
                className="w-[9px] h-[18px] ml-[4.5px] mt-[96.32px]"
                />
                <img 
                src={instagram}
                alt="instagram"
                className="w-[18px] h-[18px] ml-[36.5px] mt-[96px]"
                />
                <img 
                src={twitter}
                alt="twitter"
                className="w-[18px] h-[14.62px] ml-[32px] mt-[98.25px]"
                />
            </div>
            <p className="font-red font-normal text-[#F7F7F7] text-[16px, 16px] mt-[55px]">© 2022 Metabnb</p>
        </div>
        <div className="flex md:ml-[380px] mt-[63px] absolute ml-[0px]">
            {footerLinks.map((footerlink, i) => (
                <div key={i} className="flex flex-col ml-[35px] md:ml-[160px]">
                    <h4 className="font-red font-bold text-lg leading-[22px] text-[#FFFFFF]">
                        {footerlink.title}
                    </h4>
                    <ul className="list-none mt-[15px]">
                        {footerlink.links.map((link, index) =>(
                            <li
                                key={link.name}
                                className="font-red font-normal text-[#F1F3F9] text-sm leading-[35px] mt-[2px]"
                            >
                                {link.name}
                            </li> 
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </section>
    // <section className="w-[1440px] max-sm:w-[650px] h-[322px] bg-[#1D1D1E] flex max-sm:h-[700px]">
    //     <div className="flex-col ml-[113px] max-sm:absolute max-sm:ml-[150px] max-sm:mt-[350px]">
    //         <div className="flex">
    //             <img 
    //             src={homePlane}
    //             alt=" home icon"
    //             className='w-[41.99px] h-[39.68px] mt-[58px]'
    //             />
    //             <img 
    //             src={namePlane}
    //             alt=" name icon"
    //             className='w-[188.1px] h-[35.12px] mt-[62.88px]'
    //             />
    //         </div>
    //         <div className="flex">
    //             <img 
    //             src={facebook}
    //             alt="facebook"
    //             className="w-[9px] h-[18px] ml-[4.5px] mt-[96.32px]"
    //             />
    //             <img 
    //             src={instagram}
    //             alt="instagram"
    //             className="w-[18px] h-[18px] ml-[36.5px] mt-[96px]"
    //             />
    //             <img 
    //             src={twitter}
    //             alt="twitter"
    //             className="w-[18px] h-[14.62px] ml-[32px] mt-[98.25px]"
    //             />
    //         </div>
    //         <p className="font-red font-normal text-[#F7F7F7] text-[16px, 16px] mt-[55px]">© 2022 Metabnb</p>
    //     </div>
    //     <div className="flex ml-[80px] mt-[63px] max-sm:absolute max-sm:ml-[0px]">
    //         {footerLinks.map((footerlink, i) => (
    //             <div key={i} className="flex flex-col ml-[160px] max-sm:w-[10px] ">
    //                 <h4 className="font-red font-bold text-lg leading-[22px] text-[#FFFFFF]">
    //                     {footerlink.title}
    //                 </h4>
    //                 <ul className="list-none mt-[15px]">
    //                     {footerlink.links.map((link, index) =>(
    //                         <li
    //                             key={link.name}
    //                             className="font-red font-normal text-[#F1F3F9] text-sm leading-[35px] mt-[2px]"
    //                         >
    //                             {link.name}
    //                         </li> 
    //                     ))}
    //                 </ul>
    //             </div>
    //         ))}
    //     </div>
    // </section>
  )
}

export default Footer