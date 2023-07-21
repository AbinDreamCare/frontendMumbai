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
          <h1 className="pt-14">{t('safety_tips')}</h1>
        </div>
        <h1 className="my-5 text-2xl font-extrabold text-center">Ensuring Safety of Your Home</h1>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-[#E7E7E7] p-5 rounded-lg">
              <br/>
              <h1 className="text-lg font-bold leading-9">Ensuring Safety of Your Home</h1>
              <h1 className="text-lg leading-9">Hire qualified / experienced watchmans only.</h1>
              <h1 className="text-lg leading-9">Check the antecedents / credentials of watchmans and domestic servants before hiring them. Insist on references from their previous employers. Furnish their full particulars to your police station in the format suggested by them.</h1>
              <h1 className="text-lg leading-9">Always employ different watchmans for day and night duties</h1>
              <h1 className="text-lg leading-9">Secretaries of Societies are advised to brief all the security-men / watch-men / lift-men about various aspects of security. Some of these are:</h1>
              <h1 className="text-lg leading-9">To make an enquiry if a taxi or auto-rickshaw is seen parked inside the compound or outside the building for a long time.</h1>
              <h1 className="text-lg leading-9">To inform the police in case they find any vehicle parked inside the building (if ownership not known) for a long time.</h1>
              <h1 className="text-lg leading-9">Secretaries of societies are advised to brief all residents on the following:</h1>
              <h1 className="text-lg leading-9">Whenever they employ a new servant, the local police station should be informed. His or her photographs, fingerprints and other details should be obtained and submitted to local police station.</h1>
              <h1 className="text-lg leading-9">They should be advised to install a door with iron bars inside the flat, superior quality night latches and special eye lens on the main door. Ideally, interaction with strangers and vendors should be through the grilled door. High wattage light source with pilfer proof cover outside the main door should be installed.</h1>
              <h1 className="text-lg leading-9">They should not keep huge amounts of cash, valuable ornaments etc., in the house. They should avoid discussing money transactions and other important family matters in the presence of servants/outsiders.</h1>
              <h1 className="text-lg leading-9">They should not humiliate servants on petty matters. Nor should they penalize them for small damages.</h1>
              <h1 className="text-lg leading-9">It is important to inform the police about any suspicious happening or unclaimed object found in suspicious circumstances. Extend full cooperation to the police.</h1>
              <h1 className="text-lg leading-9">A special register should be maintained in every society and kept in the custody of the chowkidar or in the society's office. Whenever Police officers visit the area, they should get an entry in such registers.</h1>
             
          </div>

          <h1 className="my-10 text-2xl font-extrabold text-center">Precaution at Work Place</h1>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left bg-[#E7E7E7] p-5 rounded-lg">
              <br/>
              <h1 className="text-lg font-bold leading-9">Precaution at Work Place</h1>
              <h1 className="text-lg leading-9">1. Workplace precautions are those actions that are taken to reduce identified risks to an acceptable level. The most appropriate workplace precautions for any activity are decided by applying the following priorities:</h1>
              <h1 className="text-lg leading-9">If possible avoiding the risk altogether.</h1>
              <h1 className="text-lg leading-9">Where possible combating the risks at source.</h1>
              <h1 className="text-lg leading-9">Giving priority to measures that protect the whole workplace.</h1>
              <h1 className="text-lg leading-9">Wherever possible, adapting work to the individual.</h1>
              <h1 className="text-lg leading-9">Taking advantage of technological & technical progress.</h1>
              <h1 className="text-lg leading-9">Using personal protective equipment to minimising risk is considered a last resort.</h1>
              <h1 className="text-lg leading-9">2. A wide range of workplace precautions are available, some more effective than others. Typical workplace precautions include machinery guards, personal protective equipment (PPE) and safe systems of work. are able to provide guidance on appropriate workplace precautions for a range of regular work activities. In many instances, effective control of significant risks will only be achieved by implementing a proper method statement and/or a permit to work system that is appropriate to the task. Where a permit system is used, it must be followed.</h1>
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