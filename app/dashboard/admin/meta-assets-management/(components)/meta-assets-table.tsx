"use client";

import { Button } from "@/components/shared";
import { ArrowUpDown, CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import ViewAssetsDetailModal from "./view-assets-detail-modal";

const MetaAssetsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedAsset, setSelectedAsset] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleViewAsset = (asset: any) => {
      setSelectedAsset(asset);
      setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedAsset(null);
      };
    const assets = [
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 1",
            purchaseDate: "12 JAN 2024",
            status: { state: "Active", ownership: "Sold" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Suspend"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 2",
            purchaseDate: "12 JAN 2024",
            status: { state: "Active", ownership: "Free" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Active"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 3",
            purchaseDate: "12 JAN 2024",
            status: { state: "Inactive", ownership: "Sold" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Suspend"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Top Asset",
            purchaseDate: "12 JAN 2024",
            status: { state: "Inactive", ownership: "Free" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Active"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 1",
            purchaseDate: "12 JAN 2024",
            status: { state: "Active", ownership: "Sold" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Suspend"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 2",
            purchaseDate: "12 JAN 2024",
            status: { state: "Active", ownership: "Free" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Active"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Type 3",
            purchaseDate: "12 JAN 2024",
            status: { state: "Inactive", ownership: "Sold" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Active"
        },
        {
            id: "023889",
            userId: "12175688",
            name: "Lorem Ipsum",
            description: "Lorem ipsum dolor sit ...",
            type: "Top Asset",
            purchaseDate: "12 JAN 2024",
            status: { state: "Inactive", ownership: "Free" },
            price: "$ 1,200",
            lastTransaction: "12 JAN 2024",
            actionStatus: "Suspend"
        }
    ];

    const getActionButton = (status: any) => {
        if (status === "Suspend") {
            return (
                <Button
                    title=" Suspend"
                    variant="danger"
                    className="rounded-full text-xxs"
                />
            );
        } else if (status === "Active") {
            return (
                <Button
                    title="Active"
                    variant="primary"
                    className="rounded-full text-xxs"
                />
            );
        }
        return null;
    };

    return (
        <div className="text-white mt-5">
            <div className="overflow-x-hidden rounded-lg">
                <table className="w-full text-left">
                    <thead className="text-xs">
                        <tr>
                            <th className="text-gray-300 rounded-tl-2xl bg-[#0E1F30] px-6 py-2 font-medium">
                                Asset ID
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                UserID Associated
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                Asset Name
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                Asset Description
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                <div className="flex items-center">
                                    Type
                                    <ArrowUpDown size={14} className="ml-1" />
                                </div>
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                <div className="flex items-center">
                                    Purchase Date
                                    <ArrowUpDown size={14} className="ml-1 rotate-180" />
                                </div>
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                <div className="flex items-center">
                                    Status
                                    <ArrowUpDown size={14} className="ml-1" />
                                </div>
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                Price
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                Last Transaction
                            </th>
                            <th className="text-gray-300 rounded-tr-2xl bg-[#0E1F30] px-6 py-2 font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#050E18] text-xs">
                        {assets.map((asset, index) => (
                            <tr key={index} className="border-b border-[#0E1F30]">
                                <td className="px-6 py-4">{asset.id}</td>
                                <td className="px-6 py-4">{asset.userId}</td>
                                <td className="px-6 py-4">{asset.name}</td>
                                <td className="px-6 py-4">{asset.description}</td>
                                <td className="px-6 py-4">{asset.type}</td>
                                <td className="px-6 py-4">{asset.purchaseDate}</td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-col">
                                        <span className={asset.status.state === "Active" ? "text-green-500" : "text-red-500"}>
                                            {asset.status.state}
                                        </span>
                                        <span className="text-gray-400">{asset.status.ownership}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">{asset.price}</td>
                                <td className="px-6 py-4">{asset.lastTransaction}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            title="View Asset"
                                            variant="outlineBlue"
                                            className="rounded-full text-xxs"
                                            onClick={() => handleViewAsset(asset)}
                                        />
                                        {getActionButton(asset.actionStatus)}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Pagination */}
            <div className="mb-4 flex items-center justify-end rounded-bl-3xl rounded-br-3xl bg-[#050E18] p-4">
                <button className="bg-gray-800 mr-2 flex items-center justify-center rounded-full p-2 text-white">
                    <CircleChevronLeft />
                </button>

                <button
                    className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 1 ? "bg-blue-500" : ""}`}
                >
                    1
                </button>

                <button
                    className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 2 ? "bg-blue-500" : ""}`}
                >
                    2
                </button>

                <button
                    className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 3 ? "bg-blue-500" : ""}`}
                >
                    3
                </button>

                <span className="text-gray-400 mx-1">...</span>

                <button className="mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm">
                    10
                </button>

                <button className="bg-gray-800 ml-2 flex items-center justify-center rounded-full p-2 text-white">
                    <CircleChevronRight />
                </button>
            </div>
             {/* Modal */}
      <ViewAssetsDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        asset={selectedAsset}
      />
        </div>
    );
}


export default MetaAssetsTable
