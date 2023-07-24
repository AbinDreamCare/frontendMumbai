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
        name: t('right_9'),
        id:"1",
        pdfEng:"./rti1Eng.pdf",
        pdfMar:"./rti1Mar.pdf"
    },
    {
        name:t('right_10'),
        id:"2",
        pdfEng:"#",
        pdfMar:"./rti2Mar.pdf"
    },
    {
        name:t('right_11'),
        id:"3",
        pdfEng:"#",
        pdfMar:"./rti3Mar.pdf"
    },
    {
        name:t('right_12'),
        id:"4",
        pdfEng:"./rti4Eng.pdf",
        pdfMar:"./rti4Mar.pdf"
    },
    {
        name:t('right_13'),
        id:"5",
        pdfEng:"#",
        pdfMar:"./rti5Mar.pdf"
    },
    {
        name:t('right_14'),
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
          <h1 className="pt-14" title={t('right_to_info')}>{t('right_to_info')}</h1>
        </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5 text-left">
              <br/>
              <h1 className="text-lg leading-9" title={t('right_1')} >{t('right_1')}</h1>
              <br/>
              <br/>
              <h1 className="text-lg leading-9" title={t('right_2')}>{t('right_2')}</h1>
              <h1 className="text-lg leading-9" title={t('right_3')}>{t('right_3')}</h1>
              <h1 className="text-lg leading-9" title={t('right_4')}>{t('right_4')}</h1>
              <h1 className="text-lg leading-9" title={t('right_5')}>{t('right_5')}</h1>
                <div>
                <div className="flex justify-center w-full mt-10">
      <table className="pt-10 bg-[#D2D2D2] ">
        <thead>
          <tr className="text-base text-center text-gray-800 ">
            <th title={t('right_6')} className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
            {t('right_6')}
            </th>
            <th title={t('right_7')} className="py-3 font-medium tracking-wider text-center uppercase border md:px-6">
            {t('right_7')}
            </th>
            <th title={t('right_8')} className="py-3 font-medium tracking-wider text-center uppercase border md:px-6">
            {t('right_8')}
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
              <td className="py-3 text-sm font-medium text-left align-middle border md:px-6">
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
              <td className="py-3 text-sm font-medium text-left align-middle border md:px-6">
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