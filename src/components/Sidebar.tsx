import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { INavigation } from "../types/navigation";
import {
  BarChart2Icon,
  CreditCardIcon,
  FileInputIcon,
  FileTextIcon,
  GaugeIcon,
  GoalIcon,
  HistoryIcon,
  LandmarkIcon,
  LayoutPanelTopIcon,
  ListCheckIcon,
  ListChecksIcon,
  SquareUserIcon,
  Table2Icon,
  UserIcon,
  UserPlusIcon,
  Users2Icon,
} from "lucide-react";

interface Props {
  navigations: INavigation[];
  isWide: boolean;
}

export const getIcon = (icon: string) => {
  switch (icon) {
    case "/icons/dashboard":
      return <BarChart2Icon className={`w-6 h-6 text-white`} />;
    case "/icons/partner":
      return <Users2Icon className={`w-6 h-6 text-white`} />;
    case "/icons/user":
      return <UserIcon className={`w-6 h-6 text-white`} />;
    case "/icons/user-log":
      return <HistoryIcon className={`w-6 h-6 text-white`} />;
    case "/icons/package":
      return <ListChecksIcon className={`w-6 h-6 text-white`} />;
    case "/icons/goals":
      return <GoalIcon className={`w-6 h-6 text-white`} />;
    case "/icons/activity":
      return <GaugeIcon className={`w-6 h-6 text-white`} />;
    case "/icons/project":
      return <Table2Icon className={`w-6 h-6 text-white`} />;
    case "/icons/so":
      return <LayoutPanelTopIcon className={`w-6 h-6 text-white`} />;
    case "/icons/employee":
      return <SquareUserIcon className={`w-6 h-6 text-white`} />;
    case "/icons/reports":
      return <FileTextIcon className={`w-6 h-6 text-white`} />;
    case "/icons/todo":
      return <ListCheckIcon className={`w-6 h-6 text-white`} />;
    case "/icons/attendance":
      return <FileInputIcon className={`w-6 h-6 text-white`} />;
    case "/icons/payroll":
      return <CreditCardIcon className={`w-6 h-6 text-white`} />;
    case "/icons/finance":
      return <LandmarkIcon className={`w-6 h-6 text-white`} />;
    case "/icons/recruitment":
      return <UserPlusIcon className={`w-6 h-6 text-white`} />;
    default:
      return <></>;
  }
};

export default function Sidebar({ navigations, isWide }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center py-2 overflow-y-auto overflow-x-hidden h-screen">
      <div className="mt-2">
        <h1
          className={`${isWide ? "text-2xl" : "text-xs"} text-white font-bold`}
        >
          MidVision {pathname?.includes("office") ? "Office" : ""}
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
          <div key={index} className="my-2 w-full">
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
              {isWide ? <p className="text-white w-full truncate">{navigation.title}</p> : ""}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
