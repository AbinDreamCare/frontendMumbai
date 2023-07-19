"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('economic_offence_wing')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <h1 className="text-xl font-bold text-center"> Economic Offences Wing, Navi Mumbai Commissionerate</h1>
              <br/>
              <h1 className="text-lg">The purpose of the Economic Offences Wing (EOW) is to prevent, detect and investigate cases of Economic and Intellectual Property related crimes to ensure prompt justice and desired relief to the victims.</h1>
              <h1 className="text-lg">Economic Offences Wing deals with important cases concerning Multi-level frauds, Share market frauds, Offences of Forgery, Cheating by indiviluals and Non Banking Financial Companies, Offences related to Intellectual  Property Rights and such other cases.</h1>
          </div>
          </div>
          <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default page;