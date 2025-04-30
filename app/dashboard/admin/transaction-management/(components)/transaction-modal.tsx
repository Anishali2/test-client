'use client'

import { useState } from 'react';
import { CircleX, Check, X, CircleChevronLeft, CircleChevronRight } from 'lucide-react';

interface TransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function TransactionModal({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
}: TransactionModalProps) {
  if (!isOpen) return null;

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Transaction Info':
        return (
          <div className="mt-2">
            <div className="bg-[#152D44] p-4 rounded-lg mt-2">
              <div className="grid grid-cols-4 gap-4 border-b border-[#0E1F30] pb-4">
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Transaction ID</p>
                  <p className="text-white text-sm">133780776234168</p>
                </div>
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Date and time</p>
                  <p className="text-white text-sm">12 JAN 2024 10:12 am</p>
                </div>
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Amount</p>
                  <p className="text-white text-sm">$ 1,200</p>
                </div>
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Transaction Type</p>
                  <p className="text-white text-sm">Deposit</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Status</p>
                  <p className="text-green-500 text-sm">Successful</p>
                </div>
                <div>
                  <p className="text-[#00A3FF] text-xs mb-1">Transaction Method</p>
                  <p className="text-white text-sm">Bank Transfer</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6 text-xs">
              <button className="bg-[#00FF94] text-black font-medium rounded-full px-6 py-2 ">
                Approve
              </button>
              <button className="bg-red-500 text-white font-medium rounded-full px-6 py-2 ">
                Reject
              </button>
              <button className="bg-[#FFD46E] text-black font-medium rounded-full px-6 py-2 ">
                Retry
              </button>
            </div>
          </div>

        );

      case 'User Details':
        return (
          <>
          <div className="bg-[#152D44] p-4 rounded-lg mt-2">
            {/* Top Row: 4 items */}
            <div className="grid grid-cols-4 gap-4 border-b border-[#0E1F30] pb-4">
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">User ID</p>
                <p className="text-white text-sm">12175688</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Username</p>
                <p className="text-white text-sm">John Doe</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Email</p>
                <p className="text-white text-sm">johndoe@gmail.com</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Wallet Address</p>
                <p className="text-white text-sm">1A1zP1eP5QGefi2DMP.....0x3</p>
              </div>
            </div>

            {/* Bottom Row: 2 items */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Registration Date</p>
                <p className="text-white text-sm">12 JAN 2024</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">KYC Status</p>
                <p className="text-green-500 text-sm">Approved</p>
              </div>
            </div>
          </div>
            {/* Button */}
            <div className="mt-6">
              <button className="border border-[#00A3FF] text-[#00A3FF] font-medium rounded-full px-5 py-1 text-xs hover:bg-[#001c33] transition">
                View Full User Profile
              </button>
            </div>
          </>
        );

      case 'Transaction Breakdown':
        return (
          <div className="p-4 rounded-lg mt-2">
            <div className="grid grid-cols-4 gap- mb-6  bg-[#152D44] p-4 rounded-lg">
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Fees applied</p>
                <p className="text-white text-sm">$ 1,200</p>
              </div>
              <div>
              <p className="text-gray-400 text-xs mt-5">:: Bank Transfer</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Meta-asset involved</p>
                <p className="text-white text-sm">Lorem Ipsum</p>
              </div>
              <div>
                <p className="text-[#00A3FF] text-xs mb-1">Exchange rate</p>
                <p className="text-white text-sm">1 RV = 0.00600 USD</p>
              </div>
            </div>
            <p className="text-white text-sm mb-4">Wallet balance</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#152D44] p-4 rounded-lg">
                <p className="text-[#00A3FF] text-xs mb-1">Before Transaction</p>
                <p className="text-white text-sm">$ 56,200</p>
              </div>
              <div className="bg-[#152D44] p-4 rounded-lg">
                <p className="text-[#00A3FF] text-xs mb-1">After Transaction</p>
                <p className="text-white text-sm">$ 57,400</p>
              </div>
            </div>
          </div>
        );

      case 'Transaction History':
        return (
          <div className="bg-[#0E1F30] p-4 rounded-lg mt-2">
            <table className="w-full">
              <thead>
                <tr className="text-gray-400 text-xs border-b border-gray-700">
                  <th className="py-2 text-left">Date of Action</th>
                  <th className="py-2 text-left">IP and Location</th>
                  <th className="py-2 text-left">Admin Actions</th>
                  <th className="py-2 text-left">Status Change Log</th>
                </tr>
              </thead>
              <tbody className="text-white text-xs">
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-3">
                      <p>12 JAN 2024</p>
                      <p className="text-gray-400 text-xs">:: Lorem Ipsum</p>
                    </td>
                    <td className="py-3">
                      <p>128.1.123.970</p>
                      <p className="text-gray-400 text-xs">:: France</p>
                    </td>
                    <td className="py-3">Lorem Ipsum</td>
                    <td className="py-3">Lorem Ipsum</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end items-center mt-4">
              <button className="rounded-full p-1 mr-1">
                <CircleChevronLeft size={20} />
              </button>
              <button className="text-sm mx-1 text-green-500">1</button>
              <button className="text-sm mx-1">2</button>
              <button className="text-sm mx-1">3</button>
              <span className="mx-1">...</span>
              <button className="text-sm mx-1">10</button>
              <button className="rounded-full p-1 ml-1">
                <CircleChevronRight size={20} />
              </button>
            </div>
          </div>
        );

      case 'Transaction Status':
        return (
          <div className="bg-[#0E1F30] p-4 rounded-lg mt-2">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#081624] p-4 rounded-lg">
                <p className="text-[#00A3FF] text-xs mb-1">Real-time view of the current transaction status</p>
                <p className="text-green-500 text-sm">Completed</p>
              </div>
              <div className="bg-[#081624] p-4 rounded-lg">
                <p className="text-[#00A3FF] text-xs mb-1">Pending Duration</p>
                <p className="text-white text-sm">--</p>
              </div>
            </div>
            <div className="bg-[#081624] p-4 rounded-lg">
              <p className="text-[#00A3FF] text-xs mb-1">Error message</p>
              <p className="text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-[#050F19] bg-opacity-70" onClick={onClose}></div>
      <div className="bg-[#0A1929] rounded-xl w-full p-2 max-w-4xl mx-4 z-10 relative">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-gradient text-xl font-medium">View Transaction Details</h2>
          <button onClick={onClose} className="text-white p-1 rounded-full hover:bg-gray-700">
            <CircleX />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-gray-700">
          {['Transaction Info', 'User Details', 'Transaction Breakdown', 'Transaction History', 'Transaction Status'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 text-sm ${activeTab === tab ? 'text-[#00FF94] border-b-2 border-[#00FF94]' : 'text-gray-400'
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-4">{renderTabContent()}</div>
      </div>
    </div>
  );
}
