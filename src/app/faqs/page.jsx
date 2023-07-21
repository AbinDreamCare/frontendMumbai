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
          <h1 className="pt-14">{t('faqs')}</h1>
        </div>

        <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-[#E7E7E7] p-5 mt-5 rounded-lg">
        <br/>
              <h1 className="text-lg font-bold leading-9">1) What is dial 112?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>Dial 112 Command and Control Centre is a single point contact for the residents of State of Maharashtra in case of any emergency requiring immediate police intervention.</h1>
              <br/>
              </div>

        <h1 className="my-5 text-2xl font-extrabold text-center">FAQ's - Loudspeaker</h1>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-[#E7E7E7] p-5 rounded-lg">
          
              <br/>
              <h1 className="text-lg font-bold leading-9">1) Do I need permission for using loud speakers?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>Yes. You should obtain permission from concerned C.P/ S.P./ District Magistrate for sound amplification under rules made under sec 33 of B.P.Act,1951. Such a permission is required to be taken for private/ public functions held in private / public places.</h1>
              <br/>
              <h1 className="text-lg font-bold leading-9">2) Do I need license for public show of cinema?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>Yes. You have to obtain a temporary performance license from concerned licensing authority (C.P./D.M.).</h1>
              <br/>
              <h1 className="text-lg font-bold leading-9">3) Do I need license/ permission for dramatic/mimetic/musical performances?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>Yes. You have to obtain a temporary performance/premises license from concerned licensing authority (C.P./D.M.).</h1>
              <br/>
              <h1 className="text-lg font-bold leading-9">4) Do I need to take permission for organizing a morcha/dharna/public meeting or rally?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>Yes. You need to take permission for taking out a morcha/ dharna/ organising public meeting or rallies from concerned Commissioner of Police or District Magistrate.</h1>
              <br/>
              <h1 className="text-lg leading-9">A loud speaker or a public address system shall not be used at night (between 10.00 p.m. to 6.00 a.m.) except in closed premises for communication within, e.g. auditoria, conference rooms, conference rooms, community halls and banquet halls.</h1>
          </div>

          <h1 className="my-10 text-2xl font-extrabold text-center">FAQ's - Externmen</h1>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-[#E7E7E7] p-5 rounded-lg">
              
              <h1 className="text-lg font-bold leading-9">1) What is meant by externment?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>As per section 55 of Maharashtra Police Act, 1951, if the movement or encampment of any gang or body of persons is causing or is calculated to cause danger or alarm or reasonable suspicion that unlawful designs are entertained by such gang, or by members thereof, then such gangs/ bodies of persons can be dispersed and ordered that they remove themselves outside the area. This is process is called externment of gangs and Sub Divisional Magistrates in Districts and DCsP in Commissionerates are empowered to pass such orders. Similarly, section 56 of Maharashtra Police Act, 1951 empowers the above named authorities to extern persons engaged in or about to be engaged in offences punishable under Ch XII - XVI – XVII I.P.C. .(for details, please refer sections 55-56 of Maharashtra Police Act, 1951 )</h1>
              <br/>
              <h1 className="text-lg font-bold leading-9">2) What is preventive detention?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>When the executive officers charged with responsibility of maintaining law and order / Public order in their jurisdictions have reasons to believe that activities/ movements of a person are detrimental / prejudicial to maintaining public tranquility and smooth flow of life, such authorities (C.P./D.M.) may authorize and order such a person to be detained under the various preventive detention laws.</h1>
              <br/>
              <h1 className="text-lg font-bold leading-9">3) What are the executive powers (of CP/DM & other empowered officials) to prohibit certain acts for prevention of disorder?</h1>
              <h1 className="text-lg leading-9"><b>Ans : </b>The commissioner of Police and the District Magistrate in areas under their respective charges may issue order in writing u/s 37 (3) of Maharashtra Police Act, 1951 for prohibiting any assembly or procession whenever and for so long as it consider such prohibition necessary for preservation of the public order. Such written order can also be issued for prohibiting the carrying of arms, swords, spears, guns, knives, sticks or lathis, or any other article, which is capable of being used for causing physical violence.</h1>
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