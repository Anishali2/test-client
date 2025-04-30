'use client'

import { ArrowUpDown, Check, CircleChevronLeft, CircleChevronRight, CircleX, SquareCheck, X } from 'lucide-react';
import { useState } from 'react';
import TransactionModal from './transaction-modal';
import { CheckActionIcon, CrosActionIcon } from '@/assets/svgs';

export default function TransactionTable() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('Transaction Info');

    const transactions = [
        { id: "133780776234168", userId: "12175688", type: "Deposit", date: "12 JAN 2024 10:12 am", status: "Successful", amount: "$ 1,200", method: "Bank Transfer", action: "Approved" },
        { id: "133780776234168", userId: "12175688", type: "Withdrawal", date: "12 JAN 2024 10:12 am", status: "Failed", amount: "$ 1,200", method: "Bank Transfer", action: "Retry" },
        { id: "133780776234168", userId: "12175688", type: "Purchase", date: "12 JAN 2024 10:12 am", status: "Pending", amount: "$ 1,200", method: "Bank Transfer", action: "Decision" },
        { id: "133780776234168", userId: "12175688", type: "Deposit", date: "12 JAN 2024 10:12 am", status: "Successful", amount: "$ 1,200", method: "Bank Transfer", action: "Approved" },
        { id: "133780776234168", userId: "12175688", type: "Deposit", date: "12 JAN 2024 10:12 am", status: "Successful", amount: "$ 1,200", method: "Bank Transfer", action: "Approved" },
        { id: "133780776234168", userId: "12175688", type: "Deposit", date: "12 JAN 2024 10:12 am", status: "Successful", amount: "$ 1,200", method: "Bank Transfer", action: "Approved" },
    ];

    const getStatusColor = (status: any) => {
        switch (status) {
            case "Successful": return "text-green-500";
            case "Failed": return "text-red-500";
            case "Pending": return "text-yellow-500";
            default: return "text-white";
        }
    };

    const getActionButton = (action: any) => {
        switch (action) {
            case "Approved":
                return (
                    <div className="flex gap-2 text-green-500">
                        <SquareCheck className='h-4 w-4 text-[#00FF94]' />
                        <span className='text-[#00FF94] text-xs'>Approved</span>
                    </div>
                );
            case "Retry":
                return (
                    <button className=" bg-[#FFD46E] text-black font-medium rounded-full px-6 py-2 text-xs">
                        Retry
                    </button>
                );
            case "Decision":
                return (
                    <div className="flex space-x-4">
                       <CheckActionIcon/>
                       <CrosActionIcon/>
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
        <div className="bg-gray-950 text-white relative">
            <div className="overflow-x-auto rounded-lg">
                {/* Table with rounded corners */}
                <table className="w-full text-left">
                    <thead className='text-xs'>
                        <tr>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300 rounded-tl-2xl">
                                Transaction ID
                            </th>

                            {/* Middle cells */}
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                UserID Associated
                            </th>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                <div className="flex items-center">
                                    Type
                                    <ArrowUpDown size={14} className="ml-1" />
                                </div>
                            </th>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                <div className="flex items-center">
                                    Date and time
                                    <ArrowUpDown size={14} className="ml-1 rotate-180" />
                                </div>
                            </th>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                <div className="flex items-center">
                                    Status
                                    <ArrowUpDown size={14} className="ml-1" />
                                </div>
                            </th>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                Amount
                            </th>
                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300">
                                Method
                            </th>

                            <th className="py-2 px-6 font-medium bg-[#0E1F30] text-gray-300 rounded-tr-2xl">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#050E18] text-xs">
                        {transactions.map((transaction, index) => (
                            <tr key={index} className="border-b border-[#0E1F30]">
                                <td className="py-4 px-6">{transaction.id}</td>
                                <td className="py-4 px-6">{transaction.userId}</td>
                                <td className="py-4 px-6">{transaction.type}</td>
                                <td className="py-4 px-6">{transaction.date}</td>
                                <td className={`py-4 px-6 ${getStatusColor(transaction.status)}`}>
                                    {transaction.status}
                                </td>
                                <td className="py-4 px-6">{transaction.amount}</td>
                                <td className="py-4 px-6">{transaction.method}</td>
                                <td className="py-4 px-6">
                                    <div className="flex items-center">
                                        <button
                                            className="text-[#00A3FF] border-2 border-[#00A3FF] rounded-full px-4 py-1 text-xs mr-2"
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
            <div className="flex justify-end items-center rounded-bl-3xl rounded-br-3xl mb-4 p-4 bg-[#050E18]">
                <button className="bg-gray-800 rounded-full p-2 mr-2 flex items-center justify-center text-white">
                    <CircleChevronLeft />
                </button>

                <button className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 text-sm ${currentPage === 1 ? 'bg-blue-500' : ''}`}>
                    1
                </button>

                <button className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 text-sm ${currentPage === 2 ? 'bg-blue-500' : ''}`}>
                    2
                </button>

                <button className={`w-8 h-8 rounded-full flex items-center justify-center mx-1 text-sm ${currentPage === 3 ? 'bg-blue-500' : ''}`}>
                    3
                </button>

                <span className="text-gray-400 mx-1">...</span>

                <button className="w-8 h-8 rounded-full flex items-center justify-center mx-1 text-sm">
                    10
                </button>

                <button className="bg-gray-800 rounded-full p-2 ml-2 flex items-center justify-center text-white">
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