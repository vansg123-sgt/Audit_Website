import { useState } from "react";

import AuditHeader from "../../components/audits/AuditHeader";
import AuditTable from "../../components/audits/AuditTable";
import CreateAuditModal from "../../components/audits/CreateAuditModal";

import { auditsData } from "../../data/auditsData";


export default function Audits() {


  const [showModal, setShowModal] = useState(false);



  const [audits, setAudits] = useState(auditsData);



  return (

    <div
      className="
        space-y-8
      "
    >


      <AuditHeader

        onCreate={() => setShowModal(true)}

      />



      <AuditTable

        audits={audits}

      />



      <CreateAuditModal

        open={showModal}

        onClose={() => setShowModal(false)}


        onCreate={(audit)=>{


          setAudits([
            audit,
            ...audits
          ]);


        }}


      />


    </div>

  );

}