"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MdChevronRight } from "react-icons/md";
import Title from "./Title";

const MenuComponent = () => {
  const [menuData, setMenuData] = useState([]);
const [count ,setCount] = useState(0)
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        "https://api.shope.com.bd/api/v1/public/hero-categories"
      );
      const data = await response.json();
      setMenuData(data);
    };
    fetchMenu();
  }, []);

  const increment = ()=>{
  }

  return (
<div>
{/* <Title/> */}
<div className="w-[1220px] mx-auto bg-slate-100 mt-5">

      <div className="flex flex-col gap-y-[11px] bg-white h-[391px] py-2.5 pl-4 w-[230px] text-xs cursor-pointer leading-4">
        {menuData?.map((menu) => (
          <MenuItem key={menu?.id} item={menu} />
        ))}
      </div>
    </div>
</div>
  );
};

export const MenuItem = ({ item }) => {
  const [hovered, setHovered] = useState(null);
  const hasChildren = item?.childrens && item?.childrens.length > 0;
//   const iconSrc = item?.icon ? item.icon : "/default-icon.png";
  return (
    <nav className="">
      <ul
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className=" flex items-center relative group "
      >
          {/* <Image src={iconSrc} alt="loading" width={10} height={10}/> */}
        <span className={`duration-200 transition-all ${hovered ? "text-orange-500" : ""}`}>
          
          {item?.title}
        </span>
        {hasChildren && (
          <div
            className={` ${hovered ? "text-orange-500 rotate-180" : ""} absolute right-4  duration-500 transition-all `}
          >
            <MdChevronRight />
          </div>
        )}

        <div className={`absolute left-full transition-all ease-in-out duration-500 top-0 ${hovered ? "opacity-100": "opacity-0"} `}>
          {hovered && hasChildren && (
            <ul className="bg-white  w-[230px] h-[391px]  flex flex-col gap-y-[10px] py-2.5 pl-4 duration-300 border-l">
              {item?.childrens?.map((child) => (
                <MenuItem  item={child} key={child?.id} />
              ))}
            </ul>
          )}
        </div>
      </ul>

     
    </nav>
  );
};

export default MenuComponent;
