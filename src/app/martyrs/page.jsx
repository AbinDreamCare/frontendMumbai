"use client"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

const Page = () => {

  const { t } = useTranslation();
  
  const officerCard = [
    // { img : "/officer.png", name:"demo 1", post:"IAS", dob:"18-18-2018"},
    // { img : "/officer.png", name:"demo 2", post:"IAS", dob:"18-18-2018"},
    // { img : "/officer.png", name:"demo 3", post:"IAS", dob:"18-18-2018"},
  ];

  return (
    <div className="bg-[#D2D2D2]">
      <Navbar/>
      <div className="text-5xl font-bold leading-9 text-center text-white">
          <h1 className="pt-14">{t('martyrs')}</h1>
        </div>
      <div className="justify-center w-full md:flex">
      <div className="items-center justify-center grid-cols-3 md:grid">
      {officerCard.map((card, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-2xl w-[362px] h-[377px] my-10 mx-5">
          <div className="flex justify-center bg-blue-950 rounded-xl h-[239px]">
            <Image src={card.img} height={253} width={301} />
          </div>
          <div className="text-center">
            <div>
              <h1 className="mt-2 text-lg font-semibold text-orange-600">{card.name}</h1>
            </div>
            <div>
              <h1 className="mt-1 text-sm font-semibold">{card.post}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="mt-1 text-sm font-semibold text-orange-600">{card.dob}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
        <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
    </div>
  );
};

export default Page;
