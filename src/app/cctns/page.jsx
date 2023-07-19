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
          <h1 className="pt-14">{t('cctns')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              
              <br/>
              <h1 className="text-lg leading-9">CCTNS  aims to integrate all the data and records of crime into a Core Application Software(CAS), which is presently spreading across 28 states and 9 union territories of India. The project also involves training of police personnel and setting up of citizen portal to provide services to citizens.</h1>
              <h1 className="text-lg leading-9">It will digitize data related to FIR registration, investigation and charge sheets in all police stations.</h1>
              <h1 className="text-lg leading-9">It would help in developing a national database of crime and criminals.  </h1>
              <h1 className="text-lg leading-9">The full implementation of the project with all the new components would lead to a Central citizen portal having linkages with state level citizen portals that will provide a number of citizen friendly services.</h1>
              <h1 className="text-lg leading-9">All police officers and staff are trained well for proper functioning of CCTNS CAS software.</h1>
              <h1 className="text-lg leading-9">All entries of police station are entered online /offline in CCTNS CAS  as like FIR, Missing Persons, Dead Bodies, Arrested Persons,Criminals, Festivel permissions, etc.</h1>
              <h1 className="text-lg leading-9">CCTNS course training is provided to all police officers and staff by our Expert trainers in Role Based Training (RBT) center.</h1>
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