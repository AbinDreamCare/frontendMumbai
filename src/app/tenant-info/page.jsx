"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";

i18Instance()

const options = [
  {
    name: 'Property Owners Details',
    fields: [
      [
        { label: 'Select Station', type: 'dropdown', name: 'Select Station Dropdown', options: ['APMC', 'CBD Belapur', 'Kalamboli', 'Kamothe', 'Khandeshwar', 'Kharghar', 'Kopar Khairane', 'Mora Sagari', 'Nerul', 'Nhava Sheva', 'NRI', 'Panvel', 'Panvel Taluka', 'Rabale', 'Rabale MIDC', 'Sanpada', 'Taloja', 'Turbhe', 'Uran', 'Vashi'] },
        { label: 'Property Owners Photo', type: 'file', name: 'Property Owners Photo' },
      ],
      [
        { label: 'Full Name', type: 'text', name: 'owner fullName' },
      ],
      [
        { label: 'Mobile Number', type: 'number', name: 'owner mobileNumber' },
        { label: 'Email ID', type: 'email', name: 'owner email' },
      ],
      [
        { label: 'Address', type: 'text', name: 'owner address' },
        { label: 'City/District', type: 'text', name: 'owner district' },
      ],
      [
        { label: 'State', type: 'dropdown', name: 'state dropdown2', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
        { label: 'Pincode', type: 'number', name: 'owner pincode' },
      ],
    ],
  },
  {
    name: 'Rented Property Details',
    fields: [
      [
        { label: 'Address', type: 'text', name: 'rent address' },
        { label: 'City/District', type: 'text', name: 'rent city' },
      ],
      [
        { label: 'State', type: 'dropdown', name: 'rent state', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
        { label: 'Pincode', type: 'number', name: 'rent pincode' },
      ],
      [
        { label: 'Agreement Start Date', type: 'date', name: 'rent date1' },
        { label: 'Agreement End Date', type: 'date', name: 'rent date2' },
      ],
    ],
  },
  {
    name: 'Tenants Details',
    fields: [
      [
        { label: 'Tenant Name', type: 'text', name: 'ten name' },
        { label: 'Tenants Photo', type: 'file', name: 'ten file' },
      ],
      [
        { label: 'Tenants Permanent Address', type: 'text', name: 'ten2 name' },
        { label: 'Tenants City/District', type: 'text', name: 'ten address' },
      ],
      [
        { label: 'State', type: 'dropdown', name: 'ten state', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
        { label: 'Pincode', type: 'number', name: 'ten pincode' },
      ],
      [
        { label: 'Identity Proof of Tenant', type: 'dropdown', name: 'ten emptyField', options: ['AADHAR CARD', 'PAN Card', 'Voter ID Card', 'Ration Card', 'Driving License', 'Other Document'] },
        { label: 'Tenant Identity Proof Number', type: 'number', name: 'ten number' },
      ],
      [
        { label: 'Co-Residents', type: 'text', name: 'ten label1' },
        { label: '', type: 'text', name: 'ten input1' },
        { label: '', type: 'text', name: 'ten input2' },
      ],
      [
        { label: 'Upload Your Identity Proof', type: 'file', name: 'ten file', fullWidth: true },
      ],
    ],
  },
  {
    name: 'Tenants Workplace Details',
    fields: [
      [
        { label: 'Tenants Mobile Number', type: 'number', name: 'tenw mobileNumber' },
        { label: 'Tenants Email Address', type: 'email', name: 'tenw emailAddress' },
      ],
      [
        { label: 'Tenants Occupation', type: 'text', name: 'tenw occupation' },
        { label: 'Address of Tenants Workplace', type: 'text', name: 'tenw address' },
      ],
      [
        { label: 'Tenants City/District', type: 'text', name: 'tenw2 address' },
        { label: 'State', type: 'dropdown', name: 'tenw state', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
      ],
      [
        { label: 'Pincode', type: 'number', name: 'tenw pincode' },
      ],
    ],
  },
  {
    name: 'Persons Knowing Tenant',
    fields: [
      [
        { label: 'Person 1 Name', type: 'text', name: 'per1 name' },
        { label: 'Contact Number 1', type: 'number', name: 'per1 address' },
      ],
      [
        { label: 'Person 2 Name', type: 'text', name: 'per2 name' },
        { label: 'Contact Number 2', type: 'number', name: 'per2 address' },
      ],
      [
        { label: 'Agent Name', type: 'text', name: 'per3 name' },
        { label: 'Agent Details', type: 'text', name: 'per3 address' },
      ],
      [
        { label: 'Enter Captcha', type: 'number', name: 'per number' },
      ],
      [
        { label: 'Accept Terms', type: 'checkbox', name: 'acceptTerms' },
      ],
    ],
  },
];

function page  () {

  const { t } = useTranslation();
  
  const [currentOption, setCurrentOption] = useState(0);
  const [formData, setFormData] = useState({});
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handlePreviousClick = () => {
    setCurrentOption((prevOption) => prevOption - 1);
  };

  const handleNextClick = () => {
    if (currentOption === options.length - 1) {
      if (termsAccepted) {
        console.log('Form submitted:', formData);
        resetForm();
      } else {
        alert('Please accept the terms and conditions before submitting the form.');
      }
    } else {
      const { fields } = options[currentOption];
      const isFormValid = fields.every((fieldGroup) => {
        return fieldGroup.every((field) => {
          const { name } = field;
          if (field.type === 'dropdown') {
            return formData[name] !== undefined;
          }
          return formData[name];
        });
      });
      if (isFormValid) {
        setCurrentOption((prevOption) => prevOption + 1);
      } else {
        alert('Please fill in all fields before proceeding to the next option.');
      }
    }
  };

  const resetForm = () => {
    setCurrentOption(0);
    setFormData({});
    setTermsAccepted(false);
  };

  const renderFields = () => {
    const { fields } = options[currentOption];
    return (
      <>
      
        {Array.isArray(fields) &&
          fields.map((fieldGroup, groupIndex) => (
            <div className="flex mb-4" key={groupIndex}>
              {Array.isArray(fieldGroup) &&
                fieldGroup.map((field, fieldIndex) => (
                  <div
                    className={field.fullWidth ? 'w-full' : 'w-1/2 mr-2'}
                    key={fieldIndex}
                  >
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor={field.name}>
                      {field.label}*
                    </label>
                    {field.type === 'dropdown' ? (
                      <select
                        className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                      >
                        <option value="">Select an option</option>
                        {field.options.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : field.type === 'file' ? (
                      <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        type="file"
                        onChange={handleInputChange}
                      />
                    ) : field.type === 'checkbox' ? (
                      <div className="flex items-center">
                        <input
                          className="mr-2 leading-tight"
                          id="acceptTerms"
                          name="acceptTerms"
                          type="checkbox"
                          checked={termsAccepted}
                          onChange={() => setTermsAccepted(!termsAccepted)}
                        />
                        <label className="text-sm text-gray-700" htmlFor={field.name}>
                          I agree to the terms and conditions
                        </label>
                      </div>
                    ) : (
                      <input
                        className="w-full px-3 py-2 leading-tight text-gray-700 border border-gray-300 rounded appearance-none focus:outline-none focus:border-blue-500"
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={`Enter your ${field.label.toLowerCase()}`}
                        value={formData[field.name] || ''}
                        onChange={handleInputChange}
                      />
                    )}
                  </div>
                ))}
            </div>
          ))}
      </>
    );
  };

  return (
    <div className="w-full">
      <Navbar/>
        <div className="">
        <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
            <h1 className="pt-14">Tenant Information</h1>
          </div>
        <div className="w-[80%] px-2 lg:px-10 mx-auto py-10">
            <h1 className="text-xl font-bold">General Information</h1>
            <h1>1) Police NOC is not required for renting Flat/House</h1>
            <h1>2) Citizens can provide information about Flat/House rent to Mumbai Police in the following ways -</h1>
            <h1>A) By applying online, OR</h1>
            <h1>B) By submitting an application directly to the concerned Police Station, OR</h1>
            <h1>C) By sending the application through registered post to the concerned Police Station.</h1>
            <h1>3) This Online Service has been provided to the citizens to furnish information to the Mumbai Police about the Flat/House on rent within the limits of the Brihanmumbai Police Commissionerate only.</h1>
            <h1>4) The OTP will be sent to the Flat / House owner′s contact number.</h1>
            <h1>5) The address of the landlord and the address of the rented property should not be the same.</h1>
            <h1>6) The landlord and the tenant must ensure that the information provided here is true.</h1>
            <h1>7) Providing false information to the Police is a punishable offence. Legal action will be taken against the concerned Applicant / Landlord if any discrepancy is found in the information produced. Attaching – Barcode to directly open the Tenant Information Page of Mumbai Police Website.</h1>
        </div>
        </div>

        <div className="lg:flex justify-evenly">
      <div className="p-4 ">
        <ul>
          {options.map((option, index) => (
            <li
              key={index}
              className={`cursor-pointer ${index === currentOption ? 'text-blue-500 font-bold' : ''}`}
              onClick={() => setCurrentOption(index)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 ">
        <div className="p-4 border rounded">
          <h2 className="mb-4 text-xl font-bold">{options[currentOption].name}</h2>
          <form>
            {renderFields()}
            <div className="flex justify-between">
              {currentOption > 0 && (
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                  type="button"
                  onClick={handlePreviousClick}
                >
                  Previous
                </button>
              )}
              {currentOption === options.length - 1 ? (
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                  type="button"
                  onClick={handleNextClick}
                >
                  Submit
                </button>
              ) : (
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                  type="button"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="mt-[26rem] md:mt-[0rem]">
    <Footer />
      </div>
    </div>
  );
};

export default page;