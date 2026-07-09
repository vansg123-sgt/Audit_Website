import { useState } from "react";
import { MoreHorizontal, Search } from "lucide-react";

import SectionCard from "../dashboard/SectionCard";

import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";


interface Audit {

  id:number;
  name:string;
  department:string;
  auditor:string;
  status:string;
  priority:string;
  dueDate:string;

}



interface Props {

  audits: Audit[];

}



export default function AuditTable({
  audits
}: Props) {


  const [search,setSearch] = useState("");

  const [status,setStatus] = useState("All");

  const [priority,setPriority] = useState("All");



  const filteredAudits = audits.filter((audit)=>{


    const searchMatch =
      audit.name
      .toLowerCase()
      .includes(search.toLowerCase());



    const statusMatch =
      status === "All"
      ||
      audit.status === status;



    const priorityMatch =
      priority === "All"
      ||
      audit.priority === priority;



    return (
      searchMatch &&
      statusMatch &&
      priorityMatch
    );


  });



  return (

    <SectionCard

      title="All Audits"

      subtitle="Manage and monitor compliance audits"

    >


      <div
        className="
          mb-6
          grid
          grid-cols-1
          gap-4
          md:grid-cols-3
        "
      >


        <div
          className="
            flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
          "
        >

          <Search size={18}/>


          <input

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

            placeholder="Search audit..."

            className="
              w-full
              bg-transparent
              outline-none
              text-white
            "

          />

        </div>



        <select

          value={status}

          onChange={(e)=>setStatus(e.target.value)}

          className="
            rounded-xl
            border
            border-white/10
            bg-black/30
            px-4
            text-white
          "

        >

          <option value="All">
            All Status
          </option>

          <option value="Completed">
            Completed
          </option>

          <option value="In Progress">
            In Progress
          </option>

          <option value="Pending">
            Pending
          </option>

        </select>




        <select

          value={priority}

          onChange={(e)=>setPriority(e.target.value)}

          className="
            rounded-xl
            border
            border-white/10
            bg-black/30
            px-4
            text-white
          "

        >

          <option value="All">
            All Priority
          </option>

          <option value="High">
            High
          </option>

          <option value="Medium">
            Medium
          </option>

          <option value="Low">
            Low
          </option>


        </select>


      </div>




      <div className="overflow-x-auto">


        <table className="w-full">


          <thead>

            <tr className="border-b border-white/10">


              <th className="pb-4 text-left text-gray-400">
                Audit
              </th>


              <th className="pb-4 text-left text-gray-400">
                Department
              </th>


              <th className="pb-4 text-left text-gray-400">
                Auditor
              </th>


              <th className="pb-4 text-left text-gray-400">
                Status
              </th>


              <th className="pb-4 text-left text-gray-400">
                Priority
              </th>


              <th className="pb-4 text-left text-gray-400">
                Due
              </th>


              <th />

            </tr>

          </thead>



          <tbody>


          {
            filteredAudits.map((audit)=>(


              <tr

                key={audit.id}

                className="
                  border-b
                  border-white/5
                  hover:bg-white/5
                "

              >

                <td className="py-5 text-white font-medium">
                  {audit.name}
                </td>


                <td className="text-gray-300">
                  {audit.department}
                </td>


                <td className="text-gray-300">
                  {audit.auditor}
                </td>


                <td>

                  <StatusBadge
                    status={audit.status}
                  />

                </td>


                <td>

                  <PriorityBadge
                    priority={audit.priority}
                  />

                </td>


                <td className="text-gray-400">
                  {audit.dueDate}
                </td>


                <td>

                  <button
                    className="
                      rounded-lg
                      p-2
                      hover:bg-white/10
                    "
                  >

                    <MoreHorizontal size={18}/>

                  </button>

                </td>


              </tr>


            ))
          }


          </tbody>


        </table>


      </div>


    </SectionCard>

  );
}