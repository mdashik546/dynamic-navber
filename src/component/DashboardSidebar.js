"use client";

import Link from "next/link";
import React, { useCallback, useState } from "react";
import { sidebarItems } from "@/component/data/SidebarItems";

const DasboardSidebar = ({ open, setOpen }) => {
  const [openItem, setOpenItem] = useState(null);
const [selectChild,setSelectChild] = useState(null)
  const handleMenuClick = (index) => {
    setOpenItem((prev) => (prev === index ? null : index));
  };
  const handleChildMenu =(child)=>{
    setSelectChild(child)
  }

  return (
    <div
      className={`fixed  transition-all duration-0 ease-out ${
        open
          ? "max-w-[92px] min-w-[92px] px-6 "
          : "max-w-[250px] min-w-[250px] px-4"
      }  max-h-[calc(100vh_-_70px)] min-h-[calc(100vh_-_70px)] overflow-y-scroll scrollbar-hidden`}
    >
      {sidebarItems?.map((sidebar, sidebarIndex) => {
        return (
          <div key={sidebarIndex} className="">
            <p
              className={`text-gray-600 text-[10px]  font-medium leading-3 uppercase tracking-[0.4px]   mt-4 mb-2  ${
                open ? "text-center" : "pl-3"
              }`}
            >
              {sidebar?.section}
            </p>

            <div className="pb-4">
              {sidebar?.items && (
                <div className="flex flex-col gap-y-2">
                  {sidebar?.items?.map((item, itemIndex) => {
                    const uniqueKey = `${sidebarIndex}-${itemIndex}`;
                    return (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMenuClick(uniqueKey);
                        }}
                        key={itemIndex}
                        className="z-20"
                      >
                        <div
                          className={` ${
                            open ? "w-11 h-10" : "w-[218px]"
                          }    flex justify-between items-center  cursor-pointer  group hover:bg-blue-300  group rounded-lg py-2.5 px-3 ${
                            openItem === uniqueKey && "bg-blue-300"
                          }`}
                        >
                          <div className="flex items-center  gap-x-3    ">
                            {/* <span className=" default_icon hovered">
                              {item?.icon}
                            </span> */}
                            <span
                              className={` ${
                                open
                                  ? "invisible opacity-0 hidden"
                                  : "visible opacity-100"
                              }   transition-all ease-in-out duration-200 text-sm leading-5 font-medium    -tracking-[0.28px] ${
                                openItem === uniqueKey
                                  ? "text-blue-500"
                                  : "group-hover:text-blue-500  text-gray-600 "
                              }`}
                            >
                              {item?.title}
                            </span>
                          </div>

                          {item.children && (
                            <div
                              className={`   hovered transition-all ease-in-out duration-700  ${
                                openItem === uniqueKey && "rotate-180 "
                              }`}
                            >
                              {openItem === uniqueKey ? "t" : "t"}
                            </div>
                          )}
                        </div>

                        <div
                          className={` transition-all ease-in-out duration-500 cursor-pointer overflow-hidden   ${
                            openItem === uniqueKey
                              ? " max-h-96  visible "
                              : " max-h-0  invisible hidden "
                          } `}
                        >
                          {item?.children && (
                            <div
                            
                              className={` border-softGray bg-white flex flex-col gap-y-1 w-44 transition-all ease-in-out duration-500 ${
                                openItem ? "mt-3" : ""
                              }   ${
                                open
                                  ? "border-0 absolute submenu  rounded-xl w-[172px] left-20 p-2   "
                                  : "border-l-2 ml-[30px]  "
                              }`}
                            >
                              {item?.children?.map((subItem, subItemIndex) => {
                                const childKey =`${itemIndex}-${subItemIndex}`
                                return(
                                    <div
                                    onClick={(e) =>{ e.stopPropagation(); handleChildMenu(childKey)}}
                                      className="group relative"
                                      key={subItemIndex}
                                    >
                                      <div
                                        className={`  ${
                                            selectChild === childKey
                                            ? "sidebar  bg-red-500 "
                                            : "sidebar-submenu text-gray-600 group-hover:text-blue-100"
                                        } px-2.5 py-1    rounded-lg ${
                                          open ? "" : "ml-2.5"
                                        } z-50 `}
                                      >
                                        <span className="text-xs leading-4 font-medium    -tracking-[0.24px]">
                                          {subItem?.title}
                                        </span>
                                      </div>
                                    </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DasboardSidebar;
