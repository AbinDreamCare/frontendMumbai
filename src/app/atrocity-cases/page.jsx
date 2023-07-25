"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();

  const goodwork = [
    {
        name:"Demo 1",
        id:"1",
        date:"15-06-2023",
        file:"./good1.pdf",
    },
    {
        name:"Demo 2",
        id:"2",
        date:"02-06-23",
        file:"./good2.pdf",
    },
  ]
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-2xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14" title={t('atrocity_title')}>{t('atrocity_title')}</h1>
        </div>
          <div className="flex justify-center items-center text[#15233E] md:mx-20  mx-5">
              <br/>
                <br/>
              <div className="flex justify-center mt-10 ">
                
              <table className="pt-10 bg-[#D2D2D2] ">
                <thead>
                <tr className="text-base lg:mx-5">
            <th
              scope="col"
              
              title={t('atrocity_1')}
              className="px-1 lg:px-6 py-3  lg:font-medium text-[#15233E] uppercase tracking-wider border"
            >
              {t('atrocity_1')}
            </th>
            <th
              scope="col"
              title={t('atrocity_2')}
              className="px-1 lg:px-6 py-3  font-medium text-[#15233E] uppercase tracking-wider border"
            >
              {t('atrocity_2')}
            </th>
            </tr>
                    </thead>
        <tbody className="text-gray-800 bg-[#D2D2D2] ">
          {goodwork.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div title={hierarchy.name} className="flex justify-center ">
                  {hierarchy.name}
                </div>
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center ">
                  <a href={hierarchy.file} target="_blank"><BsFiletypePdf size={30} /></a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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