"use client"
import React, { useEffect, useState } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import axios from "@/customHooks/axiosInstance";
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()


function Page() {

  const { t } = useTranslation();
  
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/admin/press-releases")
      .then((response) => {
        const data = response.data;
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching press releases:", error);
      });
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="bg-[#D2D2D2] h-screen">
      <div className="font-bold  text-5xl leading-9 text-center pt-14 text-[#15233E]">
            <h1 className="pt-14">{t('press_release')}</h1>
          </div>
      <div className="flex justify-center w-full mt-10">
      <table className="pt-10 bg-white ">
        <thead>
          <tr className="text-base text-center text-gray-800 ">
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Date
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Title
            </th>
            <th className="px-6 py-3 font-medium tracking-wider text-center uppercase border">
              Info
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-800 bg-white border-2 border-black">
          {data.map((hierarchy) => (
            <tr
              key={hierarchy.id}
              className="transition-transform duration-300 transform hover:scale-105"
            >
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {new Date(hierarchy.createdAt).toLocaleDateString()}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                {hierarchy.titleEng}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left align-middle border">
                <div className="flex justify-center text-orange-700">
                  <a
                    href={`http://3.7.252.48/uploads/${hierarchy.filename}`}
                    target="_blank"
                    download={hierarchy.filename}
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
    <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
      </div>
  );
}

export default Page;
