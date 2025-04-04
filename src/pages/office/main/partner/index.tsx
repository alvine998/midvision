import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useModal } from "@/components/common/Modal";
import PartnerCreateModal from "@/components/modal/office/partner/create";
import PartnerDeleteModal from "@/components/modal/office/partner/delete";
import PartnerSendNotifModal from "@/components/modal/office/partner/send_notif";
import PartnerUpdateModal from "@/components/modal/office/partner/update";
import { ColumnPartner } from "@/constant/column_partner";
import { PencilIcon, SendIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function index() {
  const [show, setShow] = useState<boolean>(false);
  const [modal, setModal] = useState<useModal>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [filter, setFilter] = useState<any>(router.query);
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
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            setModal({
              open: true,
              data: item,
              key: "send_notif",
            });
          }}
        >
          <SendIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="success"
          type="button"
          onClick={() => {
            setModal({
              open: true,
              data: item,
              key: "update",
            });
          }}
        >
          <PencilIcon className="w-4 h-4" />
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={() => {
            setModal({
              open: true,
              data: item,
              key: "delete",
            });
          }}
        >
          <Trash2Icon className="w-4 h-4" />
        </Button>
      </div>
    ),
  }));

  useEffect(() => {
    const queryFilter = new URLSearchParams(filter).toString();
    router.push(`?${queryFilter}`);
  }, [filter]);

  return (
    <div>
      <div className="flex lg:flex-row flex-col gap-2 justify-between items-center">
        <div className="lg:w-auto w-full">
          <Input placeholder="Cari disini..." onChange={(e) => setFilter({ ...filter, search: e.target.value })} />
        </div>
        <div className="flex gap-2 lg:flex-row flex-col items-center lg:w-auto w-full">
          <Button
            variant="success"
            className="lg:w-auto w-full"
            type="button"
            disabled={loading}
            onClick={() => {}}
          >
            {loading ? "Downloading..." : "Download"}
          </Button>
          <Button
            className="lg:w-auto w-full"
            type="button"
            onClick={() => {
              setModal({
                open: true,
                data: null,
                key: "create",
              });
            }}
          >
            + Add Partner
          </Button>
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
      {modal?.key == "create" && (
        <PartnerCreateModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
        />
      )}
      {modal?.key == "update" && (
        <PartnerUpdateModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
          data={modal.data}
        />
      )}
      {modal?.key == "delete" && (
        <PartnerDeleteModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
          data={modal.data}
        />
      )}
      {modal?.key == "send_notif" && (
        <PartnerSendNotifModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
          data={modal.data}
        />
      )}
    </div>
  );
}
