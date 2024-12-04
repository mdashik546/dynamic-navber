"use client";
import React, { useState } from "react";
import { sidebarItems } from "../data/SidebarItems";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-[250px] bg-gray-50 h-[990px] overflow-y-auto custom-scrollbar p-5 ">
      {sidebarItems?.map((sidebar, sidebarIndex) => (
        <div key={sidebarIndex} className="mb-2 ">
          {sidebar?.section}
          <div className="text-sm">
            {sidebar?.items && (
              <div>
                {sidebar?.items?.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex}>
                      <div
                        className="hover:bg-gray-200  cursor-pointer py-1.5 px-2 rounded 
                                    duration-200 transition-all flex items-center justify-between"
                      >
                        {item.title}
                        {item?.icon && <div>{item?.icon}</div>}
                      </div>
                      {item?.children?.map((subItem, subItemIndex) => (
                        <div
                          key={subItemIndex}
                          className="hover:bg-gray-200  cursor-pointer py-1.5 px-2 rounded 
                                    duration-200 transition-all"
                        >
                          {subItem?.title}
                        </div>
                      ))}
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
