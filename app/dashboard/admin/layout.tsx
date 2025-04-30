"use client";

import React, { useState } from "react";
import { AdminSidebar } from "@/components/admin/reusable-components/sidebar/admin-sidebar";
import { AdminHeader } from "@/components/admin/reusable-components/sidebar/admin-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toggle, SetToggle] = useState(false);
  return (
    <div className="flex min-h-dvh">
      <AdminSidebar toggle={toggle} setToggle={SetToggle} />
      <div className="flex w-full flex-col bg-primary ">
        <AdminHeader toggle={toggle} setToggle={SetToggle} />
        <div className="max-h-[calc(100vh-64px)] w-full  overflow-y-auto pb-20 sm:max-h-[calc(100vh)] md:pb-0">
          <div className="mx-auto w-full  pt-4  sm:p-6 md:p-2 lg:p-2">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
