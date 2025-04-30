'use client'

import { useState } from 'react';
import { AlertTriangle, Bell, CircleArrowRight, CircleChevronRight } from 'lucide-react';

const WalletBalance = () => {
    const [activeTab, setActiveTab] = useState('Admin');
    const transactionStats = [
        { label: "Track Daily", deposits: "$ 51,340", withdrawals: "$ 23,100" },
        { label: "Track Weekly", deposits: "$ 51,340", withdrawals: "$ 23,100" },
        { label: "Track Monthly", deposits: "$ 51,340", withdrawals: "$ 23,100" },
    ];

    return (
        <div className=" text-white p-6 px-0">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gradient">Transaction Management</h1>
                <p className="text-gray-300 text-sm">Oversee and manage all financial transactions on the platform, including deposits, withdrawals, and purchases.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Wallet Balance Card */}
                <div className="bg-[#0E1F30] rounded-[20px] p-6 border border-transparent">
                    <div className="mb-4">
                        <div className="flex justify-between border-gray-800">
                            <h2 className="text-gradient mr-8 text-base">Wallet Balances</h2>
                            <div className="flex">
                                <button
                                    className={`px-4 pb-2 text-sm ${activeTab === 'Admin' ? 'border-b-2 border-teal-400' : 'text-gray-400'}`}
                                    onClick={() => setActiveTab('Admin')}
                                >
                                    Admin
                                </button>
                                <button
                                    className={`px-4 pb-2 text-sm ${activeTab === 'Spender' ? 'border-b-2 border-teal-400' : 'text-gray-400'}`}
                                    onClick={() => setActiveTab('Spender')}
                                >
                                    Spender
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-xl  p-4 mb-4 border border-transparent bg-[#152D44] flex flex-col gap-3">
                        <div className="text-sm text-gray-300 mb-1">Available Balance</div>
                        <div className="text-4xl text-teal-400 font-bold">$ 256,250</div>

                        <button className="bg-teal-400  w-fit hover:bg-teal-500 text-black font-medium rounded-full px-6 py-2 text-sm">
                            Manage
                        </button>
                    </div>


                </div>

                {/* Tracking Card */}
                <div className="bg-[#0E1F30] rounded-xl p-6 border border-transparent">
                    <div className="mb-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3">
                            <button className="text-gradient text-base">Track daily</button>
                            <button className="text-gradient pb-1 text-base ml-1">Track Weekly</button>
                            <button className="text-gradient pb-1 text-base ml-2">Track Monthly</button>
                        </div>

                    </div>

                    {/* Track Transactions */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        {transactionStats.map((item, index) => (
                            <div key={index} className="bg-[#152D44] rounded-lg  space-y-4 text-sm">

                                <div className="border-b border-[#0E1F30] p-4">
                                    <div className="text-gray-300">Deposits</div>
                                    <div className="text-[#00FF94] font-semibold">{item.deposits}</div>
                                </div>
                                <div className='p-4'>
                                    <div className="text-gray-300">Withdrawals</div>
                                    <div className="text-[#FF3D3D] font-semibold">{item.withdrawals}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Failed Transactions Card */}
                <div className="bg-[#0E1F30] rounded-xl p-4 flex items-center ">
                    <div className="bg-red-900/30 p-4 rounded-full mr-4">
                        <AlertTriangle className="text-red-500" size={24} />
                    </div>
                    <div className="flex-grow">
                        <h2 className="text-gray-300 mb-1">Failed Transactions</h2>
                        <div className="text-3xl font-bold text-red-500 ">56</div>
                    </div>
                    <button className="bg-teal-400 hover:bg-teal-500 text-black font-medium rounded-full px-4 py-2 text-sm">
                        Take Action
                    </button>
                </div>

                {/* Alerts Card */}
                <div className="bg-[#0E1F30] rounded-[20px] p-4 flex items-start">
                    <div className="bg-orange-500/30 p-4 rounded-full mr-4">
                        <Bell className="text-orange-400" size={24} />
                    </div>
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-gray-300 text-sm">Alert</h2>
                            <button className="text-xs text-gray-300 flex ">
                                See All
                                <CircleChevronRight className="ml-2 h-3 w-3" />
                            </button>
                        </div>
                        <div className="text-xs bg-[#152D44] rounded-xl p-2">
                            <p className="text-[#00A3FF] pb-2 border-b  border-[#0E1F30]">John Doe has a failure for transaction, please check it out what happened!</p>
                            <p className="text-[#00A3FF] mt-2">Your balance is low under $10,000. Please deposit to your wallet.</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default WalletBalance
