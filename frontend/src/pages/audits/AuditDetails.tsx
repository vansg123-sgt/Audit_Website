import {
  ArrowLeft,
  Calendar,
  User,
  Building2,
  CheckCircle2,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

import StatusBadge from "../../components/audits/StatusBadge";
import PriorityBadge from "../../components/audits/PriorityBadge";

import { auditsData } from "../../data/auditsData";


export default function AuditDetails() {


  const navigate = useNavigate();


  const { id } = useParams();



  const audit = auditsData.find(
    (item)=> item.id === Number(id)
  );



  if(!audit){

    return (

      <div
        className="
          text-white
          text-xl
        "
      >
        Audit not found
      </div>

    );

  }



  return (

    <div
      className="
        space-y-8
      "
    >


      {/* Back Button */}


      <button

        onClick={()=>navigate(-1)}

        className="
          flex
          items-center
          gap-2
          text-gray-400
          hover:text-white
        "

      >

        <ArrowLeft size={18}/>

        Back to Audits

      </button>




      {/* Header Card */}


      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
        "
      >


        <div
          className="
            flex
            flex-col
            gap-5
            md:flex-row
            md:justify-between
          "
        >


          <div>


            <h1
              className="
                text-3xl
                font-bold
                text-white
              "
            >
              {audit.name}
            </h1>


            <p
              className="
                mt-2
                text-gray-400
              "
            >
              Audit overview and compliance details
            </p>


          </div>



          <div className="flex gap-3">


            <StatusBadge
              status={audit.status}
            />


            <PriorityBadge
              priority={audit.priority}
            />


          </div>


        </div>


      </div>





      {/* Information Cards */}


      <div
        className="
          grid
          grid-cols-1
          gap-6
          md:grid-cols-3
        "
      >


        <InfoCard

          icon={<Building2/>}

          title="Department"

          value={audit.department}

        />


        <InfoCard

          icon={<User/>}

          title="Auditor"

          value={audit.auditor}

        />


        <InfoCard

          icon={<Calendar/>}

          title="Due Date"

          value={audit.dueDate}

        />


      </div>





      {/* Checklist */}


      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
        "
      >

        <h2
          className="
            mb-6
            text-xl
            font-bold
            text-white
          "
        >
          Audit Checklist
        </h2>



        <div className="space-y-4">


          {
            [
              "Documentation review",
              "Risk assessment completed",
              "Compliance verification",
              "Final approval"
            ].map((item)=>(


              <div

                key={item}

                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-white/5
                  p-4
                  text-gray-300
                "

              >

                <CheckCircle2
                  className="text-green-400"
                />

                {item}


              </div>


            ))
          }


        </div>


      </div>



    </div>

  );

}




function InfoCard({
  icon,
  title,
  value,
}:{
  icon:React.ReactNode;
  title:string;
  value:string;
}){


return (

<div
className="
rounded-3xl
border
border-white/10
bg-white/5
p-6
"
>


<div
className="
mb-4
text-indigo-400
"
>

{icon}

</div>


<p
className="
text-sm
text-gray-400
"
>
{title}
</p>


<h3
className="
mt-1
text-lg
font-semibold
text-white
"
>
{value}
</h3>


</div>

);

}