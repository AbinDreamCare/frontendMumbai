"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

function Page () {

    const { t } = useTranslation();
    
  return (
      <>
      <Navbar/>
          <div className="bg-[#D2D2D2] pb-20">
              <div className="mx-20 py-10 text-[24px] md:text-4xl font-extrabold md:justify-center md:flex text-[#15233E]">
                  {t('traffic_branch')}
              </div>
              <div className="flex items-center justify-center my-10">
                  <img src="./trafficBrach.png" className="w-[50%] h-[50%]" />
              </div>
              <div className="text-[#15233E] md:mx-24 mx-5">
                  <h1 className="text-2xl font-extrabold">{t('traffic_branch')}</h1>
                  <h1 className="">{T('traffic_1')}</h1>
                  <h1 className="font-extrabold">{T('traffic_2')}</h1>

              </div>
              <div className="mx-5 md:mx-20">
                  <h1 className="font-extrabold text-3xl text-[#15233E] text-center my-10">Our Mission</h1>
                  <div className="items-center justify-center ">
                      <h1 className="leading-10">
                      {T('traffic_3')}
                      </h1>
                      <h1 className="leading-10">
                      {T('traffic_4')}
                      </h1>

                      <h1 className="leading-10">{T('traffic_5')}</h1>
                      <h1 className="leading-10">{T('traffic_6')}</h1>
                      <h1 className="leading-10">{T('traffic_7')}</h1>
                      <h1 className="leading-10">{T('traffic_8')}</h1>
                  </div>
              </div>
          </div>
          <Footer/>
      </>
  )
};

export default Page;

// function page (){
//     return(
//         <>
//         Traffic
//         </>
//     )
// }

// export default page;