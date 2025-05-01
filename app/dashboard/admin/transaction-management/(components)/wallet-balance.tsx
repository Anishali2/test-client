"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Bell,
  CircleArrowRight,
  CircleChevronRight,
} from "lucide-react";
import { AlertTransactionIcon, FailTransactionIcon } from "@/assets/svgs";
import Link from "next/link";

const WalletBalance = () => {
  const [activeTab, setActiveTab] = useState("Admin");
  const transactionStats = [
    { label: "Track Daily", deposits: "$ 51,340", withdrawals: "$ 23,100" },
    { label: "Track Weekly", deposits: "$ 51,340", withdrawals: "$ 23,100" },
    { label: "Track Monthly", deposits: "$ 51,340", withdrawals: "$ 23,100" },
  ];

  return (
    <div className=" p-6 px-0 text-white">
      <div className="mb-6">
        <h1 className="text-gradient text-2xl font-bold">
          Transaction Management
        </h1>
        <p className="text-gray-300 text-sm">
          Oversee and manage all financial transactions on the platform,
          including deposits, withdrawals, and purchases.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Wallet Balance Card */}
        <div className="rounded-[20px] border border-transparent bg-[#0E1F30] p-6">
          <div className="mb-4">
            <div className="border-gray-800 flex justify-between">
              <h2 className="text-gradient mr-8 text-base">Wallet Balances</h2>
              <div className="flex">
                <button
                  className={`px-4 pb-2 text-sm ${activeTab === "Admin" ? "border-b-2 border-teal-400" : "text-gray-400"}`}
                  onClick={() => setActiveTab("Admin")}
                >
                  Admin
                </button>
                <button
                  className={`px-4 pb-2 text-sm ${activeTab === "Spender" ? "border-b-2 border-teal-400" : "text-gray-400"}`}
                  onClick={() => setActiveTab("Spender")}
                >
                  Spender
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 mb-4  flex flex-col gap-3 rounded-xl border border-transparent bg-[#152D44] p-4">
            <div className="text-gray-300 mb-1 text-sm">Available Balance</div>
            <div className="text-4xl font-bold text-teal-400">$ 256,250</div>
            <Link href="/dashboard/admin/transaction-management/wallet-balance">
              <button className="w-fit  rounded-full bg-teal-400 px-6 py-2 text-sm font-medium text-black hover:bg-teal-500">
                Manage
              </button>
            </Link>
          </div>
        </div>

        {/* Tracking Card */}
        <div className="rounded-xl border border-transparent bg-[#0E1F30] p-6">
          <div className="mb-2">
            <div className="grid grid-cols-1 sm:grid-cols-3">
              <button className="text-gradient text-base">Track daily</button>
              <button className="text-gradient ml-1 pb-1 text-base">
                Track Weekly
              </button>
              <button className="text-gradient ml-2 pb-1 text-base">
                Track Monthly
              </button>
            </div>
          </div>

          {/* Track Transactions */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {transactionStats.map((item, index) => (
              <div
                key={index}
                className="space-y-4 rounded-lg  bg-[#152D44] text-sm"
              >
                <div className="border-b border-[#0E1F30] p-4">
                  <div className="text-gray-300">Deposits</div>
                  <div className="font-semibold text-[#00FF94]">
                    {item.deposits}
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-gray-300">Withdrawals</div>
                  <div className="font-semibold text-[#FF3D3D]">
                    {item.withdrawals}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Failed Transactions Card */}
        <div className="flex items-center rounded-xl bg-[#0E1F30] px-4 ">
          <div className="mr-4">
            <FailTransactionIcon />
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-300 mb-1">Failed Transactions</h2>
            <div className="mt-10 text-3xl font-bold text-red-500">56</div>
          </div>

          <Link
            href={`/dashboard/admin/transaction-management/failed-transaction`}
          >
            <button className="mt-16 rounded-full bg-teal-400 px-4 py-2 text-sm font-medium text-black hover:bg-teal-500">
              Take Action
            </button>
          </Link>
        </div>

        {/* Alerts Card */}
        <div className="flex items-start rounded-[20px] bg-[#0E1F30] p-4">
          <div className="bg-orange-500/30 mr-4 rounded-full p-4">
            <AlertTransactionIcon />
          </div>
          <div className="flex-grow">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-gray-300 text-sm">Alert</h2>
              <button className="text-gray-300 flex text-xs ">
                See All
                <CircleChevronRight className="ml-2 h-3 w-3" />
              </button>
            </div>
            <div className="rounded-xl bg-[#152D44] p-2 text-xs">
              <p className="border-b border-[#0E1F30] pb-2  text-[#00A3FF]">
                John Doe has a failure for transaction, please check it out what
              </p>
              <p className="mt-2 text-[#00A3FF]">
                Your balance is low under $10,000. Please deposit to your
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
