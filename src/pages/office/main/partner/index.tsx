import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { ColumnPartner } from "@/constant/column_partner";
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
      name: "Midland Properti",
      email: "admin@midlandproperti.com",
      phone: "089977766688",
      address: "Jl Sukamulya No 20, Tanjung Priok, Jakarta Utara",
      package_id: 1,
      package_name: "Premium",
      due_date: "2026-03-20",
      status: "Active",
    },
    {
      id: 2,
      name: "Eastwell Avenue",
      email: "admin@eastwell.com",
      phone: "08812345678",
      address: "Jl Cipinang Muara No 20, Jakarta Timur",
      package_id: 2,
      package_name: "Basic",
      due_date: "2026-03-20",
      status: "Active",
    },
    {
      id: 3,
      name: "Semanan Regency",
      email: "admin@semanan.com",
      phone: "088123456789",
      address: "Jl Koja No 20, Jakarta Utara",
      package_id: 3,
      package_name: "VIP",
      due_date: "2027-03-20",
      status: "Active",
    },
  ].map((item, index) => ({
    ...item,
    action: (
      <div key={index} className="flex gap-2">
        <Button variant="primary" type="button">
          <SendIcon className="w-4 h-4" />
        </Button>
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
          <Button className="lg:w-auto w-full">+ Add Partner</Button>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        {show && (
          <div className="mt-4">
            <DataTable
              columns={ColumnPartner}
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
