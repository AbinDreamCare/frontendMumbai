"use client"
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React, { useState } from 'react';
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
i18Instance()

function Page() {

  const { t } = useTranslation();
  
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  const [time1, setTime1] = useState('');
  const [time2, setTime2] = useState('');
  const [time3, setTime3] = useState('');
  const [time4, setTime4] = useState('');
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar/>
    <div className="w-full bg-[#D2D2D2]  pb-14">
    <div className="text-5xl font-bold leading-9 text-center text-[#15233E] py-14">
          <h1 className="pt-14">Laudspeaker Permission</h1>
        </div>
    <form onSubmit={handleSubmit} className="w-[80%] px-10 mx-auto">
    <div className="w-1/2 my-3">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="option2">
            Police Station*
          </label>
          <select
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value="">Select Police Station</option>
            <option value="yes">APMC</option>
            <option value="no">NRI Sagari</option>
          </select>
        </div>
    <div className='py-3 font-bold text-center bg-blue-400'>
        Applicant's Details
      </div>

      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Full Name*
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
            Contact Number*
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='py-3 font-bold text-center bg-blue-400'>
        Organization Details
      </div>
      <div className="flex mb-4">
      <div className="w-1/2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="option2">
            Select*
          </label>
          <select
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value="">Select Police Station</option>
            <option value="yes">Organization</option>
            <option value="no">Association</option>
            <option value="yes">Political Party</option>
            <option value="yes">Individual</option>
            <option value="no">Housing Society</option>
          </select>
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
            Full Name of Organization*
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
          Address*
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Office Telephone Number
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
            Organization Registration Number
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="w-1/2 my-2 mr-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="file">
        Upload Organization Registration Document
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      <div className='py-3 font-bold text-center bg-blue-400'>
        Organiser's Details
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
            Contact Number
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='py-3 font-bold text-center bg-blue-400'>
        Program Details
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            Name of Program
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
            Venue of Program
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="address"
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <h1 className="font-bold">Schedule for use of laudspeaker- Morning(6AM - 1PM) & Evening(5PM - 10PM)</h1>
      <div className="flex mb-4">
        
        <div className="w-1/4 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time1">
            Morning Time(From)
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="time1"
            type="time"
            value={time1}
            onChange={(e) => setTime1(e.target.value)}
          />
        </div>
        <div className="w-1/4 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time2">
            Morning Time(To)
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="time2"
            type="time"
            value={time2}
            onChange={(e) => setTime2(e.target.value)}
          />
        </div>
        <div className="w-1/4 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time3">
          Evening Time(From)
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="time3"
            type="time"
            value={time3}
            onChange={(e) => setTime3(e.target.value)}
          />
        </div>
        <div className="w-1/4 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="time4">
            Evening Time(To)
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="time4"
            type="time"
            value={time4}
            onChange={(e) => setTime4(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date1">
            From Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="date1"
            type="date"
            value={date1}
            onChange={(e) => setDate1(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="date2">
            To Date
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="date2"
            type="date"
            value={date2}
            onChange={(e) => setDate2(e.target.value)}
          />
        </div>
      </div>
      <div className="flex mb-4">
      <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
          No. of loudspeakers to be used
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="option2">
          Generator facility available *
          </label>
          <select
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>
      <div className="flex mb-4">
      <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="option2">
          Pre-requisite permission obtained * *
          </label>
          <select
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="option2"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="w-1/2 mr-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="file">
        Upload Permission Document 
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      </div>
      <div className='py-3 font-bold text-center bg-blue-400'>
      Loudspeaker Contractor Details
      </div>
      <div className="flex mb-4">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
           Full Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="contact">
            Contact Number
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="contact"
            type="text"
            placeholder="Enter your contact number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="address">
          Address
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className='flex mb-4'>
      <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
            License Name
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-1/2 mr-2">
        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="file">
        Upload Loudspeaker Contractor License Document
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
          id="file"
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>
      </div>
      <div className=''>
        <h1 className="text-center">Terms And Conditions</h1>
        <h1 className="text-left">1.The Loudspeaker should be box type and it′s size should be maximum 15 inches X 10 inches.</h1>
        <h1 className="text-left">2. Maximum capacity of the loudspeaker should be3.5 watts.</h1>
        <h1 className="text-left">3. As per, Noise pollution (regulation and control) Rules – 2000 </h1>
      </div>
      



      <button
        className="px-4 py-2 mx-5 font-bold text-white bg-blue-400 rounded hover:bg-blue-700"
        type="reset"
      >
        Reset
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-400 rounded hover:bg-blue-700"
        type="submit"
      >
        Submit
      </button>
    </form>
    </div>
    <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
    </div>
  );
};

export default Page;
