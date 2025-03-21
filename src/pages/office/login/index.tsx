import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { CheckIcon } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const router = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        email: (e.target as HTMLFormElement).email.value,
        password: (e.target as HTMLFormElement).password.value,
      };
      console.log(payload);
      Swal.fire({
        icon: "success",
        title: "Login Success",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/office/main/dashboard");
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error);
        if (
          "response" in error &&
          error.response &&
          typeof error.response === "object"
        ) {
          const response = error.response as {
            data?: { error_message?: string };
          };
          setErrorMessage(response.data?.error_message);
        } else {
          setErrorMessage("An unexpected error occurred");
        }
        setLoading(false);
      } else {
        console.error("An unknown error occurred");
      }
    }
  };
  return (
    <div className='bg-[url("/images/bg-login.png")] bg-cover bg-center h-screen lg:p-10 flex flex-col items-center justify-center z-0'>
      <Head>
        <title>Login</title>
      </Head>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-[#85676799] z-10"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center w-full z-30">
        <div className="w-1/2 lg:block hidden">
          <h1 className="text-4xl font-bold text-white">MIDVISION</h1>
          <h3 className="text-2xl font-bold text-white mt-4">
            One Stop Solution for all your management employee needs
          </h3>
        </div>
        <div className=" lg:mt-0 mt-5 lg:w-1/2 w-full lg:ml-40 ml-0 lg:mr-20 mr-0 lg:px-0 px-5">
          <div className="bg-white rounded-lg shadow lg:px-10 px-4 lg:py-20 py-6">
            <h5 className={`text-center font-bold text-xl text-orange-500`}>
              Back Office Login
            </h5>
            <p className="text-center text-gray-500 mt-2">
              Enter your Username and Password to get started
            </p>

            <form onSubmit={onSubmit} className="flex flex-col gap-2 mt-5">
              <Input
                name="email"
                label="Email"
                required
                placeholder="Enter email"
                type="email"
              />
              <Input
                name="password"
                label="Password"
                required
                placeholder="********"
                type="password"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
              />
              {errorMessage && (
                <p className="my-1 text-sm text-red-500">{errorMessage}</p>
              )}
              <Button variant="primary" disabled={loading} className="mt-4">
                {loading ? "Loading..." : "Login"}
              </Button>
              <Button
                variant="success"
                type="button"
                onClick={() => {
                  router.push("/");
                }}
                disabled={loading}
                
              >
                Login as Partner
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
