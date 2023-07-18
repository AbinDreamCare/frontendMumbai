"use client"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import Image from 'next/image';
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

function Page  ()  {

  const { t } = useTranslation();
  
  const citiMap = [
    { map : "/map1.png", title : "NAVI MUMBAI POLICE COMMISSIONARATE MAP" },
    { map : "/map2.png", title : "NAVI MUMBAI ZONE 1 MAP" },
    { map : "/map3.png", title : "NAVI MUMBAI ZONE 2 MAP" }
  ]
  return (
    <div>
      <Navbar/>
      <div className="bg-[#15233E] h-auto">
      <div>
      <div className="text-5xl font-bold leading-9 text-center text-white">
          <h1 className="pt-14">{t('navi_mumbai_police_map')}</h1>
        </div>
        <div className='px-4 pb-10 mt-10 md:flex md:justify-evenly'>
        {citiMap.map((mumbai) => (
        <div className='w-96 '>
          
        <div>
          <Image
            src={mumbai.map}
            width={370}
            height={538}
            className='bg-white '
          />
        </div>
        <div className='mt-5 text-xl font-bold leading-7 text-center text-white'>
          <h1 >
          {mumbai.title}
          </h1>
        </div>
        </div>
        ))}
        </div>
      </div>
    </div>
    <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
  )
}

export default Page;