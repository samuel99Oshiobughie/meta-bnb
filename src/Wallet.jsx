import { arrow, fox, x, w} from "./assets"

const Wallet = ({ close }) => {
  return (
    <div className="bg-[#FFFFFF] w-[600px] h-[326px] rounded-2xl absolute left-[305px] top-[340px] max-sm:left-[20px] max-xl:left-[210px]">
        <div className="border-b border-solid border-[#CFD8DC] h-[50px]">
            <h4 className="w-[182px] h-[30px] ml-[32px] mt-[24px] font-red font-bold text-2xl leading-[30px] text-[#333333]">Connect Wallet</h4>
            <img onClick={close} className="absolute left-[550px] top-[27px]" src={x} alt="x icon"/>
        </div>
        <p className="font-red font-normal text-base leading-5 text-[#333333] ml-[32px] mt-[32px]">Choose your preferred wallet:</p>
        <div className="w-[536px] h-[68px] rounded-xl bg-[#F8F9FA] border border-solid border-[#CFD8DC] ml-[32px] mt-[16px]">
            <div className="flex">
                <img className="ml-[20px] mt-[12px]" src={fox} alt="fox icon"/>
                <h4 className="font-['sora'] mt-[22.5px] ml-[16px] font-semibold text-lg leading-[23px] text-[#000000]">Metamask</h4>
            </div>
            <img className="absolute left-[530px] top-[170px]" src={arrow} alt="arrow icon"/>
        </div>
        <div className="w-[536px] h-[68px] rounded-xl bg-[#F8F9FA] border border-solid border-[#CFD8DC] ml-[32px] mt-[16px]">
            <div className="flex">
                <img className="ml-[20px] mt-[12px]" src={w} alt="w icon"/>
                <h4 className="font-['sora'] mt-[22.5px] ml-[16px] font-semibold text-lg leading-[23px] text-[#000000]">WalletConnect</h4>
            </div>
            <img className="absolute left-[530px] top-[250px]" src={arrow} alt="arrow icon"/>
        </div>
    </div>
  )
}

export default Wallet