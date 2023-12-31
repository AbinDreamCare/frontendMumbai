"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page  () {

  const { t } = useTranslation();

  const table = [
    {
      Name_of_office : t('emergency_5'),
      telephone  : "02227561099 , 02227572209",
      fax : "--- ",
      extension : "---",
    },
    {
        Name_of_office : t('emergency_6'),
        telephone  : " 02227574477",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_7'),
        telephone  : " 02227576287",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_8'),
        telephone  : " 02227578306",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_9'),
        telephone  : "02227561129",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_10'),
        telephone  : " 02227837465",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_11'),
        telephone  : "02227490476",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_12'),
        telephone  : " 02227562288",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_13'),
        telephone  : " 02227889990",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_14'),
        telephone  : " 02227889990",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_15'),
        telephone  : " 02227571035",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_16'),
        telephone  : " 02227452532",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_17'),
        telephone  : " 02227242424",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_18'),
        telephone  : "02227576284",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_19'),
        telephone  : " 02227576286",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_20'),
        telephone  : " 02227480661",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_21'),
        telephone  : "02227572236 ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_22'),
        telephone  : "100 , 02227579316 , 02227561099 , 7738363836 ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_23'),
        telephone  : " ",
        fax : "/ImpNoNaviMumbai.pdf",
        extension : "/ImpNoNaviMumbaiMarathi.pdf",
      },
      {
        Name_of_office : t('emergency_24'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_25'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_26'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_27'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_28'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_29'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_30'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_31'),
        telephone  : "",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_32'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },
      {
        Name_of_office : t('emergency_32'),
        telephone  : " ",
        fax : "--- ",
        extension : "---",
      },

   
  ];
  return (
    <div className="">
    <Navbar />
    <div className="bg-[#D2D2D2] h-full">
    <div className="font-bold  text-5xl leading-9 text-center text-[#15233E]">
            <h1 className="py-14">{t('emergency_contacts')}</h1>
          </div>
          <div className="flex items-center justify-center p-3 ">
      <table className="text-[#15233E] justify-center items-center pt-10">
        <thead className="">
          <tr className="text-base lg:mx-5">
            <th
              scope="col"
              title={t('emergency_1')}
              className="px-1 lg:px-6 py-3  lg:font-medium text-[#15233E] uppercase tracking-wider border"
            >
              {t('emergency_1')}
            </th>
            <th
              scope="col"
              title={t('emergency_2')}
              className="px-1 lg:px-6 py-3  font-medium text-[#15233E] uppercase tracking-wider border"
            >
              {t('emergency_2')}
            </th>
            <th
              scope="col"
              title={t('emergency_3')}
              className="px-1 lg:px-6 py-3 font-medium text-[#15233E] uppercase tracking-wider border sm:table-cell"
            >
              {t('emergency_3')}
            </th>
            {/* <th
              scope="col"
              className="  px-1 lg:px-6 py-3  font-medium text-[#15233E] uppercase tracking-wider border"
            >
              {t('emergency_4')}
            </th> */}
          </tr>
        </thead>
        <tbody>
          {table.map((hierarchy, index) => (
            <tr key={index} className="bg-Main">
              <td className="px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E] align-middle border" title={hierarchy.Name_of_office}>
                {hierarchy.Name_of_office}
              </td>
              <td className="px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E]  align-middle border" title={hierarchy.telephone}>
                {hierarchy.telephone}
              </td>
              <td className="px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E]  align-middle border">
                <span className="flex justify-center text-orange-700">
                  <a href={hierarchy.fax} target="_blank" rel="noopener noreferrer" title={hierarchy.fax}>
                    <BsFiletypePdf size={30} />
                  </a>
                </span>
              </td>
              {/* <td className="px-1 lg:px-6 py-3 text-left text-sm font-medium text-[#15233E]  align-middle border">
                <span className="flex justify-center text-orange-700">
                  <a href={hierarchy.extension} target="_blank" rel="noopener noreferrer">
                    <BsFiletypePdf size={30} />
                  </a>
                </span>
              </td> */}
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
};

export default Page;