import React, { ReactNode, useState } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import MobileMenu from "./MobileMenu";
import { NAVIGATIONS, OFFICE_NAVIGATIONS } from "../constant/navigation";
import { usePathname } from "next/navigation";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const [isWide, setIsWide] = useState<boolean>(true);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div>
      <Head>
        <title>Midvision</title>
      </Head>
      <div className="flex flex-row h-screen overflow-hidden">
        <div
          className={`bg-black ${
            isWide ? "w-[400px]" : "w-[120px]"
          } h-screen duration-300 transition-all lg:block hidden`}
        >
          <Sidebar
            navigations={
              pathname?.includes("office") ? OFFICE_NAVIGATIONS : NAVIGATIONS
            }
            isWide={isWide}
          />
        </div>
        <div className="w-full">
          <Topbar
            isWide={isWide}
            setIsWide={setIsWide}
            setShowMenu={setShowMenu}
            showMenu={showMenu}
          />

          <div className="lg:hidden block">
            <MobileMenu
              navigations={
                pathname?.includes("office") ? OFFICE_NAVIGATIONS : NAVIGATIONS
              }
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          </div>

          <main className="p-4 overflow-auto">{children}</main>
        </div>
      </div>
    </div>
  );
}
