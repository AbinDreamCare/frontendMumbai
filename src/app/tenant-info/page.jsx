"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useTranslation} from "react-i18next";
import i18Instance from "@/customHooks/i18Instance";
import axios from "@/customHooks/axiosInstance";
import { useRouter } from "next/navigation";
i18Instance()

// const options = [
//   {
//     name: 'Property Owners Details',
//     fields: [
//       [
//         { label: 'Select Station', type: 'dropdown',value:formData.policeStation, name: 'policeStation', options: ['APMC', 'CBD Belapur', 'Kalamboli', 'Kamothe', 'Khandeshwar', 'Kharghar', 'Kopar Khairane', 'Mora Sagari', 'Nerul', 'Nhava Sheva', 'NRI', 'Panvel', 'Panvel Taluka', 'Rabale', 'Rabale MIDC', 'Sanpada', 'Taloja', 'Turbhe', 'Uran', 'Vashi'] },
//         { label: 'Property Owners Photo', type: 'file', name: 'propertyOwnerImage' },
//       ],
//       [
//         { label: 'Full Name', type: 'text', name: 'fullName' },
//       ],
//       [
//         { label: 'Mobile Number', type: 'number', name: 'mobile' },
//         { label: 'Email ID', type: 'email', name: 'email' },
//       ],
//       [
//         { label: 'Address', type: 'text', name: 'address' },
//         { label: 'City/District', type: 'text', name: 'city' },
//       ],
//       [
//         { label: 'State', type: 'dropdown', name: 'state', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
//         { label: 'Pincode', type: 'number', name: 'pinCode' },
//       ],
//     ],
//   },
//   {
//     name: 'Rented Property Details',
//     fields: [
//       [
//         { label: 'Address', type: 'text', name: 'rentPropertyAddress' },
//         { label: 'City/District', type: 'text', name: 'rentPropertyCity' },
//       ],
//       [
//         { label: 'State', type: 'dropdown', name: ' rentPropertyState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
//         { label: 'Pincode', type: 'number', name: ' rentPropertyPincode' },
//       ],
//       [
//         { label: 'Agreement Start Date', type: 'date', name: 'AgreementStartDate' },
//         { label: 'Agreement End Date', type: 'date', name: 'AgreementEndDate' },
//       ],
//     ],
//   },
//   {
//     name: 'Tenants Details',
//     fields: [
//       [
//         { label: 'Tenant Name', type: 'text', name: 'ten name' },
//         { label: 'Tenants Photo', type: 'file', name: 'ten file' },
//       ],
//       [
//         { label: 'Tenants Permanent Address', type: 'text', name: 'tenantName' },
//         { label: 'Tenants City/District', type: 'text', name: 'tenantPermenentAddress' },
//       ],
//       [
//         { label: 'State', type: 'dropdown', name: 'tenantPermenentState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
//         { label: 'Pincode', type: 'number', name: 'tenantPermenentPincode' },
//       ],
//       [
//         { label: 'Identity Proof of Tenant', type: 'dropdown', name: 'tenantIdType', options: ['AADHAR CARD', 'PAN Card', 'Voter ID Card', 'Ration Card', 'Driving License', 'Other Document'] },
//         { label: 'Tenant Identity Proof Number', type: 'number', name: 'tenantIdNumber' },
//       ],
//       [
//         { label: 'Co-Residents', type: 'text', name: 'tenantCoresidents' },
//         { label: '', type: 'text', name: 'ten input1' },
//         { label: '', type: 'text', name: 'ten input2' },
//       ],
//       [
//         { label: 'Upload Your Identity Proof', type: 'file', name: 'ten file', fullWidth: true },
//       ],
//     ],
//   },
//   {
//     name: 'Tenants Workplace Details',
//     fields: [
//       [
//         { label: 'Tenants Mobile Number', type: 'number', name: 'tenantWorkPlaceNumber' },
//         { label: 'Tenants Email Address', type: 'email', name: 'tenantWorkPlaceEmail' },
//       ],
//       [
//         { label: 'Tenants Occupation', type: 'text', name: 'tenantOccupation' },
//         { label: 'Address of Tenants Workplace', type: 'text', name: 'tenantWorkplaceAddress' },
//       ],
//       [
//         { label: 'Tenants City/District', type: 'text', name: 'tenantWorkplaceCity' },
//         { label: 'State', type: 'dropdown', name: 'tenantWorkplaceState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
//       ],
//       [
//         { label: 'Pincode', type: 'number', name: 'tenantWorkplacePincode' },
//       ],
//     ],
//   },
//   {
//     name: 'Persons Knowing Tenant',
//     fields: [
//       [
//         { label: 'Person 1 Name', type: 'text', name: 'tenantKnownPersonName' },
//         { label: 'Contact Number 1', type: 'number', name: 'tenantKnownPersonMobile' },
//       ],
//       [
//         { label: 'Person 2 Name', type: 'text', name: 'tenantKnownPerson2Name' },
//         { label: 'Contact Number 2', type: 'number', name: 'tenantKnownPerson2Mobile' },
//       ],
//       [
//         { label: 'Agent Name', type: 'text', name: 'AgentName' },
//         { label: 'Agent Details', type: 'text', name: 'AgentDetails' },
//       ],
//       [
//         { label: 'Enter Captcha', type: 'number', name: 'per number' },
//       ],
//       [
//         { label: 'Accept Terms', type: 'checkbox', name: 'AcceptTerms' },
//       ],
//     ],
//   },
// ];

