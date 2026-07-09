import { Outlet } from "react-router-dom";

import Sidebar from "../components/layouts/Sidebar";
import Navbar from "../components/layouts/Navbar";

export default function DashboardLayout(){

return (

<div

className="
min-h-screen
flex
bg-[#09090b]
"

>


<Sidebar/>


<div className="
flex-1
flex
flex-col
">


<Navbar/>


<main
className="
flex-1
p-8
"
>

<Outlet/>

</main>


</div>


</div>

)

}