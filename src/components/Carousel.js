"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from '@/customHooks/axiosInstance'
import { useRouter } from "next/navigation";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { FcBusinesswoman } from "react-icons/fc";
import { FcManager } from "react-icons/fc";
import { FcPhone } from "react-icons/fc";

i18Instance()

const Carousel = () => {
  const router =  useRouter()
  const { t } = useTranslation();
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const toggleDropdown = () => {
    setisDropDownOpen(!isDropDownOpen);
  };

  const [Data, setData] = useState([])


  useEffect(() => {
    getHeadlinesData();
    getPoliceStationDatas()
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const [headlinesData, setheadlinesData] = useState([])

  const getHeadlinesData = () => {
    axios.get('/admin/headlines').then((response) => {
      const { data } = response;
      setheadlinesData(data)
    })
    .catch((error) => {
      console.log(error.message);
    })
  };

  const getPoliceStationDatas = () => {
    axios.get('/admin/police-stations').then((response) => {
      const { data } = response;
      setData(data)
    })
    .catch((error) => {
      console.log(error.message);
    })
  };


  return (
    <div className="relative w-full p-0 ">


      <div className="relative md:block pb-[50%] md:pb-0 w-full" >

        <iframe className="hidden md:block rep " width="560" height="315" src="https://www.youtube-nocookie.com/embed/EoYWwSalaJ4?autoplay=1&loop=1&playlist=EoYWwSalaJ4&mute=1&controls=0&rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe className="md:hidden rep " width="560" height="315" src="https://www.youtube.com/embed/ixomwj9LP2s?autoplay=1&mute=1&loop=1&playlist=ixomwj9LP2s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

         <div className="z-10 md:bg-opacity-[68%] md:w-[7%] w-[25%] opacity- h-screen ">
          <div className="flex">
            <a href="tel:+112">
            <Image
              src="/call_img.png"
              alt="hb"
              width={60}
              height={60}
              className="absolute w-16 h-16 cursor-pointer bottom-[45%] right-[5%] md:right-16 md:top-16 hover:scale-125 hover:shadow-xl"
            />
            </a>
          </div>
          <div className="flex bg-[#15233EAD] md:h-full  justify-center ">
            <div className="z-10 flex justify-center py-6 bg-transparent">
              <ul className="z-20 mt-8 space-y-2">
                <li className="text-white border-b-4 cursor-pointer ">
                  <a href="tel:+112">
                  <div className="flex justify-center">
                    <Image
                      src="/emergency_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] mt-2 hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815] ">
                    {t('emergency')}
                  </h1>
                  </a>
                </li>
                <a href="tel:7738393839">
                <li className="text-white border-b-4 cursor-pointer">
                  
                  <div className="flex justify-center">
                    <Image
                      src="/traffic_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75 mt-2"
                      width={95}
                      height={70}
                    />
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    Traffic Helpline
                  </h1>
                </li>
                </a>

                <a href="tel:103">
                <li className="text-white border-b-4 cursor-pointer">
                <div className="flex justify-center text-white">
                    {/* <Image
                      src="/passport_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[34px] hover:brightness-75"
                      width={95}
                      height={70}
                    /> */}
                    <FcBusinesswoman size={30}/>
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    Women Helpline
                  </h1>
                </li>
                </a>

                <a href="tel:1093">
                <li className="text-white border-b-4 cursor-pointer">
                <div className="flex justify-center">
                    {/* <Image
                      src="/crime_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    /> */}
                    <FcPhone size={30}/>
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    Costal Helpline 
                  </h1>
                </li>
                </a>

                <a href="tel:1090">
                <li className="text-white border-b-4 cursor-pointer">
                <div className="flex justify-center">
                    {/* <Image
                      src="/crime_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    /> */}

                    <FcManager size={30}/>
                  </div>
                  <h1 className="w-full mb-4 text-center hover:text-[#EB1815]">
                    Senior Citizen
                  </h1>
                </li>
                </a>

                <a href="tel:8424820665">
                <li className="text-white cursor-pointer ">
                  <div className="flex justify-center">
                    <Image
                      src="/citizen_img.png"
                      alt="Emergency Help"
                      className="hover:filter w-[36px] h-[30px] hover:brightness-75"
                      width={95}
                      height={70}
                    />
                  </div>
                  
                  <h1 className="w-full mb-4 text-center min-w-fit hover:text-[#EB1815]">
                    Whatsapp Number
                  </h1>
                </li>
                </a>

                
              </ul>
            </div>
          </div>
          </div> 

        <div className="absolute top-[5%] md:top-[55%] left-[25%] md:left-[40%] w-[60%] md:w-[25%] bg-white border-[1px] border-[#E7581A] rounded-2xl py-2 px-4 z-20">
          <button onClick={toggleDropdown} className="dropdown-toggle text-[#E7581A] flex justify-between w-full">
            <span>{t('select_police_station')}</span> 
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 text-[#E7581A] transition-transform ${toggleDropdown ? "" : "rotate-180"
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                 <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
          </button>
          {isDropDownOpen && (
            <div>
              {Data.map((policeData, i) => (
            <ul key={i} className="dropdown-menu">

<li onClick={() => (router.push(`/police-station/${policeData._id}`))} className="cursor-pointer hover:text-[#E7581A]">{policeData.stationEng}</li>

              
            </ul>
            ))}
            </div>
          )}
        </div>

        <div className=" absolute bottom-[35%] md:bottom-20 left-[5%] w-[90%] flex justify-center">
          <div className=" md:w-[70%]  z-10 flex items-center justify-center w-full">
            <div className="flex w-full border-1">
              <div className="w-[172px] h-[48px] px-3 text-base bg-orange-600 rounded-l-full font-extrabold leading-7 text-center align-middle">
                <h5 className="flex items-center justify-center h-full text-white">{t('headline')}</h5>
              </div>
              <div className="flex items-center justify-center w-full text-center text-black bg-white rounded-r-full h-50">
                <marquee>
                  {headlinesData.map((headlines, index) => (
                  <a href={headlines.link} className="px-5 text-base font-medium">{headlines.titleEnglish}</a>
                  ))}
                  </marquee>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
