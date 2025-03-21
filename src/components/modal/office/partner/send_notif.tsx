import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import { queryToUrlSearchParams } from "@/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
interface Props {
  open: boolean;
  setOpen: any;
  data: any;
}

export default function PartnerSendNotifModal({ open, setOpen, data }: Props) {
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
        <h1 className="text-center font-bold text-xl">
          Send Notification Partner
        </h1>
        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-2">
          <input type="hidden" name="id" value={data.id} />
          <p className="text-center text-gray-600">
            Are you sure you want to send notification to this partner?
          </p>
          <Button
            className="mt-4 w-full"
            disabled={loading}
            type="submit"
          >
            {loading ? "Loading..." : "Send"}
          </Button>
          <Button variant="white" type="button" onClick={setOpen}>
            Cancel
          </Button>
        </form>
      </Modal>
    </div>
  );
}
