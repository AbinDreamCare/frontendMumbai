"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import { BsFiletypePdf } from "react-icons/bs";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();
  
  const recruitmentData = [
    {
        name:"Right To Information Act (RTI)",
        id:"1",
        pdfEng:"./rti1Eng.pdf",
        pdfMar:"./rti1Mar.pdf"
    },
    {
        name:"RIGHT TO INFORMATION ACT 2005 SECTION 4 (1)(KHA) (01 to 17 POINTS) INFORMATION",
        id:"2",
        pdfEng:"#",
        pdfMar:"./rti2Mar.pdf"
    },
    {
        name:"MAHARASHTRA POLICE MANUAL, PART-II, 21(II)IN ANNEXURE-15 PRESCRIBED PERIOD FOR THE PRESERVATION OF POLICE STATION RECORDS.",
        id:"3",
        pdfEng:"#",
        pdfMar:"./rti3Mar.pdf"
    },
    {
        name:"RTI FORM",
        id:"4",
        pdfEng:"./rti4Eng.pdf",
        pdfMar:"./rti4Mar.pdf"
    },
    {
        name:"RTI GUIDELINES",
        id:"5",
        pdfEng:"#",
        pdfMar:"./rti5Mar.pdf"
    },
    {
        name:"RTI Officers Name & Address in NAVI MUMBAI POLICE COMMISSIONERATE",
        id:"6",
        pdfEng:"#",
        pdfMar:"./rti6Mar.pdf"
    },

  ]

  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('right_to_info')}</h1>
        </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <br/>
              <h1 className="text-lg leading-9">An Act to provide for setting out the practical regime of right to information for citizens to secure access to information under the control of public authorities, in order to promote transparency and accountability in the working of every public authority, the constitution of a Central Information Commission and State Information Commissions and for matters connected therewith or incidental thereto RIGHT TO INFORMATION ACT 2005 come into force.</h1>
              <br/>
              <br/>
              <h1 className="text-lg leading-9">Section 4:- Obligations of public authorities. —</h1>
              <h1 className="text-lg leading-9">(1) Every public authority shall—</h1>
              <h1 className="text-lg leading-9">(a) maintain all its records duly catalogued and indexed in a manner and the form which facilitates the right to information under this Act and ensure that all records that are appropriate to be computerised are, within a reasonable time and subject to availability of resources, computerised and connected through a network all over the country on different systems so that access to such records is facilitated.</h1>
              <h1 className="text-lg leading-9">As per abovementioned section The Navi Mumbai Police has been publishing its information as per Section 4(1)(b) and its subsections as given below:</h1>
                <div>
                <div className="flex justify-center w-full mt-10">
      <table className="pt-10 bg-[#D2D2D2] ">
        <thead>
          <tr className="text-base text-center text-gray-800 ">
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Info
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Info. In English
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Info. In Marathi
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-[#D2D2D2] ">
          {recruitmentData.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              {/* <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {new Date(hierarchy.createdAt).toLocaleDateString()}
              </td> */}
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {hierarchy.name}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center text-orange-700">
                  <a
                    href={hierarchy.pdfEng}
                    target="_blank"
                    download={hierarchy.pdfEng}
                  >
                    <BsFiletypePdf size={30} />
                  </a>
                </div>
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center text-orange-700">
                  <a
                    href={hierarchy.pdfMar}
                    target="_blank"
                    download={hierarchy.pdfMar}
                  >
                    <BsFiletypePdf size={30} />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      
    </div>
                </div>
          </div>
          </div>
          <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>

      </>
  )
};

export default page;