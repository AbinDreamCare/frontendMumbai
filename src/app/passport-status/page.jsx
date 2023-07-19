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
        
        <div className="justify-center mt-10 md:flex">
            <Image src="/passport1.png" height={300} width={850} > 
            </Image>
        </div>
        <div className="text-[#15233E] mx-14">
          <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            {/* <h1 className="py-10">About Us</h1> */}
          </div>
          <div className="rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold ">
              {t('passport_2')}
              </p>
              <p className=" md:text-2xl">
                {t('passport_3')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold">
                {t('passport_4')}
              </p>
              <p className=" md:text-2xl">
              {t('passport_5')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold">
              {t('passport_6')}
              </p>
              <p className=" md:text-2xl">
              {t('passport_7')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold">{t('passport_8')}</p>
              <p className=" md:text-2xl">
              {t('passport_9')}
              </p>
            </div>
          </div>
          <div className=" rounded-xl">
            <div className="p-5 mt-8 lg:mt-10">
              <p className="text-2xl font-bold">
              {t('passport_10')}
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