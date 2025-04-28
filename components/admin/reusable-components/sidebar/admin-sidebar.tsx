"use client";

import React, { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import toast from "react-hot-toast";
import axios from "axios";
import { FaCircleUser } from "react-icons/fa6";

import { AdminAppRoutes, AppRoutes } from "@/constants/app-routes";

import { Button } from "@/components/shared";
import { AdminSidebarData } from "./admin-sidebar-data";
import AdminMobileMenu from "./admin-mobile-menu";

export const AdminSidebar = ({ toggle, setToggle }: any) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div className="overflow-x-hidden lg:overflow-visible">
      <div className="hidden h-full items-center justify-center md:flex md:p-[0.625rem]">
        <div className="relative hidden h-full w-full flex-shrink-0 flex-col justify-between rounded-lg bg-primary-light p-[0.625rem] lg:flex  lg:w-[183px]">
          <div className="flex w-full flex-col items-center lg:items-start">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={107}
              height={36}
              className="mx-auto shrink-0 object-cover pt-6"
              onClick={() => router.push(AdminAppRoutes.dashboard.index)}
            />
            <div className="mb-8 mt-6 h-[2px] w-full bg-primary" />
            <div className="w-full">
              <div className="flex flex-col items-center justify-center gap-2 pb-5">
                <FaCircleUser className="size-16 text-white" />
              </div>
            </div>
            <div className="mb-8 mt-10 h-[2px] w-full bg-primary" />
            <div className="flex w-full flex-col gap-10 px-6">
              {AdminSidebarData.map((item) => (
                <Link
                  href={item.link}
                  key={item.link}
                  className={clsx(
                    "group flex items-center justify-center gap-3 lg:justify-start",
                  )}
                >
                  <item.icon
                    className={clsx(
                      "size-6 flex-shrink-0",
                      pathname === item.link ? "fill-green" : "fill-white",
                    )}
                  />
                  <p
                    className={clsx(
                      "text-sm font-medium  lg:block",
                      pathname === item.link
                        ? "text-green"
                        : "lg:group-hover:cool-link-green text-white",
                    )}
                  >
                    {item.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AdminMobileMenu
        toggle={toggle}
        handleClose={handleClose}
        logoutHandler={() => {}}
        profileData={{}}
      />
    </div>
  );
};
