"use client"
import Navbar from '@/components/Navbar';
import { AiOutlineMessage } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import axios from '@/customHooks/axiosInstance'
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page() {

  const { t } = useTranslation();

  const [Data, setData] = useState([])
  useEffect(() => {
    axios.get('/admin/divisional-acps').then((response) => {
      const data = response.data;
      setData(data);
    });
  }, []);
  
  return (
    <div>
      <Navbar/>
      <div className="">
      <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            <h1 className="py-14">{t('divisional_acp')}</h1>
          </div>
      <div className="flex justify-center w-full">
      <div className="grid items-center justify-center w-full grid-cols-3">
      {Data.map((card, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-2xl w-[362px] my-10 mx-5">
          <div className="md:flex justify-center bg-blue-950 rounded-xl h-[239px]">
            <img src={`http://3.7.252.48/uploads/${card.filename}`} height={253} width={301} />
          </div>
          <div className="text-center">
            <div>
              <h1 className="mt-2 text-lg font-semibold text-orange-600">{card.nameEng}</h1>
            </div>
            <div>
              <h1 className="mt-1 text-sm font-semibold">{card.designationEng}</h1>
            </div>
            <div className="flex justify-center">
              <span className="flex mt-2 text-orange-700">
                <a className="mx-4" href={`mailto:${card.email}`}><AiOutlineMessage size={24}/></a>
                <a className="mx-4" href={`tel:${card.mobNo}`}><FiPhoneCall size={24}/></a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    </div>
    <div className="mt-[26rem] md:mt-[3rem]">
    <Footer />
      </div>
      </div>
  );
};

export default Page;
