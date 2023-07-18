"use client"
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page () {

    const { t } = useTranslation();

    const optionsFeedback = [
        { value: "option1", label: t('inform_us') },
        { value: "option2", label: t('feedback') },
      ];

    const optionsPoliceStation = [
        { value: "option1", label: t('apmc') },
        { value: "option2", label: t('cbd_belapur') },
        { value: "option3", label: t('kalamboli') },
        { value: "option4", label: t('kamothe') },
        { value: "option5", label: t('khandeshwar') },
        { value: "option6", label: t('kharghar') },
        { value: "option7", label: t('kopar_khairane') },
        { value: "option8", label: t('mora_sagari') },
        { value: "option9", label: t('nerul') },
        { value: "option10", label: t('nhava_sheva') },
        { value: "option11", label: t('nri') },
        { value: "option12", label: t('panvel') },
        { value: "option13", label: t('panvel_taluka') },
        { value: "option14", label: t('rabale') },
        { value: "option15", label: t('rabale_midc') },
        { value: "option16", label: t('sanpada') },
        { value: "option17", label: t('taloja') },
        { value: "option18", label: t('turbhe') },
        { value: "option19", label: t('uran') },
        { value: "option20", label: t('washi') },
      ];
    return(
        <>
        <div className="w-full">
        <div className="bg-[#D2D2D2]">
          <Navbar/>
          <div className="text-5xl font-bold leading-9 text-center text-white">
          <h1 className="pt-14">{t('feedback')}</h1>
        </div>

            <div className="flex md:ml-10">
            <div className="items-center justify-center my-20 ml-5 md:mx-28 md:ml-0">
                <h1 className="font-bold text-black">{t('disclaimer')}</h1>
                <h1 className="text-black">{t('inform_2')}</h1>
                <h1 className="text-black">{t('inform_3')}</h1>
            <div>

            <div className="container ml-9 md:ml-0 ">
                <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10 ">
                    <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  {t('select_category')} *
                </label>
                <br />
                <select
                  name="reportdropdownValue"
                //   onChange={handlereportType}
                  id="reportdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                >
                  <option value="">{t('select_category')}</option>
                  {optionsFeedback.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
                    </div>
                    <div>
                <label
                  htmlFor="dropdownValue"
                  className="font-bold text-gray-500"
                >
                  {t('police_station')}
                </label>
                <br />
                <select
                  name="reportdropdownValue"
                //   onChange={handlereportType}
                  id="reportdropdownValue"
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                >
                  <option value="">{t('select_police_station')}</option>
                  {optionsPoliceStation.map((option) => (
                    <option key={option.value} value={option.label}>
                      {option.label}
                    </option>
                  ))}
                </select>
                    </div>
                    <div>
                <label htmlFor="name" className="font-bold text-gray-500">
                {t('full_name')}*
                </label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                //   onChange={handleNameChange}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                </div>
                <div className="justify-center my-5 md:flex md:space-x-7 md:mx-10 ">
                    <div>
                <label htmlFor="contact" className="font-bold text-gray-500">
                {t('contact_no')}*
                </label>
                <br />
                <input
                  type="number"
                  id="contact"
                  name="contact"
                //   onChange={handlenumber}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                    <div>
                <label htmlFor="email" className="font-bold text-gray-500">
                {t('email')} *
                </label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                //   onChange={handleemail}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
                    </div>
                    <div className="justify-center md:flex md:space-x-7 md:mx-10">
              <div>
                <label htmlFor="address" className="font-bold text-gray-500">
                  {t('subject')} *
                </label>
                <br />
                <input
                  type="text"
                  id="subject"
                  name="subject"
                //   onChange={handleaddress}
                  className="w-5/6 py-1 border border-gray-500 rounded-lg md:w-80"
                />
              </div>
                    </div>
                </div>
                
            </div>
            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[100%] w-full">
                <label htmlFor="article" className="font-bold text-gray-500">
                  {t('addrress')}*
                </label>
                <br />
                <input
                  type="text"
                  id="address"
                  name="address"
                //   onChange={handledescription}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-center mx-10 my-5">
              <div className=" justify-center md:w-[100%] w-full">
                <label htmlFor="article" className="font-bold text-gray-500">
                  {t('description')}
                </label>
                <br />
                <input
                  type="text"
                  id="article"
                  name="article"
                //   onChange={handledescription}
                  className="w-full py-1 border border-gray-500 rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-center ">
              <div className="">
                <div className="flex justify-center">
                  <img src="" alt="captcha" className="bg-white" />
                  <button
                    type="button"
                    className="ml-2 my-2 bg-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400"
                    // onClick={handleRefreshCaptcha}
                  >
                    {t('refresh')}
                  </button>
                </div>
                <div className="flex justify-center w-full mt-5">
                  <div className="w-full">
                    <input
                      type="text"
                      name="captcha"
                      placeholder="Enter the numbers above"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[200px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      // value={values.captcha}
                    //   onChange={handleCaptchaInput}
                    />
                    <div className="text-red-600 ">
                      <div className="justify-center text-center">
                      {/* <p>{errorMessage}</p> */}
                      </div>
                      
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="p-1 mx-5 font-bold text-white bg-blue-800 border border-gray-500"
                    >
                      {t('submit')}
                    </button>
                  </div>
                </div>

              </div>
            </div>
        </div>
        </div>
            </div>
            <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
        </div>
          </div>
        </>
    )
};

export default Page;