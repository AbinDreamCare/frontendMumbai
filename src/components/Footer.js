import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineAndroid } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslation} from "react-i18next";
import { useRouter } from "next/navigation"


function Footer() {
  const router = useRouter();
  const { t } = useTranslation();
  
  const marqueeComp = [
    { image1: "/digitalIndia_img.png" },
    { image2: "/G20_img.png" },
    { image3: "/gal_img11.png" },
    { image4: "/mahadbt_img.png" },
    { image5: "/startupIndia_img.png" },
  ];
  return (
    <div className="md:-mt-28 -mt-96 ">
      <div className="mt-0">
        <div className="w-full">
        <img className="w-full "  src={'/footerBanner.png'} />
        </div>
        <div className="bg-[#DDD] bg-opacity-80">
        <Marquee>
          {marqueeComp.map((images, index) => (
            <div key={index} className="flex items-center justify-center p-0 mx-10">
              <img  className="p-2"  src={Object.values(images)[0]} />
            </div>
          ))}
        </Marquee>
        </div>
      </div>
      <div className="bg-[#15233E] w-full p-6 text-white hidden sm:block">
        <div className="w-full">
          <div className="justify-center md:flex text-[12px]">
            <div className="cursor-pointer me-4 hover:text-[#E7581A]">{t('emergency')}: 112</div>
            <div className="cursor-pointer me-4 hover:text-[#E7581A]">
              {t('traffic_helpline')} : 7738393839
            </div>
            <div className="cursor-pointer me-4 hover:text-[#E7581A]">
              {t('senior_citizen_helpline')} : 1090
            </div>
            <div className="cursor-pointer me-4 hover:text-[#E7581A]">{t('costal_helpline')} : 1093</div>
            <div className="cursor-pointer hover:text-[#E7581A]">{t('women_helpline')} : 103</div>
          </div>
        </div>
        <div className="justify-start md:flex md:justify-between md:ms-16">
          <div>
            <div className="mt-6 mb-4 underline md:text-lg underline-offset-8 sm:font-semibold ">
              {t('navi_mumbai_police')}
            </div>
            <div className="justify-start md:flex md:justify-end text-[12px]">
              <div>
                <div onClick={() => (router.push('/press-releases'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('press_release')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('faqs')}</div>
                <div onClick={() => (router.push('/martyrs'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('martyrs')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('site_map')}</div>
              </div>
              <div>
                <div onClick={() => (router.push('/senior-officers'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('senior_police_officers')}
                </div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('history')}</div>
                <div onClick={() => (router.push('/police-recruitment'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('police_recruitments')}
                </div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('disclaimer')}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 mb-4 underline md:text-lg underline-offset-8 sm:font-semibold">
              {t('info_services')}
            </div>
            <div className="md:flex justify-end text-[12px] ">
              <div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('safety_tips')}</div>
                <div onClick={() => (router.push("https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('citizen_wall')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('initiative')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('licensing_unit')}</div>
              </div>
              <div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('missing_person')}</div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('unidentified_dead_bodies')}
                </div>
                <div onClick={() => (router.push('/useful-websites'))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('useful_website')}</div>
                <div onClick={() => (router.push("/emergency-contacts"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('emergency_contacts')}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-6 mb-4 md:text-lg underline underline-offset-8 sm:text-[12px] sm:font-semibold">
              {t('quick_links')}
            </div>
            <div className="flex justify-start md:justify-end text-[12px]">
              <div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('tenders')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('online_complaint')}</div>
                <div onClick={() => (router.push("/lost-and-found"))} className="me-[48px] cursor-pointer hover:text-[#E7581A]">{t('lost_found')}</div>
                <div className="me-[48px] cursor-pointer hover:text-[#E7581A]">
                  {t('right_to_info')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2">{t('follow_us')}</div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <AiOutlineInstagram />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <AiOutlineFacebook />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white hover:text-[#E7581A]">
              <FiTwitter />
            </div>
          </div>
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center sm-text-[10px]">
          <div>
            {t('copyright')} © 2023 {t('navi_mumbai_police')} | {t('developed_by')} : {t('dreamcare_developers')}
          </div>
        </div>
      </div>

      {/* ----------Mobile Screen-------------- */}
      <div className="bg-[#15233E] w-full p-6 text-white md:hidden">

        <div className="flex justify-start">
          <div className="justify-start md:flex text-[12px]">
            <div onClick={() => (router.push('/emergency-contacts'))} className="cursor-pointer">{t('emergency')}: 112</div>
            <div className="cursor-pointer">
            {t('traffic_helpline')} : 7738393839
            </div>
            <div className="cursor-pointer">
            {t('senior_citizen_helpline')} : 1090
            </div>
            <div className="cursor-pointer">{t('costal_helpline')} : 1093</div>
            <div className="cursor-pointer">{t('women_helpline')} : 103</div>
          </div>
          <div className="ms-5">
            <div className=" mb-4 underline underline-offset-8 text-[12px] sm:font-semibold">
            {t('quick_links')}
            </div>
            <div className="flex justify-start md:justify-end text-[12px]">
              <div>
                <div className="cursor-pointer">{t('tenders')}</div>
                <div className="cursor-pointer">{t('online_complaint')}</div>
                <div onClick={() => (router.push("/lost-and-found"))} className="cursor-pointer">{t('lost_found')}</div>
                <div className="cursor-pointer">
                {t('right_to_info')}
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center">
          <div>
            <div className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
            {t('navi_mumbai_police')}
            </div>
            <div className="justify-start text-[12px]">
              <div>
                <div onClick={() => (router.push('/press-releases'))} className="cursor-pointer">{t('press_release')}</div>
                <div className="me-[48px] cursor-pointer">{t('faqs')}</div>
                <div onClick={() => (router.push('/martyrs'))} className="me-[48px] cursor-pointer">{t('martyrs')}</div>
                <div className="me-[48px] cursor-pointer">{t('site_map')}</div>
              </div>
              <div>
                <div onClick={() => (router.push('/senior-officers'))} className="me-[48px] cursor-pointer">
                {t('senior_police_officers')}
                </div>
                <div className="me-[48px] cursor-pointer">{t('history')}</div>
                <div onClick={() => (router.push('/police-recruitment'))} className="me-[48px] cursor-pointer">
                {t('police_recruitments')}
                </div>
                <div className="me-[48px] cursor-pointer">{t('disclaimer')}</div>
              </div>
            </div>
          </div>

          
          <div className="ms-7">
            <div className="mt-6 mb-4 underline underline-offset-8 sm:font-semibold text-[12px]">
              {t('info_services')}
            </div>
            <div className="md:flex justify-end text-[12px] ">
              <div>
                <div className="me-[48px] cursor-pointer">{t('safety_tips')}</div>
                <div onClick={() => (router.push("https://citizen.mahapolice.gov.in/Citizen/MH/index.aspx"))} className="me-[48px] cursor-pointer">{t('citizen_wall')}</div>
                <div className="me-[48px] cursor-pointer">{t('initiative')}</div>
                <div className="me-[48px] cursor-pointer">{t('licensing_unit')}</div>
              </div>
              <div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchView.aspx'))} className="me-[48px] cursor-pointer">{t('missing_persons')}</div>
                <div onClick={() => (router.push('https://citizen.mahapolice.gov.in/Citizen/MH/SearchDeadBodyList.aspx'))} className="me-[48px] cursor-pointer">
                  {t('unidentified_dead_bodies')}
                </div>
                <div onClick={() => (router.push('/useful-websites'))} className="me-[48px] cursor-pointer">{t('useful_websites')}</div>
                <div onClick={() => (router.push('/emergency-contacts'))} className="me-[48px] cursor-pointer">{t('emergency_contacts')}</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className="mx-16 mt-6 md:flex md:justify-between">
          <div className="flex ">
            <div className="me-2">{t('foloow_us')}</div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineInstagram />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <AiOutlineFacebook />
            </div>
            <div className="rounded-full p-1 mx-1 border-[1px] border-white">
              <FiTwitter />
            </div>
          </div>
        </div>
        <div className="mx-16 my-2">
          <hr />
        </div>
        <div className="w-full text-sm text-center sm-text-[10px]">
          <div>
          {t('copyright')} © 2023 {t('navi_mumbai_police')} | {t('developed_by')} : {t('dreamcare_developers')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
