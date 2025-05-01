"use client";
import React from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { transactionData } from "./constant";
import { FailTransactionIcon } from "@/assets/svgs";
import { usePathname } from "next/navigation";

const FailedTransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const pathname = usePathname();

  const formatPath = (path: string) => {
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());
  };

  const totalPages = Math.ceil(transactionData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = transactionData.slice(
    startIndex,
    startIndex + rowsPerPage,
  );

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
    <div className=" bg-[#05121E] px-2 pt-5 font-sans text-white">
      <main className="space-y-6">
        <div className="flex flex-row justify-between ">
          <div>
            <div className=" flex flex-col items-start justify-start gap-6 rounded-xl text-white">
              {/* Left text */}
              <div className="flex">
                <h2 className="text-gradient text-2xl font-semibold">
                  Failed Transaction
                </h2>
              </div>
              {/* Right icon and button */}
              <div className="flex items-center gap-4">
                <FailTransactionIcon />
                <div className="flex flex-col justify-start text-start">
                  <p className="mb-1 text-sm">Failed Transaction</p>
                  <p className="text-gradient-to flex text-start text-3xl text-[#CE0000]">
                    56
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-end  justify-end p-4 px-0">
            <div className="flex h-full w-full flex-col justify-between">
              <p className="flex justify-end text-center text-sm text-[#00A3FF]">
                Transaction Management{" "}
                <ChevronRight className="my-0.5 h-4 w-4 text-white" />{" "}
                {formatPath(pathname)}
              </p>

              <input
                type="text"
                placeholder="Search by email, username, ID..."
                className="w-[480px] rounded-full bg-[#0E1F30] px-4 py-2  outline-none placeholder:text-[#00A3FF]"
              />
              <Search className="absolute bottom-4 right-7 h-5 w-5 -translate-y-1/2 transform text-white" />
            </div>
          </div>
        </div>
        {/* table */}
        <div className="rounded-4xl overflow-x-auto rounded-2xl bg-[#050E18]">
          <table className="min-w-full text-left text-xs">
            <thead className="text-gray-400 bg-[#0E1F30]">
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
                <tr key={i} className="h-14 border-b border-[#1a2f40]">
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.userId}</td>
                  <td className="p-4">{item.type}</td>
                  <td className="p-4">{item.dateTime}</td>
                  <td
                    className={`p-4 ${
                      item.status === "Successful"
                        ? "text-green-400"
                        : "text-[#CE0000]"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="p-4">{item.amount}</td>
                  <td className="p-4">{item.method}</td>
                  <td className="flex items-center justify-center gap-4 py-3 text-center">
                    <button className="rounded-full border border-[#00A3FF] px-6 py-1 text-xs text-[#00A3FF]">
                      View
                    </button>
                    <button
                      className={`rounded-full bg-gradient-to-r from-[#FFD46E] to-[#FF7337] px-6 py-1 text-xs text-[#05121E] `}
                    >
                      Retry
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 p-4 text-white">
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
                className={`rounded px-2 py-1 ${
                  currentPage === i + 1 ? " text-white" : "text-gray-300"
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
};
export default FailedTransactionTable;
