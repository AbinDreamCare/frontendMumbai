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
            <h1 className="text-xl font-semibold">*    Navi Mumbai city is the most important geographical location of the district of Thane with 144 km sea shore which earlier worked as a Zone-5 in the Thane Police Commissionerate. Independent Navi Mumbai Police Commissionerate was created as a result of the need for keeping the law and order with security of Navi Mumbai city and following matters.</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    The total area of Navi Mumbai area is 953 sq. Km. As well as the increasing urbanization, CIDCO and private organizations are growing through</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Citizens' Residence (Gharkool, Spaghetti, Vastuvihar, Gharonda, Swapnapurti etc.  Cidco Projects) Central Park and Wonderpark created by CIDCO and Navi Mumbai Municipal Corporation.</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Railway network (Harbor Line, Trans Harbour Line & Konkan Railway)</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Trade Centers (Grain Market, Spices Market, Fruits Market, Onion-Potato Market and Flower Market etc. APMC Market)</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    JNPT International Port.</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Important Vital Locations - All religious places of worship, MIDC Panvel, ONGC Uran, HPCL PLANT, IPCL Company, BPCL Company, Deepak Fertilizers Company, Airoli Power House, Bokadvira Power Project, NAD Karanja, Elephanta Caves, Creek Bridges, Government/Semi-Government Offices etc.</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Coastal-line, National / State / Express Highways.</h1>
             <br/>
             <h1 className="text-xl font-semibold">*    Office of the Commissioner of Police, Navi Mumbai was inaugurated on 19/11/1994 by Sh. A. V. Krishnan, The then Director General of Police, Maharashtra State, Mumbai </h1>
             <br/>
             <h1 className="text-xl font-semibold">*    After the formation of the Navi Mumbai Police Commissionerate, Zone-1, Vashi and     Zone-2, Panvel became operational. Out of the 20 Police Stations in operation, each of the 10 police stations was divided into areas.</h1>

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