import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { INavigation } from "../types/navigation";
import { BarChart2Icon, HistoryIcon, UserIcon, Users2Icon } from "lucide-react";

interface Props {
  navigations: INavigation[];
  isWide: boolean;
}

export default function Sidebar({ navigations, isWide }: Props) {
  const pathname = usePathname();
  const getIcon = (icon: string) => {
    switch (icon) {
      case "/icons/dashboard":
        return <BarChart2Icon className="w-6 h-6 text-white" />;
      case "/icons/partner":
        return <Users2Icon className="w-6 h-6 text-white" />;
      case "/icons/user":
        return <UserIcon className="w-6 h-6 text-white" />;
      case "/icons/user-log":
        return <HistoryIcon className="w-6 h-6 text-white" />;
      default:
        return <></>;
    }
  };
  return (
    <div className="flex flex-col items-center py-2">
      <div className="mt-2">
        <h1
          className={`${isWide ? "text-2xl" : "text-xs"} text-white font-bold`}
        >
          MidVision Office
        </h1>
        {/* <Image
          alt="logo"
          src={isWide ? "/images/logo.png" : "/images/logo-camera-only.svg"}
          className={isWide ? "w-auto h-auto" : "w-7 h-7"}
          layout="relative"
          width={isWide ? 170 : 50}
          height={isWide ? 25 : 50}
        /> */}
      </div>
      <div className="py-5 px-4 mt-5 w-full border-t-2 border-t-white">
        {navigations.map((navigation, index) => (
          <div key={index} className="my-2">
            <Link
              href={navigation.href}
              className={`${
                pathname === navigation.href
                  ? "bg-blue-500 gap-4"
                  : "bg-transparent hover:bg-blue-500 duration-200 gap-4 transition-all"
              } py-2 px-4 w-full flex items-center ${
                isWide
                  ? "justify-start rounded-lg"
                  : "justify-center rounded-xl"
              }`}
            >
              {getIcon(navigation.icon)}
              {/* <Image
                alt={navigation.title}
                src={`${navigation.icon}`}
                className="w-auto h-auto"
                layout="relative"
                width={5}
                height={5}
              /> */}
              {isWide ? <p className="text-white">{navigation.title}</p> : ""}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
