"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import { useRouter } from "next/navigation";
import axios from "@/customHooks/axiosInstance";
i18Instance();

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter()
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  const [time1, setTime1] = useState("");
  const [time2, setTime2] = useState("");
  const [time3, setTime3] = useState("");
  const [time4, setTime4] = useState("");
  const [date1, setDate1] = useState("");
  const [date2, setDate2] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [file, setFile] = useState(null);
  const [otpVerPopup, setotpVerPopup] = useState(false)
  const [lostFoundData, setlostFoundData] = useState({
    policeStation: "",
    
      name: "",
      email: "",
      mobile: "",
      address: "",
      pin: "",
   
   
      reportType: "",
      articleType: "",
      city: "",
      state: '',
      Articlepin: '',
  
    ArticleDescription: "",
  });
  const [otp,setOtp]=useState("")
  console.log("otp",otp);
  const handleChange = (e) => {
    setlostFoundData({ ...lostFoundData, [e.target.name]: e.target.value });
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setlostFoundData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  console.log("lostFoundData", lostFoundData);

  const resetForm = () => {
    setlostFoundData({
      policeStation: "",
    applicantDetails: {
      name: "",
      email: "",
      contact: "",
      address: "",
      pin: "",
    },
    ArticleDetails: {
      reportType: "",
      articleType: "",
      city: "",
      state: '',
      pin: '',
    },
    ArticleDescription: "",
    });
  };

  const handleSubmit = async (e) => {
    alert("submit enter");
    //e.preventDefault();

    try {
      const { data } = await axios.post("/LostandFound/create", lostFoundData);
      // const { data } = await signUp(user);
      console.log("lost & found data", data);
      //router.push('/lost-found-pdf');
      if(data){
        const id=data._id
      router.push(`/Lost-found-pdf?data=${id}`)
      resetForm();
      }else{
        alert("Registration Failed")
      }
    } catch (error) {
      console.log(error);
    }
    //  }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="w-full bg-[#D2D2D2] pb-10">
          <div className="text-5xl font-bold leading-9 text-center text-[#15233E] pt-14">
            <h1 className="pt-14">Lost And Found</h1>
          </div>
          <div className="text-center w-[80%] px-10 mx-auto my-10">
            This application is for providing Lost and Found Information to
            Police. Information reported under this application is not a subject
            matter of enquiry/investigation. False report to Police is a
            punishable offence. Reporting person shall be solely responsible for
            any false information. Dial 100, if there is any emergency.
            <h1 className="text-xl">
              In case of Lost Mobile Handset after registering complaint here
              please proceed to website{" "}
              <a
                href="https://www.ceir.gov.in/Home/index.jsp"
                target="_blank"
                className="text-orange-400"
              >
                here
              </a>{" "}
              for blocking the handset and all India traceability
            </h1>
          </div>

          <div  className="w-[80%] px-10 mx-auto">
            <div className="w-1/2 my-3">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="option2"
              >
                Police Station*
              </label>
              <select
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="option2"
                name="policeStation"
                value={lostFoundData?.policeStation}
                onChange={handleChange}
              >
                <option value="">Select Police Station</option>
                <option value="1">APMC</option>
                <option value="2">CBD Belapur</option>
                <option value="3">Kalamboli</option>
                <option value="4">Khandeshwar</option>
                <option value="5">Kharghar</option>
                <option value="6">Kopar Khairane</option>
                <option value="7">Mora Sagari</option>
                <option value="8">Nerul</option>
                <option value="9">Nhava Sheva</option>
                <option value="10">NRI</option>
                <option value="11">Panvel</option>
                <option value="12">Panvel Taluka</option>
                <option value="13">Rabale</option>
                <option value="14">Rabale MIDC</option>
                <option value="15">Sanpada</option>
                <option value="16">Taloja</option>
                <option value="17">Turbhe</option>
                <option value="18">Uran</option>
                <option value="19">Vashi</option>
                <option value="20">Kamothe</option>
              </select>
            </div>
            <div className="py-6 font-bold text-center my-6 bg-blue-400">
              Applicant's Details
            </div>

            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                   id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  value={lostFoundData.name}
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                
                  required
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  Email*
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="text"
                  name="email"
                  placeholder="Enter your contact number"
                  value={lostFoundData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Contact Number*
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="name"
                  type="number"
                  name="mobile"
                  placeholder="Enter your Mobile No"
                  value={lostFoundData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  Address*
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="text"
                  name="address"
                  placeholder="Enter your Address"
                  value={lostFoundData.address}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-1/2 mb-2 mr-2">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name"
              >
                Pincode*
              </label>
              <input
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="name"
                type="number"
                placeholder="Enter your PIN Code"
                name="pin"
                value={lostFoundData.pin}
                onChange={handleChange}
              />
            </div>
            <div className="py-6 my-6 font-bold text-center bg-blue-400">
              Article Details
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  Report Type*
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="reportType"
                  value={lostFoundData.reportType}
                  onChange={handleChange}
                >
                  <option value="none">Select Report Type</option>
                  <option value="Lost Item Report">Lost Item Report</option>
                  <option value="Found Item Report">Found Item Report</option>
                </select>
              </div>
              <div className="w-1/2 ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  Article Type*
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="articleType"
                  value={lostFoundData.articleType}
                  onChange={handleChange}
                >
                  <option value="none">Select Article Type</option>
                  <option value="Driving Licence">Driving Licence</option>
                  <option value="PAN Card">PAN Card</option>
                  <option value="AADHAR Card">AADHAR Card</option>
                  <option value="Voter ID Card">Voter ID Card</option>
                  <option value="Ration Card">Ration Card</option>
                  <option value="Educational Document">Educational Document</option>
                  <option value="Mobile ">Mobile </option>
                  <option value="Other Document">Other Document</option>
                </select>
              </div>
            </div>
            
            <div className="flex mb-4">
              
              <div className="w-1/2 mr-2 ">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  City/ District*
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="city"
                  value={lostFoundData.city}
                  onChange={handleChange}
                >
                  <option value="">Select City</option>
                  <option value="yNavi Mumbai">Navi Mumbai</option>
                </select>
              </div>

              <div className="w-1/2 ml-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="option2"
                >
                  State*
                </label>
                <select
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="option2"
                  name="state"
                  value={lostFoundData.state}
                  onChange={handleChange}
                >
                  <option value="">Select State</option>
                  <option value="Maharashtra">Maharashtra</option>
                </select>
              </div>
            </div>

            <div className="flex mb-4">
              
              <div className="w-1/2 mr-2">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="contact"
                >
                  Pincode*
                </label>
                <input
                  className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                  id="contact"
                  type="number"
                  name="Articlepin"
                  placeholder="Enter your contact number"
                  value={lostFoundData.Articlepin}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="address"
              >
                Article Discription*
              </label>
              <input
                className="w-full px-3 py-4 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                id="address"
                type="text"
                name="ArticleDescription"
                placeholder="Enter your address"
                value={lostFoundData?.ArticleDescription}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <h1 className="font-bold text-left">Note</h1>
              <h1 className="text-left">
                1) This is a digitally signed document and requires no
                signatureas per IT Act 2008.
              </h1>
              <h1 className="text-left">
                2) If required approach the concerned Police Station for Police
                Stamp/Signature.
              </h1>
              <h1 className="text-left">
                3) This application is for lodging report of Articles Lost /
                Found in Mumbai City only.
              </h1>
              <h1 className="text-left">
                4) Authority issuing duplicate document / article may obtain
                proof of identity.{" "}
              </h1>
            </div>
            <div className="">
              <h1 className="font-bold text-left">Disclaimer</h1>
              <h1 className="text-left">
                1) Report lodged with this application is not a subject matter
                of enquiry/investigation.
              </h1>
              <h1 className="text-left">
                2) In case loss is due to theft or any other crime, contact
                nearest police station.
              </h1>
              <h1 className="text-left">
                3) False report to police is a punishable offence as per IPC &
                IT Act.
              </h1>
            </div>

            {/* <button
              className="px-4 py-2 mx-5 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
              type="reset"
            >
              Reset
            </button> */}
            <button
          
              onClick={async() => {
                // alert()
                if(lostFoundData.mobile!==""){

                  const ata={
                    mobile:lostFoundData.mobile
                  }
                  
                  const {data}=await axios.post("/otp/sendOtp",ata)
                  console.log("data",data);
                  //const data="kkkk"
                  if(data.status=="pending"){
                    setotpVerPopup(!otpVerPopup)
                  }else{
                    alert("Failed to Send OTP")
                  }
                }else{
                  alert("Enter Mobile Number")
                }
                
                
                
              }}
            
              className="px-4 py-2 font-bold mt-3 text-white bg-blue-500 rounded hover:bg-blue-700"
             
            >
              Submit
            </button>
          </div>
        </div>
        <div className="mt-[26rem] md:mt-[10rem]">
          <Footer />
        </div>
      </div>

      {otpVerPopup && 
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-semibold mb-4">Enter OTP</h2>
       
          <input
            type="number"
            value={otp}
            name="otp"
           
            onChange={(e)=>{
            setOtp(e.target.value)
            }}
            className="w-full border border-gray-300 p-2 rounded-md mb-4"
            placeholder="Enter OTP"
          />
          <div className="flex justify-end">
            <button
              type="button"
              onClick={()=>{
                setotpVerPopup(!otpVerPopup)
              }}
              className="px-4 py-2 mr-2 text-sm rounded-md text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              // type="submit"
              className="px-4 py-2 text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={async()=>{
               if(otp!=="" && otp.length ==6){
                const ata={
                  mobile:lostFoundData.mobile,
                  otp:otp
                }
                console.log("verify",ata);
                const {data}=await axios.post("/otp/verifyOtp",ata)
                if(data.valid){
                  
                  handleSubmit()

                }else{
                  alert("OTP verification Failed")
                }
               }else{
                alert("enter a valid OTP")
               }
              }}
            >
              Verify
            </button>
          </div>
       
      </div>
    </div>
}
    </>
  );
};

export default Page;