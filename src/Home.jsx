import { useState } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sample from "./Sample";
import Learn from "./Learn";
import Banner from "./Banner";
import Wallet from "./Wallet";


const Home = () => {
  const [click, setClick] = useState(false);
  const [close, setClose] = useState(false);

  const handleConnectWallet = () => {
    setClick((prev) => !prev)
    setClose(close == false)
  }

  const handleCloseWallet = () => {
    setClose((prev) => !prev)
  }

  const background = "bg-[#b1acac] opacity-30"

  return (
    <>
    <div className={`${click && background}`}>
    <Navbar click={handleConnectWallet}/>
    <Hero />
    <Banner />
    <Sample />
    <Learn />
    <Footer />
    </ div>
   <div className={click ? "z-10" : "hidden"}>
    <Wallet close={handleCloseWallet}/>
    </div>
    </>
  ) 
}

export default Home