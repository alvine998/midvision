import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { ColumnPartner } from "@/constant/column_partner";
import { ColumnUser } from "@/constant/column_user";
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
      name: "Alvine",
      email: "alvine@midvision.id",
      phone: "089977766688",
      role: "super_admin",
    },
    {
      id: 2,
      name: "Ikna",
      email: "ikna@midvision.id",
      phone: "08812345678",
      role: "super_admin",
    },
    {
      id: 3,
      name: "Dadang",
      email: "dadang@midvision.id",
      phone: "088123456789",
      role: "admin",
    },
  ].map((item, index) => ({
    ...item,
    action: (
      <div key={index} className="flex gap-2">
        <Button variant="success" type="button">
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button variant="danger" type="button">
          <Trash2Icon className="w-4 h-4" />
        </Button>
      </div>
    ),
  }));
  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-2 justify-between items-center">
        <div className="lg:w-auto w-full">
          <Input placeholder="Cari disini..." />
        </div>
        <div className="flex gap-2 lg:flex-row flex-col items-center lg:w-auto w-full">
          <Button variant="success" className="lg:w-auto w-full">
            Download
          </Button>
          <Button className="lg:w-auto w-full">+ Add User</Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        {show && (
          <div className="mt-4">
            <DataTable
              columns={ColumnUser}
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
