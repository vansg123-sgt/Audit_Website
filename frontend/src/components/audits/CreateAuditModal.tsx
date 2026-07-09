import { X } from "lucide-react";
import { useState } from "react";

interface CreateAuditModalProps {
  open: boolean;
  onClose: () => void;
  onCreate: (audit: any) => void;
}


export default function CreateAuditModal({
  open,
  onClose,
  onCreate,
}: CreateAuditModalProps) {


  const [form, setForm] = useState({

    name: "",
    department: "",
    auditor: "",
    priority: "Medium",
    dueDate: "",

  });



  if (!open) return null;



  const handleSubmit = () => {

    onCreate({

      id: Date.now(),

      name: form.name,

      department: form.department,

      auditor: form.auditor,

      status: "Pending",

      priority: form.priority,

      dueDate: form.dueDate,

    });


    setForm({
      name:"",
      department:"",
      auditor:"",
      priority:"Medium",
      dueDate:"",
    });


    onClose();

  };



  return (

    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
      "
    >

      <div
        className="
          w-full
          max-w-lg
          rounded-3xl
          border
          border-white/10
          bg-[#111118]
          p-8
        "
      >


        <div
          className="
            mb-6
            flex
            items-center
            justify-between
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              text-white
            "
          >
            Create New Audit
          </h2>


          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              hover:bg-white/10
            "
          >
            <X />
          </button>

        </div>



        <div className="space-y-4">


          <input
            placeholder="Audit Name"
            value={form.name}
            onChange={(e)=>
              setForm({
                ...form,
                name:e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
            "
          />



          <input
            placeholder="Department"
            value={form.department}
            onChange={(e)=>
              setForm({
                ...form,
                department:e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
            "
          />



          <input
            placeholder="Auditor"
            value={form.auditor}
            onChange={(e)=>
              setForm({
                ...form,
                auditor:e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
              outline-none
            "
          />



          <select
            value={form.priority}
            onChange={(e)=>
              setForm({
                ...form,
                priority:e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
            "
          >

            <option>
              High
            </option>

            <option>
              Medium
            </option>

            <option>
              Low
            </option>


          </select>



          <input
            type="date"
            value={form.dueDate}
            onChange={(e)=>
              setForm({
                ...form,
                dueDate:e.target.value
              })
            }
            className="
              w-full
              rounded-xl
              bg-white/5
              border
              border-white/10
              px-4
              py-3
              text-white
            "
          />


        </div>



        <button
          onClick={handleSubmit}
          className="
            mt-6
            w-full
            rounded-xl
            bg-indigo-600
            py-3
            font-semibold
            text-white
            hover:bg-indigo-500
            transition
          "
        >
          Create Audit
        </button>


      </div>


    </div>

  );
}