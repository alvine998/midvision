import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import Select from "@/components/common/Select";
import { queryToUrlSearchParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  open: boolean;
  setOpen: any;
  data: any;
}

export default function GoalUpdateModal({ open, setOpen, data }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const params = queryToUrlSearchParams(router?.query)?.toString();

  const onSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const formData = Object.fromEntries(new FormData(e.target));
    try {
      const payload = {
        ...formData,
      };
      console.log(payload);
      setLoading(false);
      setOpen();
      router.push(`?${params}`);
    } catch (error: any) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Modal open={open} setOpen={setOpen}>
        <h1 className="text-center font-bold text-xl">Update Goal</h1>
        <form className="mt-4 flex flex-col gap-2" onSubmit={onSubmit}>
          <Input
            label="Name"
            required={true}
            placeholder="Enter Name"
            name="name"
            defaultValue={data.name}
          />
          <Input
            label="Email"
            required={true}
            placeholder="Enter Email"
            name="email"
            defaultValue={data.email}
          />
          <Input
            label="Phone"
            required={true}
            placeholder="Enter Phone"
            name="phone"
            defaultValue={data.phone}
          />
          <Select
            options={[
              { value: "super_admin", label: "Super Admin" },
              { value: "admin", label: "Admin" },
            ]}
            label="Role"
            required={true}
            placeholder="Choose Role"
            name="role"
            defaultValue={data.role}
          />
          <Select
            options={[
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
            label="Status"
            required={true}
            placeholder="Choose Status"
            name="status"
            defaultValue={data.status}
          />
          <Button className="mt-4 w-full" disabled={loading} type="submit">
            {loading ? "Loading..." : "Submit"}
          </Button>
          <Button variant="white" type="button" onClick={setOpen}>
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}
