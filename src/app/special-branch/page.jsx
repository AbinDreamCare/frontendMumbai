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
          <h1 className="pt-14" title={t('special_branch')}>{t('special_branch')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              
              <br/>
              <h1 className="text-lg leading-9 text-center" title={t('spl_1')}>{t('spl_1')}</h1>
              <h1 className="text-lg leading-9" title={t('spl_2')}>{t('spl_2')}</h1>
              <h1 className="text-lg leading-9" title={t('spl_3')}>{t('spl_3')}</h1>
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