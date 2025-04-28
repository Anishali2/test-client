"use client";

import React, { useCallback, useEffect, useState, Suspense, lazy } from "react";
import { usePathname } from "next/navigation";
import { CgSpinner } from "react-icons/cg";

import { MetaAssetsTableMobile } from "@/components/admin/meta-assets-management/meta-assets-table-mobile";
import { MetaAssetsTableDesktop } from "@/components/admin/meta-assets-management/meta-assets-table-desktop";
import { AddMetaAssetsModal } from "@/components/admin/meta-assets-management/models/add-meta-assets-model";
import { AdminAppRoutes } from "@/constants/app-routes";
import { Button } from "@/components/shared";
import { RemoveMetaAssetsModal } from "@/components/admin/meta-assets-management/models/remove-meta-assets-model";

const UserManagement = () => {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const limit = 10;

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const pathname = usePathname();
  const [openAddMetaAssetsModal, setOpenAddMetaAssetsModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedTotalAssets, setSelectedTotalAssets] = useState(0);
  const [openRemoveMetaAssetsModal, setOpenRemoveMetaAssetsModal] =
    useState(false);

  const handleRemoveMetaAssetsModel = (userId: string, totalAssets: number) => {
    setSelectedUserId(userId);
    setSelectedTotalAssets(totalAssets);
    setOpenRemoveMetaAssetsModal(true);
  };

  const [metaAssetsDetailList, setMetaAssetDetailList] = useState<any>();
  const [isLoading, setIsLoading] = useState("idle");

  console.log("metaAssetDetailsList", metaAssetsDetailList);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full flex-col gap-5 lg:gap-14">
        {pathname === AdminAppRoutes.dashboard.index && (
          <div className="flex flex-col gap-1  pt-8 sm:pt-0">
            <h4 className="text-gradient font-kanit text-xl lg:text-2xl">
              Meta-Assets Management
            </h4>
            <p className="bg-gradient text-sm text-white">
              Manage and track all meta-assets on the platform, including adding
              and removing assetsfor users.
            </p>
          </div>
        )}
        {pathname === AdminAppRoutes.dashboard.index && (
          <div className="flex w-full flex-col gap-5  sm:flex-row sm:items-center">
            <div className="flex w-full items-center justify-between gap-2 rounded-3xl bg-primary-light p-4 sm:w-2/5">
              <h5 className="text-gradient font-kanit text-base">
                Add Meta-Assets:
              </h5>
              <Button
                title="Add"
                className="rounded-full !py-2 px-8 md:!py-2 md:px-8"
                onClick={() => setOpenAddMetaAssetsModal(true)}
              />
            </div>
            <div className="flex w-full items-center justify-between gap-2 rounded-3xl bg-primary-light p-4 sm:w-3/5">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <h5 className="text-gradient font-kanit text-base">
                  Add Meta-Assets:
                </h5>
                <p className="text-xs text-white">
                  Weekly/monthly reports on new purchases
                </p>
              </div>
              <Button
                title="View Report"
                className="rounded-full !py-2 md:!py-2"
              />
            </div>
          </div>
        )}
      </div>

      <h4 className="text-gradient pt-16 font-kanit text-xl lg:text-2xl">
        User Management
      </h4>
      <div className="hidden lg:block">
        <MetaAssetsTableDesktop
          metaAssetsDetailList={metaAssetsDetailList}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleRemoveMetaAssetsModel={handleRemoveMetaAssetsModel}
          page={page}
        />
      </div>
      <div className="block lg:hidden">
        <MetaAssetsTableMobile
          metaAssetsDetailList={metaAssetsDetailList}
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          handleRemoveMetaAssetsModel={handleRemoveMetaAssetsModel}
          page={page}
        />
      </div>

      <AddMetaAssetsModal
        open={openAddMetaAssetsModal}
        onClose={() => setOpenAddMetaAssetsModal(false)}
      />
      <RemoveMetaAssetsModal
        open={openRemoveMetaAssetsModal}
        onClose={() => setOpenRemoveMetaAssetsModal(false)}
        userEmail={selectedUserId}
        totalAssets={selectedTotalAssets}
      />

      <div>
        {loading && (
          <div className="fixed inset-0 z-[3000] flex h-full w-full items-center justify-center backdrop-blur-[4px] backdrop-filter">
            <CgSpinner className="mx-auto mt-20 size-14 animate-spin text-white" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserManagement;
