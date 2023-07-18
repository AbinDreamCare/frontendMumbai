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
    },

    {
      designation: t('h2'),
      shortForm: t('h22'),
      rank: t('h222'),
      img: "/jcp.png",
    },
    {
      designation: t('h3'),
      shortForm: t('h33'),
      rank: t('h333'),
      img: "/addcp.png",
    },
    {
      designation: t('h4'),
      shortForm: t('h44'),
      rank: t('h444'),
      img: "/dcp1.png",
    },
    {
      designation: t('h5'),
      shortForm: t('h55'),
      rank: t('h555'),
      img: "/dcp2.png",
    },
    {
      designation: t('h6'),
      shortForm: t('h66'),
      rank: t('h666'),
      img: "/dcp3.png",
    },
    {
      designation: t('h7'),
      shortForm: t('h77'),
      rank: t('h777'),
      img: "/dcp3.png",
    },
    {
      designation: t('h8'),
      shortForm: t('h88'),
      rank: t('h888'),
      img: "/acp.png",
    },
    {
      designation: t('h9'),
      shortForm: t('h99'),
      rank: t('h999'),
      img: "/srPi.png",
    },
    {
      designation: t('h_1'),
      shortForm: t('h_11'),
      rank: t('h_111'),
      img: "/api.png",
    },
    {
      designation: t('h_2'),
      shortForm: t('h_22'),
      rank: t('h_222'),
      img: "/psi.png",
    },
    {
      designation: t('h_3'),
      shortForm: t('h_33'),
      rank: t('h_333'),
      img: "/asi.png",
    },
    {
      designation: t('h_4'),
      shortForm: t('h_44'),
      rank: t('h_444'),
      img: "/headconst.png",
    },
    {
      designation: t('h_5'),
      shortForm: t('h_55'),
      rank: t('h_555'),
      img: "/pn.png",
    },
    {
      designation: t('h_7'),
      shortForm: t('h_77'),
      rank: t('h_777'),
      img: "/constable.png",
    },
  ];
  return (
    <div>
      <Navbar/>
      <div className="pt-10 bg-[#D2D2D2] pb-10">
      <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-14 my-10">{t('hierarchy')}</h1>
          </div>
      <div className="flex justify-center mt-10">
      <table className="pt-10 text-white ">
        <thead>
          <tr className="mx-5 text-base text-center bg-[#15233E]">
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
            >
              {t('desgn')}
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
            >
              {t('short_form')}
            </th>
            <th
              scope="col"
              className="hidden px-6 py-3 font-medium tracking-wider text-center text-white uppercase border sm:table-cell"
            >
              {t('rank')}
            </th>
            <th
              scope="col"
              className="px-6 py-3 font-medium tracking-wider text-center text-white uppercase border"
            >
              {t('insignia')}
            </th>
          </tr>
        </thead>
        <tbody>
          {table.map((hierarchy) => (
            <tr key={hierarchy.designation} className="mx-5 bg-[#15233E]">
              <td className="px-6 py-3 text-sm font-medium text-left text-white align-middle border">
                {hierarchy.designation}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left text-white align-middle border">
                {hierarchy.shortForm}
              </td>
              <td className="hidden px-6 py-3 text-sm font-medium text-left text-white align-middle border md:table-cell">
                {hierarchy.rank}
              </td>
              <td className="px-6 py-3 text-sm font-medium text-left text-white align-middle border">
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