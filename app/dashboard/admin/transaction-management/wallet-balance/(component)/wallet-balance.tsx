"use client";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronRight, Search } from "lucide-react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { statusData } from "./constant";

const WalletBlance = () => {
  const [activeTab, setActiveTab] = useState("user");
  const [currentPage, setCurrentPage] = useState(1);
  const [showtable, setShowtable] = useState("user");

  const handleTable = (value: any) => {
    setShowtable(value);
  };

  const pathname = usePathname();

  const formatPath = (path: string) => {
    const segments = path.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char: string) => char.toUpperCase());
  };

  const rowsPerPage = 7;

  // Calculate pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = statusData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(statusData.length / rowsPerPage);

  // Pagination controls
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };
  const renderContent = () => {
    switch (activeTab) {
      case "user":
        return (
          <p className="mt-4 flex flex-col text-white">
            User Wallet Amount:
            <p className="text-4xl text-green "> $14,200</p>
          </p>
        );
      case "admin":
        return (
          <p className="mt-4 flex flex-col text-white">
            Admin Wallet Amount:
            <span className="  text-4xl  text-green">$55,000</span>{" "}
          </p>
        );
      case "stats":
        return (
          <p className="mt-4 flex flex-col text-white">
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
      <div className=" bg-[#05121E] p-6 font-sans text-white">
        <main className="space-y-6">
          <div className="flex justify-between ">
            <div className=" flex w-full flex-col items-start justify-start gap-6  rounded-xl text-white">
              {/* Left text */}
              <div className="flex w-full items-center justify-between text-center">
                <h2 className="text-2xl font-semibold">
                  <span className=" text-gradient bg-clip-text">
                    Wallet Balance & Management
                  </span>
                </h2>
                <p className="flex justify-end text-center text-sm text-[#00A3FF]">
                  Transaction Management{" "}
                  <ChevronRight className="my-0.5 h-4 w-4 text-white" />
                  {formatPath(pathname)}
                </p>
              </div>
              <div className="text-gray-400 w-full rounded-lg">
                <ul className="flex flex-row items-center bg-[#0E1F30] text-center">
                  <li
                    className={` cursor-pointer p-3 ${
                      activeTab === "user"
                        ? "text-green-400 border-green-400 sami-bold border-b-4  border-r border-[#091520]"
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
                    className={` cursor-pointer border-r border-[#091520] p-3 ${
                      activeTab === "admin"
                        ? " text-green-400 border-green-400  sami-bold border-b-4"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveTab("admin");
                      handleTable("admin");
                    }}
                  >
                    Admin Wallet
                  </li>
                  <li
                    className={`cursor-pointer border-r border-[#091520] p-3 ${
                      activeTab === "stats"
                        ? "text-green-400 border-green-400  sami-bold border-b-4"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveTab("stats");
                      handleTable("stats");
                    }}
                  >
                    Statistics
                  </li>
                </ul>
              </div>
              <div className="flex w-full items-end justify-between">
                {renderContent()}
                <div className="relative p-4">
                  <input
                    type="text"
                    placeholder="Search by email, username, ID..."
                    className="w-[450px] rounded-full bg-[#0E1F30] px-4 py-2 placeholder:text-[#00A3FF] focus:outline-none"
                  />
                  <Search className="absolute bottom-4 right-7 h-5 w-5 -translate-y-1/2 transform text-white" />
                </div>
              </div>
            </div>
          </div>
          {showtable === "user" && (
            <div className="overflow-x-auto rounded-3xl bg-[#050E18]">
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
                  {currentRows.map((status, i) => (
                    <tr key={i} className="h-14 border-b border-[#1a2f40]">
                      <td className="p-4">{status.id}</td>
                      <td className="p-4">{status.userId}</td>
                      <td className="p-4">{status.type}</td>
                      <td className="p-4">{status.dateTime}</td>
                      <td
                        className={`p-4 ${status.status === "Successful" ? "text-green-400" : "text-red-500"}`}
                      >
                        {status.status}
                      </td>
                      <td className="p-4">{status.amount}</td>
                      <td className="p-4">{status.method}</td>
                      <td className="flex justify-center gap-4 py-3">
                        <button className="h-7 w-20 items-center rounded-full border border-[#00A3FF] text-center text-xs text-[#00A3FF]">
                          View User
                        </button>
                        <button
                          className={`items-center rounded-full px-4 py-1 text-center text-xs text-[#05121E] ${status.status === "unlock" ? "bg-gradient-to-r from-[#FFD46E] to-[#FFD46E]" : "bg-gradient-to-r from-[#FF7337] to-[#CE0000]"}`}
                        >
                          {" "}
                          {status.status === "lock" ? "Lock" : "Unlock"}
                        </button>
                        <button className="rounded-full  bg-gradient-to-r from-[#00FF94] to-[#00A3FF] px-4 py-1 text-xs text-black">
                          Transfer Amount
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <tfoot className="flex justify-end">
                <tr className="flex h-14 w-full items-center justify-end gap-4 border-t border-[#1a2f40] p-4">
                  <button
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                    className="hover:text-blue-400 text-white disabled:opacity-50"
                  >
                    <CircleChevronLeft />
                  </button>
                  <p className="text-white">{currentPage}</p>
                  <p className="text-white">/</p>
                  <p className="text-white">{totalPages}</p>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                    className="hover:text-blue-400 text-white disabled:opacity-50"
                  >
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
};

export default WalletBlance;
