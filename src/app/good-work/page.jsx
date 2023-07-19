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
        name:"Good Work done by Crime Branch Unit 2, Navi Mumbai Police",
        id:"1",
        date:"15-06-2023",
        file:"./good1.pdf",
    },
    {
        name:"Good Work done by Anti Narcotics Cell crime Branch",
        id:"2",
        date:"02-06-23",
        file:"./good2.pdf",
    },
    {
        name:"Good Work done by Crime Branch Unit 3, Navi Mumbai Police",
        id:"3",
        date:"10-05-2023",
        file:"./good3.pdf",
    },
  ]
  
  return(
      <>
      <div className="">
        <Navbar/>
          <div className="bg-[#D2D2D2] py-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
          <h1 className="pt-14">{t('good_work')}</h1>
        </div>
          <div className="flex justify-center items-center text[#15233E] md:mx-20  mx-5">
              <br/>
                <br/>
              <div className="flex justify-center mt-10 ">
                
              <table className="pt-10 bg-[#D2D2D2] ">
                <thead>
                    </thead>
        <tbody className="text-gray-800 bg-[#D2D2D2] ">
          {goodwork.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105 hover:bg-white"
            >
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {hierarchy.date}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center ">
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