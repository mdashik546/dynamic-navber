// import { sidebarItems } from "../data/SidebarItems";

// export async function getServerSideProps (){

// return{
//   props:sidebarItems
// }
// }

export async function getServerSideProps(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
  return {
    props:{data}
  }
}