function page  () {
  const router = useRouter()
  const [otpVerPopup, setotpVerPopup] = useState(false)

  const [otp,setOtp]=useState("")
  const [formData, setFormData] = useState({
    policeStation:"",
    propertyOwnerImage:"",
    fullName:"",
    mobile:"",
    email:"",
    address:"",
    city:"",
    state:"",
    pinCode:"",
    rentPropertyAddress:"",
    rentPropertyCity:"",
    rentPropertySate:"",
    rentPropertyPincode:"",
    AgreementStartDate:"",
    AgreementEndDate:"",
    tenantName:"",
    tenantPicture:"",
    tenantPermenentAddress:"",
    tenantPermantCity:"",
    tenantState:"",
    tenantPincode:"",
    tenantIdType:"",
    tenantIdNumber:"",
    tenantCoresidents:"",
     tenantIdProof:"",
    tenantWorkPlaceNumber:"",
    tenantWorkPlaceEmail:"",
    tenantOccupation:"",
    tenantWorkplaceAddress:"",
    tenantWorkplaceCity:"",
    tenantWorkplaceState:"",
    tenantWorkplacePincode:"",
    tenantKnownPersonName:"",
    tenantKnownPersonMobile:"",
    tenantKnownPerson2Name:"",
    tenantKnownPerson2Mobile:"",
    AgentName:"",
    AgentDetails:"",
    AcceptTerms:"",

  });
  console.log("formData",formData);
  const options = [
    {
      name: 'Property Owners Details',
      fields: [
        [
          { label: 'Select Station', type: 'dropdown',value:formData.policeStation[0], name: 'policeStation', options: ['APMC', 'CBD Belapur', 'Kalamboli', 'Kamothe', 'Khandeshwar', 'Kharghar', 'Kopar Khairane', 'Mora Sagari', 'Nerul', 'Nhava Sheva', 'NRI', 'Panvel', 'Panvel Taluka', 'Rabale', 'Rabale MIDC', 'Sanpada', 'Taloja', 'Turbhe', 'Uran', 'Vashi'] },
          { label: 'Property Owners Photo', type: 'file',value:formData.propertyOwnerImage[0], name: 'propertyOwnerImage' },
        ],
        [
          { label: 'Full Name', type: 'text',value:formData.fullName[0], name: 'fullName' },
        ],
        [
          { label: 'Mobile Number', type: 'number',value:formData.mobile[0], name: 'mobile' },
          { label: 'Email ID', type: 'email', value:formData.email[0],name: 'email' },
        ],
        [
          { label: 'Address', type: 'text',value:formData.address[0], name: 'address' },
          { label: 'City/District', type: 'text', value:formData.city[0],name: 'city' },
        ],
        [
          { label: 'State', type: 'dropdown',value:formData.state[0], name: 'state', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
          { label: 'Pincode', type: 'number',value:formData.pinCode[0], name: 'pinCode' },
        ],
      ],
    },
    {
      name: 'Rented Property Details',
      fields: [
        [
          { label: 'Address', type: 'text',value:formData.rentPropertyAddress[0], name: 'rentPropertyAddress' },
          { label: 'City/District', type: 'text',value:formData.rentPropertyCity[0], name: 'rentPropertyCity' },
        ],
        [
          { label: 'State', type: 'dropdown',value:formData.rentPropertySate[0], name: ' rentPropertyState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
          { label: 'Pincode', type: 'number',value:formData.rentPropertyPincode[0], name: ' rentPropertyPincode' },
        ],
        [
          { label: 'Agreement Start Date', type: 'date',value:formData.AgreementStartDate[0], name: 'AgreementStartDate' },
          { label: 'Agreement End Date', type: 'date',value:formData.AgreementEndDate[0], name: 'AgreementEndDate' },
        ],
      ],
    },
    {
      name: 'Tenants Details',
      fields: [
        [
          { label: 'Tenant Name', type: 'text', value:formData.tenantName[0],name: 'tenantName' },
          { label: 'Tenants Photo', type: 'file',value:formData.tenantPicture[0], name: 'tenantPicture' },
        ],
        [
          { label: 'Tenants Permanent Address', type: 'text', value:formData.tenantPermenentAddress[0],name: 'tenantPermenentAddress' },
          { label: 'Tenants City/District', type: 'text', value:formData.tenantPermantCity[0],name: 'tenantPermantCity' },
        ],
        [
          { label: 'State', type: 'dropdown',value:formData.tenantState[0], name: 'tenantState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
          { label: 'Pincode', type: 'number', value:formData.tenantPincode[0], name: 'tenantPincode' },
        ],
        [
          { label: 'Identity Proof of Tenant', type: 'dropdown', name: 'tenantIdType', options: ['AADHAR CARD', 'PAN Card', 'Voter ID Card', 'Ration Card', 'Driving License', 'Other Document'] },
          { label: 'Tenant Identity Proof Number', type: 'number', name: 'tenantIdNumber' },
        ],
        [
          { label: 'Co-Residents', type: 'text', name: 'tenantCoresidents' },
          // { label: '', type: 'text', name: 'ten input1' },
          // { label: '', type: 'text', name: 'ten input2' },
        ],
        [
          { label: 'Upload Your Identity Proof', type: 'file',value:formData.tenantIdProof[0], name: 'tenantIdProof', fullWidth: true },
        ],
      ],
    },
    {
      name: 'Tenants Workplace Details',
      fields: [
        [
          { label: 'Tenants Mobile Number', value:formData.tenantWorkPlaceNumber[0],type: 'number', name: 'tenantWorkPlaceNumber' },
          { label: 'Tenants Email Address', type: 'email', name: 'tenantWorkPlaceEmail' },
        ],
        [
          { label: 'Tenants Occupation',value:formData.tenantOccupation[0], type: 'text', name: 'tenantOccupation' },
          { label: 'Address of Tenants Workplace',value:formData.tenantWorkplaceAddress[0], type: 'text', name: 'tenantWorkplaceAddress' },
        ],
        [
          { label: 'Tenants City/District',value:formData.tenantWorkplaceCity[0], type: 'text', name: 'tenantWorkplaceCity' },
          { label: 'State', type: 'dropdown',value:formData.tenantWorkplaceState[0], name: 'tenantWorkplaceState', options: ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chattisgarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Delhi', 'Goa', 'Gujrat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Orissa', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttaranchal', 'Utttar Pradesh', 'West Bengal'] },
        ],
        [
          { label: 'Pincode', type: 'number',value:formData.tenantWorkplacePincode[0], name: 'tenantWorkplacePincode' },
        ],
      ],
    },
    {
      name: 'Persons Knowing Tenant',
      fields: [
        [
          { label: 'Person 1 Name', type: 'text',value:formData.tenantKnownPersonName[0], name: 'tenantKnownPersonName' },
          { label: 'Contact Number 1', type: 'number',value:formData.tenantKnownPersonMobile[0], name: 'tenantKnownPersonMobile' },
        ],
        [
          { label: 'Person 2 Name', type: 'text',value:formData.tenantKnownPerson2Name[0], name: 'tenantKnownPerson2Name' },
          { label: 'Contact Number 2', type: 'number',value:formData.tenantKnownPerson2Mobile[0], name: 'tenantKnownPerson2Mobile' },
        ],
        [
          { label: 'Agent Name', type: 'text',value:formData.AgentName[0], name: 'AgentName' },
          { label: 'Agent Details', type: 'text',value:formData.AgentDetails[0], name: 'AgentDetails' },
        ],
        [
          { label: 'Enter Captcha', type: 'number', name: 'per number' },
        ],
        [
          { label: 'Accept Terms', type: 'checkbox',value:formData.AcceptTerms[0], name: 'AcceptTerms' },
        ],
      ],
    },
  ];

  console.log("haiii");
  const { t } = useTranslation();
  
  const [currentOption, setCurrentOption] = useState(0);
  

  
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  console.log("formData",formData);
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
  const handleSubmit = async (e) => {
    alert("submit enter");
    //e.preventDefault();

    try {
      const { data } = await axios.post("/TenantInformation/create", formData);
      // const { data } = await signUp(user);
      console.log("/TenantInformation", data);
      //router.push('/lost-found-pdf');
      if(data){
        const id=data._id
      router.push(`/tenent-pdf?data=${id}`)

    
      
      //resetForm();
      
      }else{
        alert("Registration Failed")
      }
    } catch (error) {
      console.log(error);
    }
    //  }
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
            <div className="flex mb-4 text-[#15233E] " key={groupIndex}>
              {Array.isArray(fieldGroup) &&
                fieldGroup.map((field, fieldIndex) => (
                  <div
                    className={field.fullWidth ? 'w-full' : 'w-1/2 mr-2 '}
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
    <div className="w-full bg-[#E7E7E7]">
      <Navbar/>
        <div className="  ">
        <div className="text-5xl font-bold leading-9 text-center text-[#15233E] pt-14">
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
                
                <>
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
                  type="button"
                  onClick={async() => {
                     alert()
                 
                    if(formData.mobile!==""){
    
                      const ata={
                        mobile:formData.mobile
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
                >
                  Submit
                </button>
                
                </>
                
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
    <div className="mt-[40rem] md:mt-[10rem]">
    <Footer />
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
              // type="submit"
              className="px-4 py-2 text-sm rounded-md text-white bg-blue-500 hover:bg-blue-600"
              onClick={async()=>{
                alert()
               if(otp!=="" && otp.length ==6){
                const ata={
                  mobile:formData.mobile,
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
    </div>
  );
};

export default page;