"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const CrimeBranch = ()=> {

  const { t } = useTranslation();
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('crime_branch')}</h1>
        </div>
          <div className="flex items-center justify-center my-10  md:mx-44 mx-5">
          <img src="./trafficBrach.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <h1 className="text-xl font-extrabold">{t('crime_branch_navi_mumbai')}</h1>
              <h1 className="">{t('crime_branch_1')}</h1>
              <h1 className="">{t('crime_branch_2')}</h1>
              <h1 className="text-xl font-extrabold">{t('crime_branch_3')}</h1>
              <h1 className="leading-10">{t('crime_branch_4')}</h1>
              <h1 className="leading-10">{t('crime_branch_5')}</h1>
              <h1 className="leading-10">{t('crime_branch_6')}</h1>
              <h1 className="leading-10">{t('crime_branch_7')}</h1>
              <h1 className="leading-10">{t('crime_branch_8')}</h1>
              <h1 className="leading-10">{t('crime_branch_9')}</h1>
              <h1 className="leading-10">{t('crime_branch_10')}</h1>
              <h1 className="leading-10">{t('crime_branch_11')}</h1>
              <h1 className="leading-10">{t('crime_branch_12')}</h1>

          </div>
          </div>
          <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
      </>
  )
};

export default CrimeBranch;