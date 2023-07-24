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
          <h1 className="pt-14">{t('cyber_crime')}</h1>
        </div>
          <div className="flex items-center justify-center my-10">
          <img src="./navi_head.png" className="w-[50%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <h1 className="text-xl font-extrabold text-center underline">{t('cyber_1')}</h1>
              <br/>
              <h1 className="font-bold">{t('cyber_2')}</h1>
              <h1 className="font-bold">{t('cyber_3')}</h1>
              <br/>
              <h1 className="">{t('cyber_4')}</h1>
              <h1 className="text-lg font-bold underline">{t('cyber_5')}</h1>
              <h1 className="">{t('cyber_6')}</h1>
              <h1 className="">{t('cyber_7')}</h1>
              <h1 className="">{t('cyber_8')}</h1>
              <h1 className="">{t('cyber_9')}</h1>
              <h1 className="">{t('cyber_10')}</h1>
              <h1 className="">{t('cyber_11')}</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber1.pdf">{t('cyber_12')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber2.pdf">{t('cyber_13')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber3.pdf">{t('cyber_14')}</a></h1>
              <br/>
              <h1 className="text-bold">{t('cyber_15')}</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber4.pdf">{t('cyber_16')}</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber5.pdf">{t('cyber_17')}</a></h1>
              <br/>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi1.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi2.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi3.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi4.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi5.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>
              <div className="flex items-center justify-center">
              <img src="./cyberi6.jpg" className="h-[70%] w-[60%]"/>
                </div>
              <br/>

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