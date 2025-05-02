"use client";
import React, { useState, useEffect } from "react";
import { CircleChevronLeft, CircleChevronRight, CircleX, X } from "lucide-react";
import { getStatusColor, transactions } from "./constant";
import { Button } from "@/components/shared";

const ViewAssetsDetailModal = ({ isOpen, onClose, asset }: any) => {
    const [activeTab, setActiveTab] = useState("Assets Info");
    const [showtable, setShowtable] = useState("Assets Info");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;

    useEffect(() => {
        if (isOpen) {
            setActiveTab("Assets Info");
            setShowtable("Assets Info");
            setCurrentPage(1);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const dummyData = Array(5).fill({
        date: "12 JAN 2024",
        transactionId: "View Transaction",
        userId: "12175688",
        userName: "John Doe",
        email: "johndoe@gmail.com",
        price: "$ 1,200",
    });

    const totalPages = Math.ceil(dummyData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = dummyData.slice(startIndex, startIndex + rowsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };

    const handleTable = (value: string) => {
        setShowtable(value);
        setCurrentPage(1);
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
            <div className="flex flex-col min-w-[850px] bg-[#0E1F30] py-2 rounded-md p-6">
                {/* Header */}
                <div className=" flex justify-between items-center py-4 px-0">
                    <span className="text-gradient text-2xl">
                        Asset Details
                    </span>
                    <button onClick={onClose} className=""><CircleX /></button>
                </div>

                {/* Tabs */}
                <div className="w-full max-w-[800px]  py-2">
                    <ul className="flex bg-[#0E1F30] text-sm  text-gray-400">
                        {["Assets Info", "Purchase History", "Transaction History"].map(tab => (
                            <li
                                key={tab}
                                className={`px-3 cursor-pointer ${activeTab === tab ? "text-green border-b-2 border-green-400 font-semibold" : ""
                                    }`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    handleTable(tab);
                                }}
                            >
                                {tab}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Assets Info */}
                {showtable === "Assets Info" && asset && (
                    <div>
                        <div className="flex min-w-[800px] h-36 bg-[#152D44] flex-col">
                            <div className="w-full grid grid-cols-3 text-start">
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Assets ID</p>
                                    <p className="text-white text-sm">{asset.id}</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Assets Name</p>
                                    <p className="text-white text-sm">{asset.name}</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Assets Description</p>
                                    <p className="text-white text-sm">{asset.description}</p>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-3 border-t border-[#0E1F30]">
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Status</p>
                                    <p className="text-white text-sm">{asset.status?.state}</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Assets Type</p>
                                    <p className="text-white text-sm">{asset.type}</p>
                                </div>
                                <div className="p-4">
                                    <p className="text-[#00A3FF] text-sm">Purchase Date</p>
                                    <p className="text-white text-sm">{asset.purchaseDate}</p>
                                </div>
                            </div>
                        </div>
                        <div className="min-w-[800px] flex py-4">
                            <button className="border-[#00A3FF] py-1.5 px-4 rounded-full text-xs border text-[#00A3FF]">
                                Edit Assets Details
                            </button>
                        </div>
                    </div>
                )}

                {/* Purchase History */}
                {showtable === "Purchase History" && (
                    <div className="text-white px-4 pb-4 min-w-[850px]">
                        <div className="bg-[#152D44] rounded-sm text-start">
                            <table className="text-xs w-full">
                                <thead className="border-b  border-[#0E1F30]">
                                    <tr className="h-10">
                                        <th className="px-5 font-extralight">Purchase Date</th>
                                        <th className="px-5 font-extralight border-r border-[#0E1F30]">Transaction ID</th>
                                        <th className="px-5 font-extralight">Buyer Information</th>
                                        <th className="px-5 font-extralight">User ID</th>
                                        <th className="px-5 font-extralight">User Name</th>
                                        <th className="px-5 font-extralight border-r border-[#0E1F30]">Email</th>
                                        <th className="px-5 font-extralight">Purchase Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {paginatedData.map((item, index) => (
                                        <tr key={index} className="h-12">
                                            <td className="px-3 text-center">{item.date}</td>
                                            <td className="px-3 text-center border-r border-[#0E1F30]">
                                                <button className="border border-[#00A3FF] text-[#00A3FF] rounded-full w-28 text-xs h-6">
                                                    {item.transactionId}
                                                </button>
                                            </td>
                                            <td className="px-3 text-center">
                                                <button className="border border-[#00A3FF] text-[#00A3FF] rounded-full px-3 h-6 text-xs">
                                                    View User
                                                </button>
                                            </td>
                                            <td className="px-3 text-center">{item.userId}</td>
                                            <td className="px-3 text-center">{item.userName}</td>
                                            <td className="px-3 text-center border-r border-[#0E1F30]">{item.email}</td>
                                            <td className="px-3 text-center">{item.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex justify-end items-center p-4 gap-2 border-t border-[#0E1F30]">
                                <button onClick={prevPage} disabled={currentPage === 1}>
                                    <CircleChevronLeft />
                                </button>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goToPage(i + 1)}
                                        className={`px-2 py-1 rounded ${currentPage === i + 1 ? "text-white" : "text-gray-300"}`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                                <button onClick={nextPage} disabled={currentPage === totalPages}>
                                    <CircleChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Transaction History */}
                {showtable === "Transaction History" && (
                   <div className="bg-[#152D44] text-white text-xs rounded-lg overflow-hidden">
                   <div className="overflow-x-auto">
                       <table className="w-full text-left">
                           <thead className=" border-b border-[#0E1F30]">
                               <tr>
                                   <th className="px-6 py-3 font-medium">Date of transaction</th>
                                   <th className="px-6 py-3 font-medium">Transaction ID</th>
                                   <th className="px-6 py-3 font-medium">Amount</th>
                                   <th className="px-6 py-3 font-medium">Status</th>
                                   <th className="px-6 py-3 font-medium"></th>
                               </tr>
                           </thead>
                           <tbody className="">
                               {transactions.map((transaction, index) => (
                                   <tr key={index} className="">
                                       <td className="px-6">{transaction.date}</td>
                                       <td className="px-6">{transaction.id}</td>
                                       <td className="px-6">{transaction.amount}</td>
                                       <td className={`px-6 ${getStatusColor(transaction.status)}`}>
                                           {transaction.status}
                                       </td>
                                       <td className="px-6 py-2 text-right">
                                           <Button
                                           title="View Transaction"
                                           variant="outlineBlue"
                                           className="rounded-full"
                                           />
                                       </td>
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
       
                   {/* Pagination */}
                   <div className="flex items-center justify-end p-4">
                       <button className="flex items-center justify-center rounded-full p-2 text-white">
                           <CircleChevronLeft className="h-6 w-6 text-gray-400" />
                       </button>
       
                       <button className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 1 ? "text-[#00A3FF]" : ""}`}>
                           1
                       </button>
       
                       <button className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 2 ? "text-[#00A3FF]" : ""}`}>
                           2
                       </button>
                       
                       <button className={`mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm ${currentPage === 3 ? "text-[#00A3FF]" : ""}`}>
                           3
                       </button>
       
                       <span className="text-gray-400 mx-1">...</span>
       
                       <button className="mx-1 flex h-8 w-8 items-center justify-center rounded-full text-sm">
                           10
                       </button>
       
                       <button className="flex items-center justify-center rounded-full p-2 text-white">
                           <CircleChevronRight className="h-6 w-6 text-gray-400" />
                       </button>
                   </div>
               </div>
                )}
            </div>
        </div>
    );
};

export default ViewAssetsDetailModal;
