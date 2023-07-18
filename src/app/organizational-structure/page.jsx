// "use client"
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import { Tree, TreeNode } from "react-organizational-chart";
// import styled from "styled-components";
// import { useTranslation} from "react-i18next";
// import i18Instance from "@/customHooks/i18Instance";
// i18Instance()

// function Page () {

//   const { t } = useTranslation();

//   const StyledNode = styled.div`
//     padding: 5px;
//     border-radius: 8px;
//     display: inline-block;
//     border: 1px solid;
//     cursor: pointer;
//     &:hover {
//       background-color: #4db8ff;
//       color: white;
//     }
//   `;

//   const StyledTree = styled(Tree)`
//     @media (max-width: 768px) {
//       width: 100%;
//       font-size: 12px;
//     }
//   `;

//   const StyledTreeNode = styled(TreeNode)`
//     @media (max-width: 768px) {
//       margin-left: 0 !important;
//     }
//   `;

//   return (
//     <>
//       <div>
//         <Navbar/>
//       <div className="pt-10 mb-5">
//         <div className="text-5xl font-bold leading-9 text-center text-[#15233E]">
//           <h1 className="my-10 pt-14">{t('organizational_structure')}</h1>
//         </div>
//         <hr className="" />
//         <StyledTree
//           lineWidth={"2px"}
//           lineColor={"blue"}
//           lineBorderRadius={"10px"}
//           label={<StyledNode>Commissioner of Police Navi Mumbai</StyledNode>}
//           className="w-full"
//         >
//           <StyledTreeNode
//             label={<StyledNode>Jt. Commissioner of Police Navi Mumbai</StyledNode>}
//           >
//             <StyledTreeNode label={<StyledNode>DCP Zone 1</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>ACP Turbhe</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>Turbhe</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Sanpada</StyledNode>}>
//                     <StyledTreeNode label={<StyledNode>Nerul</StyledNode>}>
//                       <StyledTreeNode label={<StyledNode>NRI Sagari</StyledNode>}>
//                         <StyledTreeNode
//                           label={<StyledNode>CBD Belapur</StyledNode>}
//                         ></StyledTreeNode>
//                       </StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>ACP Vashi</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>Vashi</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>APMC</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Rabale</StyledNode>}>
//                     <StyledTreeNode label={<StyledNode>Rabale MIDC</StyledNode>}>
//                       <StyledTreeNode
//                         label={<StyledNode>Kopar Khairane</StyledNode>}
//                       ></StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>DCP Zone 2</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>ACP Panvel</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>Kharghar</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Kamothe</StyledNode>}>
//                     <StyledTreeNode label={<StyledNode>Kalamboli</StyledNode>}>
//                       <StyledTreeNode label={<StyledNode>Khandeshwar</StyledNode>}>
//                         <StyledTreeNode label={<StyledNode>Taloja</StyledNode>}>
//                           <StyledTreeNode label={<StyledNode>Panvel</StyledNode>}>
//                             <StyledTreeNode
//                               label={<StyledNode>Panvel Taluka</StyledNode>}
//                             ></StyledTreeNode>
//                           </StyledTreeNode>
//                         </StyledTreeNode>
//                       </StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>

//               <StyledTreeNode label={<StyledNode>ACP Port</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>Uran</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Nhava Sheva</StyledNode>}>
//                     <StyledTreeNode
//                       label={<StyledNode>Mora Sagari</StyledNode>}
//                     ></StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>

