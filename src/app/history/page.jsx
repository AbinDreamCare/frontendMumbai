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
          <h1 className="pt-14">{t('history')}</h1>
        </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left mt-10 border-2 p-5 shadow-lg">
            <h1 className="text-xl font-semibold">{t('history_1')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_2')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_3')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_4')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_5')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_6')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_7')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_8')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_9')}</h1>
             <br/>
             <h1 className="text-xl font-semibold">{t('history_10')}</h1>

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