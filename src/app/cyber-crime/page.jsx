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
          <img src="./trafficBrach.png" className="w-[50%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <h1 className="text-xl font-extrabold text-center underline">CYBER POLICE STATION, NAVI MUMBAI</h1>
              <br/>
              <h1 className="font-bold">ADD :- SAWALI BLDG., 1st FLOOR, SECTOR-5, NEAR Dr. D.Y.PATIL HOSPITAL, NERUL, NAVI MUMBAI-400706</h1>
              <h1 className="font-bold">PHONE :- 022-27578309</h1>
              <br/>
              <h1 className="">Navi Mumbai Police Commissionerate had a cyber wing earlier but considering the seriousness of day by day increase in cyber crimes Cyber Police Station has been established in Navi Mumbai Police Commissionerate on 11th May 2023. This police station deals with the investigation of Internet crimes (eg website hacking, cyber stalking, spreading obscenities, e-mail fraud, credit card crimes, software system crimes, online financial fraud, etc.) .vs. and investigates cases registered under the Information Technology (Amendment) Act, 2008, among others.</h1>
              <h1 className="text-lg font-bold underline">Role / Responsibilities of Cyber Police Station:</h1>
              <h1 className="">1. The objective of Cyber Police Station is to prevent various types of cyber crimes and properly investigate the crimes committed.</h1>
              <h1 className="">2. Providing regular training to Navi Mumbai Police personnel in cyber crime investigation system.</h1>
              <h1 className="">3. Organizing / arranging cyber crime prevention / awareness programs in schools, colleges and housing societies / associations.</h1>
              <h1 className="">4. Cyber Police Station, Navi Mumbai also provides technical support for investigations to local Police Stations, Crime Cells and officers of other branches of the police.</h1>
              <h1 className="">5. If any adverse comments or malicious comments against the State are detected through social media monitoring which may lead to law and order problems, the Cyber Police Station, Navi Mumbai, shall be notified to the Computer Emergency Response Team, India (CERT-IN) through the Nodal Officer (Additional Commissioner of Police, of Crimes, Navi Mumbai) (under Section 69 IT Act) or by obtaining the order of the concerned Hon'ble Court and sending the request. The court will block electronic transmission of such content when the website registrar / service provider does not accept the request made by email.</h1>
              <h1 className="">6. Cyber Police Station, Navi Mumbai acts as the nodal for Navi Mumbai Police in Child Pornography and Rape, Gang Rape cases.</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber1.pdf">Cyber Crime Safety Tips In English</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber2.pdf">Cyber Safety Safety Tips In Marathi</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber3.pdf">Cyber Crime Awareness Slides</a></h1>
              <br/>
              <h1 className="text-bold">Information Technology Act.</h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber4.pdf">IT ACT 2000</a></h1>
              <br/>
              <h1 className="text-lg font-bold text-blue-500"><a href="./cyber5.pdf">IT AMENDMENT ACT 2008</a></h1>
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