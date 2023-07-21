"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function CPMessage() {

  const { t } = useTranslation();

  return (
    <>
      <div className="py-5 md:py-12 bg-sky-950 h-[1300px] md:h-screen">
        <div className="justify-center w-full h-full md:flex">
          <div className="flex items-center justify-center">
            <div className="text-[24px] font-extrabold leading-9 text-white md:hidden">Meet The Chief</div>
          </div>
          <div className="flex justify-center md:w-full">
            <div className="items-center md:w-[85%] justify-center md:flex md:items-right md:justify-center">
              <div className="flex justify-center w-full md:w-4/12">


                <div className="relative w-full h-700px">
                  <div className="absolute top-0 left-0 z-10 flex justify-center w-full md:-top-80">
                    <Image src={"/commissioner.png"} height={500} width={500} className=" object-cover w-[80%] md:w-full" />
                  </div>
                  <div className="text absolute top-[350px] md:top-[15px] left-14 md:left-5 font-saira text-[#15233E] text-[45px]  leading-[60px] font-extrabold z-30 ">{t('cp_name1')}</div>
                  <div className="polygonOrange absolute top-80 md:-top-8 left-0 h-[420px] w-full z-0"></div>
                  <div className="absolute top-5 md:-top-72 left-20 md:left-10 z-0 rounded-full bg-[#ABBED1] h-[270px] w-[270px]"></div>
                  <div className="curvedPOl absolute top-48 md:-top-40 right-0 rounded-3xl bg-[#E7581A] w-[172px] h-[211px]"></div>
                  <div className="absolute top-[480px] md:top-[150px] py-4 px-8 text-lg right-0 z-30 bg-white text-black">{t('com_of_police')}</div>
                </div>







              </div>
              <div className="mx-10 mt-[650px] md:mt-0 md:w-8/12">


                <div className="hidden text-[40px] text-left font-extrabold leading-9 text-white sm:block">{t('from_cp_desk')}</div>


                <h1 className="mt-3 text-white md:text-lg">{t('namaskar_navi_mumbai')}</h1>

                <h1 className="mt-3 text-sm leading-6 text-justify text-white md:text-lg">
                  {t('cp_msg1')}
                  <br />
                  <br />
                  {t('cp_msg2')}
                </h1>

                <h1 className="mt-3 text-lg text-white md:text-2xl">
                  {t('cp_msg3')}
                  <br />
                  {t('cp_msg4')}
                </h1>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
