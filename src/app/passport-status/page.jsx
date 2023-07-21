"use client"
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

const PassportVerification = () => {

  
  const { t } = useTranslation();
  
  return (
    <div className="w-full">
      <Navbar/>
      <div className="bg-[#D2D2D2] h-auto ">
        <div className="pt-20 text-center">
          <h1 className="mx-20 py-10 text-[24px] md:text-4xl font-extrabold md:justify-center md:flex text-[#15233E]">
          {t('passport_status')}
          </h1>
          {/* <h1 className="mt-10 text-3xl font-semibold leading-10 ">
            <span className="bg-[#15233E] rounded-2xl  px-5 py-2 text-white">
              Officers Portfolio
            </span>
          </h1> */}
        </div>
        
        <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
        <div className="text-[#15233E] md:mx-14">
          <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            {/* <h1 className="py-10">About Us</h1> */}
          </div>
          <div className="rounded-xl">
            <div className="mt-8 p-5 lg:mt-10">
              <p className="text-2xl font-bold text-center">
              {t('passport_2')}
              </p>
              <p className="md:text-xl">
                {t('passport_3')}<a href="https://aaplesarkar.mahaonline.gov.in/en" target="_blank" className="text-blue-500"> https://aaplesarkar.mahaonline.gov.in/en </a> / <a href="https://pcs.mahaonline.gov.in/Forms/Home.aspx" target="_blank" className="text-blue-500">https://pcs.mahaonline.gov.in/Forms/Home.aspx </a>{t('passport_4')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="mt-8 p-5 lg:mt-10">
              <p className="text-2xl font-bold text-center">
                {t('passport_5')}
              </p>
              <p className=" md:text-xl">
              {t('passport_6')}<a href="https://indianfrro.gov.in/eservices/" target="_blank" className="text-blue-500"> https://indianfrro.gov.in/eservices/ </a>{t('passport_7')}
              </p>
              <p className=" md:text-xl">
              {t('passport_8')}<a href="https://indianfrro.gov.in/eservices/" target="_blank" className="text-blue-500"> https://indianfrro.gov.in/sform/ </a>{t('passport_9')}
              </p>
              <p className=" md:text-xl">
              {t('passport_10')}<a href="https://indianfrro.gov.in/frro/FormC" target="_blank" className="text-blue-500"> https://indianfrro.gov.in/frro/FormC </a>{t('passport_11')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold text-center">
             {t('passport_12')}
              </p>
              <p className=" md:text-xl">
              {t('passport_13')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold text-center">{t('passport_14')}</p>
              <p className=" md:text-xl">
              {t('passport_15')}<a href="https://www.passportindia.gov.in/AppOnlineProject/welcomeLink" target="_blank" className="text-blue-500 whitespace-normal"> https://www.passportindia.gov.in </a>{t('passport_16')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-xl font-bold underline">
              {t('passport_17')}
              </p>
              <p className="text-2xl ">
                022-27572236 (EXT. NO.- 424 / 446 )
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
  );
};

export default PassportVerification;