"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()
function Page() {

  const { t } = useTranslation();
  
  return (
    <div>
      <Navbar/>
      <div className="bg-[#15233E] h-auto">
      <div className="text-white pb-14">
        <div className="text-5xl font-bold leading-9 text-center text-white">
          <h1 className="pt-14">{t('our_mission')}</h1>
        </div>
        <div className="px-5 mt-8 lg:mt-28 lg:px-72"> 
          <p className="text-lg">
          {t('our_mission_1')}
          <br/><br/>
          {t('our_mission_2')}
          <br/><br/>
          {t('our_mission_3')}
          </p>
        </div>
      </div>
    </div>
    <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
    
    </div>
  );
};

export default Page;