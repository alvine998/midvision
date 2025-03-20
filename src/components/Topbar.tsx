import {
  ChevronLeftIcon,
  ChevronLeftSquareIcon,
  MenuIcon,
  UserCircle2Icon,
} from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  isWide: boolean;
  setIsWide: (any: boolean) => void;
  showMenu: boolean;
  setShowMenu: (any: boolean) => void;
}

export default function Topbar({
  isWide,
  setIsWide,
  showMenu,
  setShowMenu,
}: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-6 py-4 flex flex-row justify-between bg-white shadow">
      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={() => {
            setIsWide(!isWide);
          }}
          className="p-1 bg-gray-200 rounded lg:block hidden"
        >
          <ChevronLeftIcon
            className={`w-7 h-7 ${
              isWide ? "" : "rotate-180"
            } transform duration-200 transition-all`}
          />
          {/* <Image
            alt={"icon"}
            src={`/icons/chevron-left-double.svg`}
            className={`w-auto h-auto duration-200 transition-all ${
              isWide ? "" : "rotate-180"
            }`}
            layout="relative"
            width={5}
            height={5}
          /> */}
        </button>
        <h2 className="font-bold lg:text-xl text-md uppercase text-black">
          {pathname?.includes("office")
            ? pathname.split("/")[3]
            : pathname.split("/")[2]}
        </h2>
      </div>

      {/* Profile Only Desktop */}
      <div className="relative inline-block text-left">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="lg:flex items-center gap-4 border-l-2 border-l-gray-500 pl-6 cursor-pointer hidden"
        >
          {/* <Image
          alt={"photo"}
          src={`/images/default-photo.svg`}
          className={`w-auto h-auto duration-200 transition-all rounded-full`}
          layout="relative"
          width={40}
          height={40}
        /> */}
          <UserCircle2Icon className="w-10 h-10 text-black" />
          <div>
            <h5 className="text-gray-500 text-sm">Welcome</h5>
            <h5 className="font-bold text-sm">Alvine</h5>
          </div>
        </button>

        <div
          className={`absolute mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10 right-0 transform duration-150 transition-all ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <ul className="py-0">
            <li
              onClick={() => {
                router.push(
                  pathname?.includes("office") ? "/office/login" : "/"
                );
              }}
              className="px-4 py-2 hover:bg-red-600 bg-red-500 text-white rounded cursor-pointer text-center"
            >
              Logout
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden block">
        <button type="button" onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon className="text-black" />
        </button>
      </div>
    </div>
  );
}
