"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();

  return(
      <>
      <div className="">
        <Navbar/>
            <div className="py-10 ">
                <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
                    <h1 className="pt-14" title={t('navi_mumbai_police_station_info')}>{t('navi_mumbai_police_station_info')}</h1>
                </div>
            </div>
            <div>
      <div className="grid p-4 text-center border md:mx-40 md:grid-cols-34 ">
        <div className="col-span-6 row-start-1 p-2 bg-green-300 border">
        {t('zone_1')}
        </div>
        <div className="col-span-6 row-start-1 p-2 bg-green-300 border">
        {t('zone_2')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
         {t('vashi_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('turbhe_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('panvel_division')}
        </div>
        <div className="col-span-3 row-start-2 p-2 bg-green-500 border">
          {t('port_division')}
        </div>
        <div className="col-span-3 row-start-3 p-2 border bg-lime-300">
         {t('washi')}
        </div>
        <div className="col-span-3 row-start-3 p-2 border bg-emerald-300">
          {t('trubhe_midc')}
        </div>
        <div className="col-span-3 row-start-3 p-2 bg-teal-300 border">
          {t('kharghar')}
        </div>
        <div className="col-span-3 row-start-3 p-2 border bg-cyan-300">
          {t('uran')}
        </div>
        <div className="col-span-3 row-start-4 p-2 border bg-lime-300">
         {t('apmc')}
        </div>
        <div className="col-span-3 row-start-4 p-2 border bg-emerald-300">
          {t('sanpada')}
        </div>
        <div className="col-span-3 row-start-4 p-2 bg-teal-300 border">
          {t('taloja')}
        </div>
        <div className="col-span-3 row-start-4 p-2 border bg-cyan-300">
          {t('nhava_sheva')}
        </div>
        <div className="col-span-3 row-start-5 p-2 border bg-lime-300">
         {t('kopar_khairane')}
        </div>
        <div className="col-span-3 row-start-5 p-2 border bg-emerald-300">
          {t('nerul')}
        </div>
        <div className="col-span-3 row-start-5 p-2 bg-teal-300 border">
          {t('kalamboli')}
        </div>
        <div className="col-span-3 row-start-5 p-2 border bg-cyan-300">
          {t('mora_sagari')}
        </div>
        <div className="col-span-3 row-start-6 p-2 border bg-lime-300">
         {t('rabale')}
        </div>
        <div className="col-span-3 row-start-6 p-2 border bg-emerald-300">
          {t('nri')}
        </div>
        <div className="col-span-3 row-start-6 p-2 bg-teal-300 border">
          {t('khandeshwar')}
        </div>
        <div className="col-span-3 row-start-6 p-2 border bg-cyan-300">
          
        </div>
        <div className="col-span-3 row-start-7 p-2 border bg-lime-300">
         {t('rabale_midc')}
        </div>
        <div className="col-span-3 row-start-7 p-2 border bg-emerald-300">
          {t('cbd_belapur')}
        </div>
        <div className="col-span-3 row-start-7 p-2 bg-teal-300 border">
          {t('kamothe')}
        </div>
        <div className="col-span-3 row-start-7 p-2 border bg-cyan-300">
          
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-lime-300">
         
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-emerald-300">
          
        </div>
        <div className="col-span-3 p-2 bg-teal-300 border row-start-8">
          {t('panvel')}
        </div>
        <div className="col-span-3 p-2 border row-start-8 bg-cyan-300">
          
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-lime-300">
         
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-emerald-300">
          
        </div>
        <div className="col-span-3 p-2 bg-teal-300 border row-start-9">
          {t('panvel_taluka')}
        </div>
        <div className="col-span-3 p-2 border row-start-9 bg-cyan-300">
          
        </div>
        
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