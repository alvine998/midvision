import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { queryToUrlSearchParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
interface Props {
  open: boolean;
  setOpen: any;
  data: any;
}

export default function PartnerUpdateModal({ open, setOpen, data }: Props) {
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
        <h1 className="text-center font-bold text-xl">Update Partner</h1>
        <form className="mt-4 flex flex-col gap-2" onSubmit={onSubmit}>
          <input type="hidden" name="id" value={data.id} />
          <Input
            label="Partner Name"
            required={true}
            placeholder="Enter Partner Name"
            defaultValue={data.name}
          />
          <Input
            label="Email"
            required={true}
            placeholder="Enter Email"
            defaultValue={data.email}
          />
          <Input
            label="Phone"
            required={true}
            placeholder="Enter Phone"
            defaultValue={data.phone}
          />
          <Input
            label="Address"
            required={true}
            placeholder="Enter Address"
            defaultValue={data.address}
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
