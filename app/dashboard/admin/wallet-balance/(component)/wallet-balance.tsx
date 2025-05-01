'use client'
import React from "react";
import { ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { statusData } from "./constant";

const WalletBlance = () => {
    const [activeTab, setActiveTab] = useState("user");
    const [currentPage, setCurrentPage] = useState(1);
    const [showtable, setShowtable] = useState("user");

    const handleTable = (value: any) => {
        setShowtable(value);
    };


    const rowsPerPage = 7;


    // Calculate pagination
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = statusData.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(statusData.length / rowsPerPage);

    // Pagination controls
    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };
    const renderContent = () => {
        switch (activeTab) {
            case "user":
                return (
                    <p className="text-white mt-4 flex flex-col">
                        User Wallet Amount:
                        <p className="text-green text-4xl "> $14,200</p>
                    </p>
                );
            case "admin":
                return (
                    <p className="text-white mt-4 flex flex-col">
                        Admin Wallet Amount:
                        <span className="  text-4xl  text-green">$55,000</span>{" "}
                    </p>
                );
            case "stats":
                return (
                    <p className="text-white mt-4 flex flex-col">
                        Statistics:{" "}
                        <span className="  text-4xl text-green">300 Transactions</span>
                    </p>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className=" bg-[#05121E] text-white font-sans p-6">
                <main className="space-y-6">
                    <div className="flex justify-between ">
                        <div className=" text-white w-full rounded-xl flex flex-col gap-6  items-start justify-start">
                            {/* Left text */}
                            <div className="flex justify-between w-full text-center items-center">
                                <h2 className="text-2xl font-semibold">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                                        Wallet Balance & Management
                                    </span>
                                </h2>
                                <p className="text-sm flex text-center justify-end text-[#00A3FF]">Transaction Management <ChevronRight
                                    className="text-white w-4 h-4 my-0.5" /> Failed Transaction</p>
                            </div>
                            <div className="w-full text-gray-400 rounded-lg">
                                <ul className="flex flex-row bg-[#0E1F30] text-center items-center">
                                    <li
                                        className={` p-3 cursor-pointer ${activeTab === "user"
                                            ? "text-green-400 border-r border-[#091520] border-b-4  border-green-400 sami-bold"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            setActiveTab("user");
                                            handleTable("user");
                                        }}
                                    >
                                        User Wallet
                                    </li>
                                    <li
                                        className={` p-3 cursor-pointer border-r border-[#091520] ${activeTab === "admin"
                                            ? " text-green-400 border-b-4  border-green-400 sami-bold"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            setActiveTab("admin");
                                            handleTable("admin");
                                        }
                                        }
                                    >
                                        Admin Wallet
                                    </li>
                                    <li
                                        className={`p-3 cursor-pointer border-r border-[#091520] ${activeTab === "stats"
                                            ? "text-green-400 border-b-4  border-green-400 sami-bold"
                                            : ""
                                            }`}
                                        onClick={() => {
                                            setActiveTab("stats")
                                            handleTable("stats");
                                        }
                                        }
                                    >
                                        Statistics
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full flex justify-between items-end">
                                {renderContent()}
                                <div className="relative p-4">
                                    <input
                                        type="text"
                                        placeholder="Search by email, username, ID..."
                                        className="w-[450px] px-4 py-2 rounded-full bg-[#0E1F30] placeholder:text-[#00A3FF] focus:outline-none"
                                    />
                                    <Search className="absolute right-7 bottom-4 transform -translate-y-1/2 text-white w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {showtable === "user" && (
                        <div className="bg-[#050E18] rounded-3xl overflow-x-auto">
                            <table className="min-w-full text-xs text-left">
                                <thead className="bg-[#0E1F30] text-gray-400">
                                    <tr className=''>
                                        <th className="p-4">Transaction ID</th>
                                        <th className="p-4">User ID</th>
                                        <th className="p-4">Type</th>
                                        <th className="p-4">Date/Time</th>
                                        <th className="p-4">Status</th>
                                        <th className="p-4">Amount</th>
                                        <th className="p-4">Method</th>
                                        <th className="p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-white">
                                    {currentRows.map((status, i) => (
                                        <tr key={i} className="border-b h-14 border-[#1a2f40]">
                                            <td className="p-4">{status.id}</td>
                                            <td className="p-4">{status.userId}</td>
                                            <td className="p-4">{status.type}</td>
                                            <td className="p-4">{status.dateTime}</td>
                                            <td className={`p-4 ${status.status === "Successful" ? "text-green-400" : "text-red-500"}`}>{status.status}</td>
                                            <td className="p-4">{status.amount}</td>
                                            <td className="p-4">{status.method}</td>
                                            <td className="gap-4 flex justify-center py-3">
                                                <button className="items-center text-center border-[#00A3FF] w-20 h-7 rounded-full text-xs border text-[#00A3FF]">View User</button>
                                                <button className={`items-center text-center px-4 py-1 rounded-full text-xs text-[#05121E] ${status.status === "unlock" ? "bg-gradient-to-r from-[#FFD46E] to-[#FFD46E]" : "bg-gradient-to-r from-[#FF7337] to-[#CE0000]"}`}> {status.status === "lock" ? "Lock" : "Unlock"}</button>
                                                <button className="text-black  px-4 py-1 rounded-full text-xs bg-gradient-to-r from-[#00FF94] to-[#00A3FF]">Transfer Amount</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <tfoot className='flex justify-end'>
                                <tr className="h-14 w-full flex gap-4 items-center justify-end p-4 border-t border-[#1a2f40]">
                                    <button onClick={goToPrevPage} disabled={currentPage === 1} className="text-white hover:text-blue-400 disabled:opacity-50">
                                        <CircleChevronLeft />
                                    </button>
                                    <p className="text-white">{currentPage}</p>
                                    <p className="text-white">/</p>
                                    <p className="text-white">{totalPages}</p>
                                    <button onClick={goToNextPage} disabled={currentPage === totalPages} className="text-white hover:text-blue-400 disabled:opacity-50">
                                        <CircleChevronRight />
                                    </button>
                                </tr>
                            </tfoot>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}

export default WalletBlance;