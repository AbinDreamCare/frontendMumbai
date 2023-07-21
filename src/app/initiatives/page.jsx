"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const CrimeBranch = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('initiative')}</h1>
        </div>
          <div className="mt-5 ">
            <div className="items-center justify-center p-3 mx-3 md:mx-20 border-2 md:flex hover:bg-white hover:shadow-lg">
                <div className="md:w-4/12 p-2">
                    <img src="./initiative1.png" className=""/>
                </div>
                <div className="md:w-8/12 pl-2">
                    <h1 className="text-lg font-bold">Senior Citizens Help Line 1090</h1>
                    <h1>One cannot escape the fact that senior citizens are at a much greater risk today than ever before. After all, a worrying number of the elderly live on their own. Abandoned by their uncaring families, they are left completely helpless in crisis and extremely vulnerable to criminal elements, health problems and depression. But now they will have a family of their own again</h1>
                    <br/>
                    <h1 className="text-lg font-bold">Help Is At Hand</h1>
                    <h1>Now all senior citizens have to do to get assistance, is call Senior Citizens Help Line on 1090.</h1>
                    <h1>Senior Citizens can call Senior Citizens Helpline:</h1>
                    <h1>1. When they urgently require the help of medical professionals.</h1>
                    <h1>2. When they face situations that involve physical violence or pose a risk to their lives.</h1>
                    <h1>3. Senior Citizens may directly call 1090 to register themselves.</h1>
                    <h1>All they have to do is call the toll free number 1090.</h1>
                </div>
            </div>
            </div>
            </div>
          <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default CrimeBranch;