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
          <h1 className="pt-14">{t('control_room')}</h1>
        </div>
          <div className="flex items-center justify-center mx-5 my-10 md:mx-44">
          <img src="./navi_head.png" className="w-[100%] h-[50%]" />
          </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              
              <br/>
              <h1 className="text-lg leading-9">The Police Control Room controls the activities of all Police Stations in Navi Mumbai police Commissionerate jurisdiction. It also plays role of communicator between the field staff and controlling authorities at all levels. Control Room ensures maintenance of Law and Order. During critical situations and in the absence of Senior Officers/Unit Commander, the Control Room Officer has to take decisions and to direct the officers present on the spot, If required, to dispatch forces to assist the police officers on the spot. It also  promptly communicate important events to the Unit Commander, other senior officers and Control Room.</h1>
              <h1 className="text-lg leading-9">The  Control Room (CONTROL ROOM) of the navi mumbai poilce Commissioner has been set up and it has the following functions:</h1>
              <h1 className="text-lg leading-9"><b>100 Number :-</b> There are 7 lines with 7 call takers deputed 24x7 to receive the call from citizen in need of help.After receiving the complaints or suggestion from citizen on this line, it is reported to Control Room Officer. The control Room Officer takes further actions to provide necessary help to caller.</h1>
              <h1 className="text-lg leading-9"><b>Phone a Friend -</b> There are 2 separate telephone numbers available in the Control Room. A System established to collect the feedback from the complaint. It aims to measure the satisfaction of the complaint regarding resolution of his grievance by the field staff.</h1>
              <h1 className="text-lg leading-9"><b>Helpline for Senior Citizens and Women : </b>There are two help line Numbers  provided for Women and  Senior Citizens. manned by staff for 24x7 .The Complaints of senior citizen/ women is attended on priority and immediate  help is provided as per the need</h1>
              <h1 className="text-lg leading-9">These numbers are :</h1>
              <h1 className="text-lg leading-9">1) Helpline No. for Senior Citizens- 1800-200-2122</h1>
              <h1 className="text-lg leading-9">2) Helpline No. for women- 103</h1>
              <h1 className="text-lg leading-9">3) Control Room WhatsApp No. - 8424820686 / 8424820665</h1>

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