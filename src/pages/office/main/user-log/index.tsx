import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { ColumnPartner } from "@/constant/column_partner";
import { ColumnUser } from "@/constant/column_user";
import { ColumnUserLog } from "@/constant/column_user_log";
import { PencilIcon, SendIcon, Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function index() {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(true);
    }
  }, []);
  const dummyData = [
    {
      id: 1,
      user_id: 1,
      user_name: "Alvine",
      user_email: "alvine@midvision.id",
      login_on: "2025-03-20 15:55:00",
    },
    {
      id: 2,
      user_id: 2,
      user_name: "Ikna",
      user_email: "ikna@midvision.id",
      login_on: "2025-03-20 15:02:00",
    },
    {
      id: 3,
      user_id: 3,
      user_name: "Dadang",
      user_email: "dadang@midvision.id",
      login_on: "2025-03-20 10:55:00",
    },
  ];
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-2 justify-between items-center">
        <Input placeholder="Cari disini..." />
        <div className="flex gap-2 lg:flex-row flex-col items-center">
          <Button variant="success">Download</Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        {show && (
          <div className="mt-4">
            <DataTable
              columns={ColumnUserLog}
              data={dummyData}
              pagination
              highlightOnHover
              responsive
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "#f3f4f6",
                    fontWeight: "bold",
                  },
                },
                rows: {
                  style: {
                    "&:hover": {
                      backgroundColor: "#e5e7eb",
                    },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
