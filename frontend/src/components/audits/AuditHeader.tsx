import {
  Plus,
  Download,
} from "lucide-react";

import Button from "../ui/Button";


interface Props {
  onCreate:()=>void;
}


export default function AuditHeader({
  onCreate
}:Props) {


return (

<div
className="
flex
flex-col
gap-6
rounded-3xl
border
border-white/10
bg-white/5
p-8
md:flex-row
md:items-center
md:justify-between
"
>


<div>

<h1 className="text-3xl font-bold text-white">
Manage Audits
</h1>

<p className="mt-2 text-gray-400">
Create and manage compliance audits.
</p>

</div>



<div className="flex gap-3">


<Button variant="secondary">

<span className="flex items-center gap-2">
<Download size={18}/>
Export
</span>

</Button>



<Button onClick={onCreate}>

<span className="flex items-center gap-2">
<Plus size={18}/>
New Audit
</span>

</Button>


</div>


</div>

);

}