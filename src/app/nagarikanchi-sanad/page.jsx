"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { BsFiletypePdf } from "react-icons/bs";
i18Instance()

const page = ()=> {

  const { t } = useTranslation();

  const sanad = [
    {
        name:"Nagarikanchi Sanad",
        id:"1",
        date:"09-05-2023",
        file:"./sanad1.pdf",
    },
  ]
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14" title={t('nagarikanchi_sanad')}>{t('nagarikanchi_sanad')}</h1>
        </div>
          <div className="text[#15233E] md:mx-20 md:ml-44 mx-5">
              <br/>
                <br/>
              <div className="flex justify-center ">
                
              <table className="pt-10 bg-[#D2D2D2] ">
        <thead>
          <tr className="text-base text-center text-gray-800 ">
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Date
            </th>
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Title
            </th>
            <th className="px-6 py-3 font-bold tracking-wider text-center uppercase border">
              Info
            </th>

          </tr>
        </thead>
        <tbody className="text-gray-800 bg-[#D2D2D2] ">
          {sanad.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              <td title={hierarchy.date} className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {hierarchy.date}
              </td>
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