"use client"
import Sidebar from "@/component/sidebar/Sidebar";

import DashboardSidebar from '@/component/DashboardSidebar'
import Title from "@/component/Title";
import { useState } from "react";
export default function Home({sidebarItems,data}) {
  // console.log(sidebarItems,'hellow',data);
  const [open,setOpen]= useState(false)
  return (
<>

  {/* <MenuComponent/> */}
  {/* <Sidebar sidebarItems={sidebarItems}/>
   */}
<DashboardSidebar open={open} setOpen={setOpen}/>/
<Title  open={open} setOpen={setOpen}/>
</>
  );
}
