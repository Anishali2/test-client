"use client";

import {
    ArrowUpDown,
    Check,
    CircleChevronLeft,
    CircleChevronRight,
    CircleX,
    SquareCheck,
    X,
} from "lucide-react";
import { useState } from "react";
import TransactionModal from "./transaction-modal";
import { CheckActionIcon, CrosActionIcon } from "@/assets/svgs";
import Link from "next/link";

export default function TransactionTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("Transaction Info");

    const transactions = [
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Deposit",
            date: "12 JAN 2024 10:12 am",
            status: "Successful",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Approved",
        },
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Withdrawal",
            date: "12 JAN 2024 10:12 am",
            status: "Failed",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Retry",
        },
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Purchase",
            date: "12 JAN 2024 10:12 am",
            status: "Pending",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Decision",
        },
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Deposit",
            date: "12 JAN 2024 10:12 am",
            status: "Successful",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Approved",
        },
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Deposit",
            date: "12 JAN 2024 10:12 am",
            status: "Successful",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Approved",
        },
        {
            id: "133780776234168",
            userId: "12175688",
            type: "Deposit",
            date: "12 JAN 2024 10:12 am",
            status: "Successful",
            amount: "$ 1,200",
            method: "Bank Transfer",
            action: "Approved",
        },
    ];

    const getStatusColor = (status: any) => {
        switch (status) {
            case "Successful":
                return "text-green-500";
            case "Failed":
                return "text-red-500";
            case "Pending":
                return "text-yellow-500";
            default:
                return "text-white";
        }
    };

    const getActionButton = (action: any) => {
        switch (action) {
            case "Approved":
                return (
                    <div className="text-green-500 flex gap-2">
                        <SquareCheck className="h-4 w-4 text-[#00FF94]" />
                        <span className="text-xs text-[#00FF94]">Approved</span>
                    </div>
                );
            case "Retry":
                return (
                    <button className=" rounded-full bg-[#FFD46E] px-6 py-2 text-xs font-medium text-black">
                        Retry
                    </button>
                );
            case "Decision":
                return (
                    <div className="flex space-x-4">
                        <CheckActionIcon />
                        <CrosActionIcon />
                    </div>
                );
            default:
                return null;
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-950 relative text-white">
            <div className="overflow-x-auto rounded-lg">
                {/* Table with rounded corners */}
                <table className="w-full text-left">
                    <thead className="text-xs">
                        <tr>
                            <th className="text-gray-300 rounded-tl-2xl bg-[#0E1F30] px-6 py-2 font-medium">
                                Transaction ID
                            </th>

                            {/* Middle cells */}
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                UserID Associated
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                <div className="flex items-center">
                                    Type
                                    <ArrowUpDown size={14} className="ml-1" />
                                </div>
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                <div className="flex items-center">
                                    Date and time
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
                                Amount
                            </th>
                            <th className="text-gray-300 bg-[#0E1F30] px-6 py-2 font-medium">
                                Method
                            </th>

                            <th className="text-gray-300 rounded-tr-2xl bg-[#0E1F30] px-6 py-2 font-medium">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#050E18] text-xs">
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="border-b border-[#0E1F30]">
                                <td className="px-6 py-4">{transaction.id}</td>
                                <td className="px-6 py-4">{transaction.userId}</td>
                                <td className="px-6 py-4">{transaction.type}</td>
                                <td className="px-6 py-4">{transaction.date}</td>
                                <td className={`px-6 py-4 ${getStatusColor(transaction.status)}`}>
                                    {transaction.status === "Failed" ? (
                                        <Link href={`/dashboard/admin/transaction-management/failed-transaction`}>
                                            <span className="cursor-pointer hover:text-red-400 transition">
                                                {transaction.status}
                                            </span>
                                        </Link>
                                    ) : (
                                        transaction.status
                                    )}
                                </td>
                                <td className="px-6 py-4">{transaction.amount}</td>
                                <td className="px-6 py-4">{transaction.method}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button
                                            className="mr-2 rounded-full border-2 border-[#00A3FF] px-4 py-1 text-xs text-[#00A3FF]"
                                            onClick={openModal}
                                        >
                                            View
                                        </button>
                                        {getActionButton(transaction.action)}
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
            <div>
                <TransactionModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </div>
        </div>
    );
}
