"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page() {

  const { t } = useTranslation();
  
  const table = [
    {
      designation: t('h1'),
      shortForm: t('h11'),
      rank: t('h111'),
      img: "/cp.png",
      id:"1",
    },

    {
      designation: t('h2'),
      shortForm: t('h22'),
      rank: t('h222'),
      img: "/jcp.png",
      id:"2",
    },
    {
      designation: t('h3'),
      shortForm: t('h33'),
      rank: t('h333'),
      img: "/addcp.png",
      id:"3",
    },
    {
      designation: t('h4'),
      shortForm: t('h44'),
      rank: t('h444'),
      img: "/dcp1.png",
      id:"4",
    },
    {
      designation: t('h5'),
      shortForm: t('h55'),
      rank: t('h555'),
      img: "/dcp2.png",
      id:"5",
    },
    {
      designation: t('h6'),
      shortForm: t('h66'),
      rank: t('h666'),
      img: "/dcp3.png",
      id:"6",
    },
    {
      designation: t('h7'),
      shortForm: t('h77'),
      rank: t('h777'),
      img: "/dcp3.png",
      id:"7",
    },
    {
      designation: t('h8'),
      shortForm: t('h88'),
      rank: t('h888'),
      img: "/acp.png",
      id:"16",
    },
    {
      designation: t('h9'),
      shortForm: t('h99'),
      rank: t('h999'),
      img: "/srPi.png",
      id:"8",
    },
    {
      designation: t('h_1'),
      shortForm: t('h_11'),
      rank: t('h_111'),
      img: "/api.png",
      id:"9",
    },
    {
      designation: t('h_2'),
      shortForm: t('h_22'),
      rank: t('h_222'),
      img: "/psi.png",
      id:"10",
    },
    {
      designation: t('h_3'),
      shortForm: t('h_33'),
      rank: t('h_333'),
      img: "/asi.png",
      id:"11",
    },
    {
      designation: t('h_4'),
      shortForm: t('h_44'),
      rank: t('h_444'),
      img: "/headconst.png",
      id:"12",
    },
    {
      designation: t('h_5'),
      shortForm: t('h_55'),
      rank: t('h_555'),
      img: "/headconst.png",
      id:"13",
    },
    {
      designation: t('h_6'),
      shortForm: t('h_66'),
      rank: t('h_666'),
      img: "/pn.png",
      id:"14",
    },
    {
      designation: t('h_7'),
      shortForm: t('h_77'),
      rank: t('h_777'),
      img: "/constable.png",
      id:"15",
    },
  ];
  return (
    <div>
      <Navbar/>
      <div className="pt-10 bg-[#D2D2D2] pb-10">
      <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="my-10 pt-14" title={t('hierarchy')}>{t('hierarchy')}</h1>
          </div>
      <div className="flex justify-center mt-10 border-[#15233E]">
      <table className="pt-10 text-[#15233E] border-[#15233E]">
        <thead className="border-[#15233E]">
          <tr className="mx-5 text-base text-center bg-[#E7E7E7] border-[#15233E]">
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-[#15233E] border-[#15233E] uppercase border"
            >
              {t('desgn')}
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-[#15233E] border-[#15233E] uppercase border"
            >
              {t('short_form')}
            </th>
            <th
              scope="col"
              className="hidden px-6 py-3 font-medium tracking-wider text-center text-[#15233E] border-[#15233E] uppercase border sm:table-cell"
            >
              {t('rank')}
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-[#15233E] border-[#15233E] uppercase border"
            >
              {t('insignia')}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((hierarchy) => (
            <tr key={hierarchy.id} className="mx-5 bg-[#E7E7E7]">
              <td title={hierarchy.designation} className="px-6 py-3 text-sm font-medium text-left text-[#15233E] border-[#15233E] align-middle border">
                {hierarchy.designation}
              </td>
              <td title={hierarchy.shortForm} className="md:px-6 py-3 text-sm font-medium text-left text-[#15233E] border-[#15233E] align-middle border">
                {hierarchy.shortForm}
              </td>
              <td title={hierarchy.rank} className="hidden px-6 py-3 text-sm font-medium text-left text-[#15233E] border-[#15233E] align-middle border md:table-cell">
                {hierarchy.rank}
              </td>
              <td className="md:px-6 py-3 text-sm font-medium text-left text-[#15233E] border-[#15233E] align-middle border">
                <Image
                  width={150}
                  height={80}
                  src={hierarchy.img}
                  alt={hierarchy.designation}
                />
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
};

export default Page;