//               <StyledTreeNode label={<StyledNode>DCP Traffic</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>ACP Traffic</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Vashi</StyledNode>}>
//                     <StyledTreeNode label={<StyledNode>APMC</StyledNode>}>
//                       <StyledTreeNode label={<StyledNode>Kopar Khairane</StyledNode>}>
//                         <StyledTreeNode label={<StyledNode>Rabale</StyledNode>}>
//                           <StyledTreeNode label={<StyledNode>Mahape</StyledNode>}>
//                             <StyledTreeNode label={<StyledNode>Turbhe</StyledNode>}>
//                               <StyledTreeNode
//                                 label={<StyledNode>Seawood</StyledNode>}
//                               >
//                                 <StyledTreeNode label={<StyledNode>CBD</StyledNode>}>
//                                   <StyledTreeNode
//                                     label={<StyledNode>Kharghar</StyledNode>}
//                                   >
//                                     <StyledTreeNode
//                                       label={<StyledNode>Taloa</StyledNode>}
//                                     >
//                                       <StyledTreeNode
//                                         label={
//                                           <StyledNode>Kalamboli</StyledNode>
//                                         }
//                                       >
//                                         <StyledTreeNode
//                                           label={
//                                             <StyledNode>Panvel</StyledNode>
//                                           }
//                                         >
//                                           <StyledTreeNode
//                                             label={
//                                               <StyledNode>
//                                                 Navin Panvel
//                                               </StyledNode>
//                                             }
//                                           >
//                                             <StyledTreeNode
//                                               label={
//                                                 <StyledNode>
//                                                   Gavhan Phata
//                                                 </StyledNode>
//                                               }
//                                             >
//                                               <StyledTreeNode
//                                                 label={
//                                                   <StyledNode>Uran</StyledNode>
//                                                 }
//                                               >
//                                                 <StyledTreeNode
//                                                   label={
//                                                     <StyledNode>
//                                                       Nhavasheva
//                                                     </StyledNode>
//                                                   }
//                                                 ></StyledTreeNode>
//                                               </StyledTreeNode>
//                                             </StyledTreeNode>
//                                           </StyledTreeNode>
//                                         </StyledTreeNode>
//                                       </StyledTreeNode>
//                                     </StyledTreeNode>
//                                   </StyledTreeNode>
//                                 </StyledTreeNode>
//                               </StyledTreeNode>
//                             </StyledTreeNode>
//                           </StyledTreeNode>
//                         </StyledTreeNode>
//                       </StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>DCP Headquarter</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>ACP</StyledNode>}>
//                 <StyledTreeNode
//                   label={<StyledNode>ACP Control Room (CRO)</StyledNode>}
//                 ></StyledTreeNode>
//               </StyledTreeNode>
//               <StyledTreeNode label={<StyledNode>ACP Admin</StyledNode>}>
//                 <StyledTreeNode
//                   label={
//                     <StyledNode>
//                       RP1 Headquarter & PI Motar Transport
//                     </StyledNode>
//                   }
//                 ></StyledTreeNode>
//               </StyledTreeNode>
//               <StyledTreeNode label={<StyledNode>ACP Encroachment</StyledNode>}>
//                 <StyledTreeNode
//                   label={
//                     <StyledNode>
//                       PI Enchroachment NMMC & PI Enchroachment CIDCO
//                     </StyledNode>
//                   }
//                 ></StyledTreeNode>
//               </StyledTreeNode>
//               <StyledTreeNode label={<StyledNode>ACP Wireless</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>PI Wireless</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>Wireless Workshop</StyledNode>}>
//                     <StyledTreeNode
//                       label={<StyledNode>CCTV Command Center</StyledNode>}
//                     >
//                       <StyledTreeNode
//                         label={
//                           <StyledNode>CIDCO CCTV Command Center</StyledNode>
//                         }
//                       ></StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//               <StyledTreeNode label={<StyledNode>Administrative Officer</StyledNode>}>
//                 <StyledTreeNode
//                   label={
//                     <StyledNode>
//                       Office Suprintendent & Ministerial Staff
//                     </StyledNode>
//                   }
//                 ></StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>DCP Special</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>ACP Special</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>PI Special Branch</StyledNode>}>
//                   <StyledTreeNode label={<StyledNode>PI Security</StyledNode>}>
//                     <StyledTreeNode label={<StyledNode>BDDS</StyledNode>}>
//                       <StyledTreeNode
//                         label={<StyledNode>Costal Security</StyledNode>}
//                       >
//                         <StyledTreeNode
//                           label={<StyledNode>Passport Branch</StyledNode>}
//                         >
//                           <StyledTreeNode
//                             label={<StyledNode>RBI Security</StyledNode>}
//                           ></StyledTreeNode>
//                         </StyledTreeNode>
//                       </StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>
//           </StyledTreeNode>

//           <StyledTreeNode
//             label={
//               <StyledNode>
//                 Addl. Commissioner of Police, Crime Navi Mumbai
//               </StyledNode>
//             }
//           >
//             <StyledTreeNode label={<StyledNode>DCP Crime</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>ACP Crime</StyledNode>}>
//                 <StyledTreeNode label={<StyledNode>123 & Central Unit</StyledNode>}>
//                   <StyledTreeNode
//                     label={<StyledNode>Women Assistance Cells</StyledNode>}
//                   >
//                     <StyledTreeNode label={<StyledNode>Bharosa Cell</StyledNode>}>
//                       <StyledTreeNode label={<StyledNode>Cyber Cell</StyledNode>}>
//                         <StyledTreeNode
//                           label={<StyledNode>Anti Narcotics</StyledNode>}
//                         >
//                           <StyledTreeNode
//                             label={<StyledNode>Motar Vehicle Theft</StyledNode>}
//                           >
//                             <StyledTreeNode
//                               label={
//                                 <StyledNode>Social Service Cell</StyledNode>
//                               }
//                             ></StyledTreeNode>
//                           </StyledTreeNode>
//                         </StyledTreeNode>
//                       </StyledTreeNode>
//                     </StyledTreeNode>
//                   </StyledTreeNode>
//                 </StyledTreeNode>
//               </StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>ACP EOW</StyledNode>}>
//               <StyledTreeNode
//                 label={<StyledNode>UNIT 1 & UNIT 2</StyledNode>}
//               ></StyledTreeNode>
//             </StyledTreeNode>

//             <StyledTreeNode label={<StyledNode>ACP AHTU</StyledNode>}>
//               <StyledTreeNode label={<StyledNode>PI AHTU</StyledNode>}></StyledTreeNode>
//             </StyledTreeNode>
//           </StyledTreeNode>
//         </StyledTree>
//       </div>
//       <div className="mt-[26rem] md:mt-[0rem]">
//     <Footer />
//       </div>
//         </div>

//     </>
//   );
// };

// export default Page;

// // function page (){
// //     return(
// //         <>
// //         Organization Chart
// //         </>
// //     )
// // }

// // export default page;

import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page