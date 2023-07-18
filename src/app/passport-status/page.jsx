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
    <div className="p-10">
      <Navbar/>
      <div className="bg-[#D2D2D2] h-auto">
        <div className="text-center">
          <h1 className="font-extrabold text-[#15233E] text-4xl leading-9">
          {t('passport_1')}
          </h1>
          <h1 className="mt-10 text-3xl font-semibold leading-10 ">
            <span className="bg-[#15233E] rounded-2xl  px-5 py-2 text-white">
              {/* Officers Portfolio */}
            </span>
          </h1>
        </div>
        
        <div className="justify-center p-5 mt-10 md:flex">
            <Image src="/passport1.png" height={300} width={550} > 
            </Image>
        </div>
        <div className="text-[#15233E]">
          <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            {/* <h1 className="py-10">About Us</h1> */}
          </div>
          <div className="rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-extrabold ">
              {t('passport_2')}
              </p>
              <p className="font-semibold md:text-2xl">
                {t('passport_3')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-extrabold">
                {t('passport_4')}
              </p>
              <p className="font-semibold md:text-2xl">
              {t('passport_5')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-extrabold">
              {t('passport_6')}
              </p>
              <p className="font-semibold md:text-2xl">
              {t('passport_7')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-extrabold">{t('passport_8')}</p>
              <p className="font-semibold md:text-2xl">
              {t('passport_9')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-extrabold">
              {t('passport_10')}
              </p>
              <p className="text-2xl font-semibold">
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