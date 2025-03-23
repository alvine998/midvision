import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useModal } from "@/components/common/Modal";
import GoalCreateModal from "@/components/modal/goal/create";
import GoalDeleteModal from "@/components/modal/goal/delete";
import GoalUpdateModal from "@/components/modal/goal/update";
import UserCreateModal from "@/components/modal/user/create";
import UserDeleteModal from "@/components/modal/user/delete";
import UserUpdateModal from "@/components/modal/user/update";
import { ColumnPartner } from "@/constant/column_partner";
import { ColumnUser } from "@/constant/column_user";
import { EyeIcon, PencilIcon, SendIcon, Trash2Icon } from "lucide-react";
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
      name: "KPI 1",
      description: "description",
      date_start: "2025-03-05",
      date_end: "2025-10-05",
      status: "active",
    },
  ].map((item, index) => ({
    ...item,
    action: (
      <div key={index} className="flex gap-2">
        <Button variant="warning" type="button">
          <EyeIcon className="w-4 h-4" />
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
          <Input
            placeholder="Cari disini..."
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
        <div className="flex gap-2 lg:flex-row flex-col items-center lg:w-auto w-full">
          <Button variant="success" className="lg:w-auto w-full">
            Download
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
            + Add Goal
          </Button>
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
      {modal?.key == "create" && (
        <GoalCreateModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
        />
      )}
      {modal?.key == "update" && (
        <GoalUpdateModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
          data={modal.data}
        />
      )}
      {modal?.key == "delete" && (
        <GoalDeleteModal
          open={modal.open}
          setOpen={() => setModal({ ...modal, open: false })}
          data={modal.data}
        />
      )}
    </div>
  );
}
