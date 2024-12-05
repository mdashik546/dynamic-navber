// "use client";
// import React, { useCallback, useState } from "react";
// import { sidebarItems } from "../data/SidebarItems";
// import Link from "next/link";

// const Sidebar = () => {
//   const [openItems, setOpenItems] = useState({}); // Use an object to track open states for each section

//   // const handleToggle = (sectionIndex, itemIndex) => {
//   //   setOpenItems((prevState) => {
//   //     const sectionKey = `${sectionIndex}-${itemIndex}`;
//   //     const newState = { ...prevState };

//   //     if (newState[sectionKey]) {
//   //       delete newState[sectionKey]; // Close if already open
//   //     } else {
//   //       newState[sectionKey] = true; // Open if not already open
//   //     }

//   //     return newState;
//   //   });
//   // };
//   const handleToggle = useCallback((sectionIndex, itemIndex) => {
//     const sectionKey = `${sectionIndex}-${itemIndex}`;
  
//     setOpenItems((prevState) => ({
//       ...prevState,
//       [sectionKey]: !prevState[sectionKey],
//     }));
//   }, [setOpenItems]);


//   return (
//     <div className="w-[250px] bg-gray-50 h-[990px] overflow-y-auto custom-scrollbar p-5 ">
//       {sidebarItems?.map((sidebar, sidebarIndex) => (
//         <div key={sidebarIndex} className="mb-2 ">
//           {sidebar?.section}
//           <div className="text-sm">
//             {sidebar?.items && (
//               <div>
//                 {sidebar?.items?.map((item, itemIndex) => {
//                const sectionKey = `${sidebarIndex}-${itemIndex}`; // Key for each item

//                   return (
//                     <div key={itemIndex}>
//                       <Link href={item?.link || ''}
//                         onClick={() => handleToggle(sidebarIndex, itemIndex)}
//                         className={`hover:bg-gray-200 ${  openItems[sectionKey] ? "bg-blue-200" : ""} cursor-pointer py-1.5 px-2 rounded duration-200 transition-all flex items-center justify-between`}
//                       >
//                         {item.title}
//                         {item?.icon && <div>{item?.icon}</div>}
//                       </Link>

//                       {/* Toggle child visibility based on openItems state */}
//                       <div
//                         className={`transition-all ease-in-out overflow-hidden duration-700 border-l-2 ml-5 my-1 ${
//                           openItems[sectionKey] ? "opacity-100 max-h-80" : "opacity-0 max-h-0"
//                         }`}
//                       >
//                         {item?.children?.map((subItem, subItemIndex) => (
//                           <div key={subItemIndex} className="py-1">
//                             <div className="hover:bg-gray-200 cursor-pointer py-1.5 px-2 rounded duration-200 transition-all">
//                              <Link href={subItem?.link || ""}> {subItem?.title}</Link>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import React, { useCallback, useState } from "react";
import Link from "next/link";

const Sidebar = ({ sidebarItems }) => {
  console.log(sidebarItems,'data');
  const [openItems, setOpenItems] = useState({}); 

  const handleToggle = useCallback((sectionIndex, itemIndex) => {
    const sectionKey = `${sectionIndex}-${itemIndex}`;
    setOpenItems((prevState) => ({
      ...prevState,
      [sectionKey]: !prevState[sectionKey],
    }));
  }, []);

  return (
    <div className="w-[250px] bg-gray-50 h-[990px] overflow-y-auto custom-scrollbar p-5">
      {sidebarItems?.map((sidebar, sidebarIndex) => (
        <div key={sidebarIndex} className="mb-2">
          {sidebar?.section}
          <div className="text-sm">
            {sidebar?.items && (
              <div>
                {sidebar?.items?.map((item, itemIndex) => {
                  const sectionKey = `${sidebarIndex}-${itemIndex}`;

                  return (
                    <div key={itemIndex}>
                      <Link
                        href={item?.link || ""}
                        onClick={() => handleToggle(sidebarIndex, itemIndex)}
                        className={`hover:bg-gray-200 ${
                          openItems[sectionKey] ? "bg-blue-200" : ""
                        } cursor-pointer py-1.5 px-2 rounded duration-200 transition-all flex items-center justify-between`}
                      >
                        {item.title}
                        {item?.icon && <div>{item?.icon}</div>}
                      </Link>

                      {/* Toggle child visibility based on openItems state */}
                      <div
                        className={`transition-all ease-in-out overflow-hidden duration-700 border-l-2 ml-5 my-1 ${
                          openItems[sectionKey]
                            ? "opacity-100 max-h-80"
                            : "opacity-0 max-h-0"
                        }`}
                      >
                        {item?.children?.map((subItem, subItemIndex) => (
                          <div key={subItemIndex} className="py-1">
                            <div className="hover:bg-gray-200 cursor-pointer py-1.5 px-2 rounded duration-200 transition-all">
                              <Link href={subItem?.link || ""}>
                                {subItem?.title}
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
