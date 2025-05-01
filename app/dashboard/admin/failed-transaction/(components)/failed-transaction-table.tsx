'use client'
import React from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { transactionData } from "./constant";
import { FailTransactionIcon } from "@/assets/svgs";


const FailedTransactionTable = () => {


    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10;

    const totalPages = Math.ceil(transactionData.length / rowsPerPage);
    const startIndex = (currentPage - 1) * rowsPerPage;
    const currentData = transactionData.slice(startIndex, startIndex + rowsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (page: any) => {
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };



    return (
        <div className=" bg-[#05121E] text-white font-sans pt-5 px-2">
            <main className="space-y-6">
                <div className="flex flex-row justify-between ">
                    <div>
                        <div className=" text-white rounded-xl flex flex-col gap-6 items-start justify-start">
                            {/* Left text */}
                            <div className="flex">
                                <h2 className="text-2xl font-semibold text-gradient">
                                    Failed Transaction
                                </h2>
                            </div>
                            {/* Right icon and button */}
                            <div className="flex items-center gap-4">
                                <FailTransactionIcon />
                                <div className="text-start flex flex-col justify-start">
                                    <p className="text-sm mb-1">Failed Transaction</p>
                                    <p className="text-3xl text-start text-gradient-to text-[#CE0000] flex">
                                        56
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative p-4 px-0  flex justify-end items-end">
                        <div className="flex flex-col h-full w-full justify-between">
                            <p className="text-sm flex text-center justify-end text-[#00A3FF]">Transaction Management <ChevronRight className="text-white w-4 h-4 my-0.5" /> Failed Transaction</p>

                            <input
                                type="text"
                                placeholder="Search by email, username, ID..."
                                className="w-[480px] px-4 py-2 rounded-full bg-[#0E1F30]  placeholder:text-[#00A3FF] outline-none"
                            />
                            <Search className="absolute right-7 bottom-4 transform -translate-y-1/2 text-white w-5 h-5" />
                        </div>
                    </div>
                </div>
                {/* table */}
                <div className="bg-[#050E18] rounded-4xl overflow-x-auto rounded-2xl">
                    <table className="min-w-full text-xs text-left">
                        <thead className="bg-[#0E1F30] text-gray-400">
                            <tr className="">
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
                            {currentData.map((item, i) => (
                                <tr key={i} className="border-b h-14 border-[#1a2f40]">
                                    <td className="p-4">{item.id}</td>
                                    <td className="p-4">{item.userId}</td>
                                    <td className="p-4">{item.type}</td>
                                    <td className="p-4">{item.dateTime}</td>
                                    <td
                                        className={`p-4 ${item.status === "Successful"
                                            ? "text-green-400"
                                            : "text-[#CE0000]"
                                            }`}
                                    >
                                        {item.status}
                                    </td>
                                    <td className="p-4">{item.amount}</td>
                                    <td className="p-4">{item.method}</td>
                                    <td className="gap-4 flex py-3 justify-center items-center text-center">
                                        <button className="border-[#00A3FF] py-1 px-6 rounded-full text-xs border text-[#00A3FF]">
                                            View
                                        </button>
                                        <button
                                            className={`py-1 px-6 rounded-full text-xs text-[#05121E] bg-gradient-to-r from-[#FFD46E] to-[#FF7337] `}
                                        >
                                            Retry
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Pagination */}
                    <div className="flex justify-end items-center p-4 gap-2 text-white">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className="hover:text-blue-400 disabled:opacity-50"
                        >
                            <CircleChevronLeft />
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button
                                key={i}
                                onClick={() => goToPage(i + 1)}
                                className={`px-2 py-1 rounded ${currentPage === i + 1 ? " text-white" : "text-gray-300"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className="hover:text-blue-400 disabled:opacity-50"
                        >
                            <CircleChevronRight />
                        </button>
                    </div>
                </div>









            </main>
        </div>
    );
}
export default FailedTransactionTable
