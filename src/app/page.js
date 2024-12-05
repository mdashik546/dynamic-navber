
import Sidebar from "@/component/sidebar/Sidebar";


export default function Home({sidebarItems,data}) {
  console.log(sidebarItems,'hellow',data);
  return (
<>

  {/* <MenuComponent/> */}
  <Sidebar sidebarItems={sidebarItems}/>

</>
  );
}
