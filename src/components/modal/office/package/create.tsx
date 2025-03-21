import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Modal from "@/components/common/Modal";
import { queryToUrlSearchParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";

interface Props {
  open: boolean;
  setOpen: any;
}

export default function PackageCreateModal({ open, setOpen }: Props) {
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
        <h1 className="text-center font-bold text-xl">Add Package</h1>
        <form className="mt-4 flex flex-col gap-2" onSubmit={onSubmit}>
          <Input
            label="Package Name"
            required={true}
            placeholder="Enter Package Name"
            name="name"
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
