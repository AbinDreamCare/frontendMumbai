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
          <h1 className="pt-14" title={t('cctns')}>{t('cctns')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              
              <br/>
              <h1 className="text-lg leading-9" title={t('cctns_1')}>{t('cctns_1')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_2')}>{t('cctns_2')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_3')}>{t('cctns_3')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_4')}>{t('cctns_4')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_5')}>{t('cctns_5')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_6')}>{t('cctns_6')}</h1>
              <h1 className="text-lg leading-9" title={t('cctns_7')}>{t('cctns_7')}</h1>
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