"use client";
import React, { useState } from "react";
import { MetaAssetsTableMobile } from "@/components/admin/meta-assets-management/meta-assets-table-mobile";
import { MetaAssetsTableDesktop } from "@/components/admin/meta-assets-management/meta-assets-table-desktop";
import { AddMetaAssetsModal } from "@/components/admin/meta-assets-management/models/add-meta-assets-model";
import { RemoveMetaAssetsModal } from "@/components/admin/meta-assets-management/models/remove-meta-assets-model";
import { Button } from "@/components/shared";
import { usePathname } from "next/navigation";
import { AdminAppRoutes } from "@/constants/app-routes";
import { IoSearch, IoSearchCircleOutline } from "react-icons/io5";

const metaAssetsDetailList = [
  {
    assetId: "023881",
    userId: "1349770",
    username: "john_doe",
    email: "john.doe@example.com",
    totalAssets: 13,
    assetDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Active",
    price: "1,200",
    lastTransaction: "2024-11-10",
  },
  {
    assetId: "023882",
    userId: "5761209",
    username: "jane_smith",
    email: "jane.smith@example.com",
    totalAssets: 7,
    assetDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Inactive",
    price: "800",
    lastTransaction: "2024-11-08",
  },
  {
    assetId: "023883",
    userId: "8572910",
    username: "alice_wonder",
    email: "alice.wonder@example.com",
    totalAssets: 7,
    assetDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Active",
    price: "3,450",
    lastTransaction: "2024-11-12",
  },
  {
    assetId: "023884",
    userId: "9023812",
    username: "bob_marley",
    email: "bob.marley@example.com",
    totalAssets: 7,
    assetDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Inactive",
    price: "2,300",
    lastTransaction: "2024-10-25",
  },
  {
    assetId: "023885",
    userId: "4921847",
    username: "charlie_angel",
    email: "charlie.angel@example.com",
    totalAssets: 7,
    assetDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Active",
    price: "4,600",
    lastTransaction: "2024-11-06",
  },
];

const UserManagement = () => {
  const pathname = usePathname();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(metaAssetsDetailList); // Holds filtered data for the table
  const [openAddMetaAssetsModal, setOpenAddMetaAssetsModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedTotalAssets, setSelectedTotalAssets] = useState(0);
  const [openRemoveMetaAssetsModal, setOpenRemoveMetaAssetsModal] =
    useState(false);

  const handleSearch = () => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = metaAssetsDetailList.filter(
      (item) =>
        item.username.toLowerCase().includes(lowercasedQuery) ||
        item.email.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredData(filtered);
  };

  const handleRemoveMetaAssetsModel = (email: string, totalAssets: number) => {
    setSelectedEmail(email);
    setSelectedTotalAssets(totalAssets);
    setOpenRemoveMetaAssetsModal(true);
  };

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
            {/* <div className="flex w-full items-center justify-between gap-2 rounded-3xl bg-primary-light p-4 sm:w-3/5">
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
            </div> */}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-between  gap-3 pb-2 pt-8 sm:flex-row sm:items-center">
        <h4 className="text-gradient font-kanit text-xl lg:text-2xl">
          Users List
        </h4>

        <div className="relative flex h-10 w-full rounded-full bg-primary-light text-white sm:w-[40%]">
          <input
            type="text"
            placeholder="Search by username,last name and email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="absolute left-0 top-1/2 h-full w-full -translate-y-1/2 rounded-full border border-primary-light bg-transparent p-2 pl-3 text-sm focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl text-white"
          >
            <IoSearch size={20} />
          </button>
        </div>
      </div>
      <div className="hidden lg:block">
        <MetaAssetsTableDesktop
          metaAssetsDetailList={filteredData} // Use filtered data here
          handlePrevPage={() => setPage((prev) => Math.max(prev - 1, 1))}
          handleNextPage={() => setPage((prev) => prev + 1)}
          handleRemoveMetaAssetsModel={handleRemoveMetaAssetsModel}
          page={page}
        />
      </div>
      <div className="block lg:hidden">
        <MetaAssetsTableMobile
          metaAssetsDetailList={filteredData} // Use filtered data here
          handlePrevPage={() => setPage((prev) => Math.max(prev - 1, 1))}
          handleNextPage={() => setPage((prev) => prev + 1)}
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
        userEmail={selectedEmail}
        totalAssets={selectedTotalAssets}
      />
    </div>
  );
};

export default UserManagement;
