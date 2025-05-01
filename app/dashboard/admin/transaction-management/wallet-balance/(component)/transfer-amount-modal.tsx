"use client";
import React, { useState } from "react";
import { CircleX, X } from "lucide-react";
import { ArrowSquareDownIcon, MoneyReciveIcon, MoneySendIcon } from "@/assets/svgs";
import { Button } from "@/components/shared";

interface TransferAmountModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TransferAmountModal: React.FC<TransferAmountModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [activeTab, setActiveTab] = useState<"add" | "withdraw">("add");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-4xl rounded-lg bg-[#0E1F30] p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gradient">Transfer Amount Tool</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white">
                    <CircleX />
                    </button>
                </div>

                <div className="flex flex-col">
                    {/* Tabs on the left side */}
                    <div className="flex">
                        <div className="flex items-center mr-8">
                            <div className="flex flex-col gap-6 text-xs">
                                <button
                                    onClick={() => setActiveTab("add")}
                                    className={`flex items-center space-x-2 ${activeTab === "add" ? "text-[#00FF94]" : "text-gray-400"
                                        }`}
                                >

                                    <MoneySendIcon />

                                    <span>Add</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab("withdraw")}
                                    className={`flex items-center space-x-2 ${activeTab === "withdraw" ? "text-[#00FF94]" : "text-gray-400"
                                        }`}
                                >
                                   <MoneyReciveIcon/>
                                    <span>Withdraw</span>
                                </button>
                            </div>
                        </div>

                        {/* Form section */}
                        <div className="flex-1 bg-[#152D44] p-4 rounded-md">
                            {/* Header row with labels */}
                            <div className="flex mb-2 text-sm">
                                <div className="flex-1 px-2">From</div>
                                <div className="flex-1 px-2">Amount</div>
                                <div className="flex-1 px-2">To</div>
                            </div>

                            {/* Form fields */}
                            <div className="flex">
                                <div className="flex-1 px-2 ">
                                    {activeTab === "add" ? (
                                        <div className="flex items-center text-xs justify-between rounded bg-[#091520] p-2 text-[#00A3FF]">
                                            <span>Company wallets - Main</span>
                                            <ArrowSquareDownIcon />
                                        </div>
                                    ) : (
                                        <input
                                            type="text"
                                            placeholder="Enter Username"
                                            className="w-full placeholder:text-xs rounded bg-[#091520] p-2 text-[#00A3FF] placeholder:text-[#00A3FF] focus:outline-none"
                                        />
                                    )}
                                </div>
                                <div className="flex-1 px-2">
                                    <input
                                        type="text"
                                        placeholder="Enter Amount"
                                        className="w-full placeholder:text-xs rounded bg-[#091520] p-2 text-[#00A3FF] placeholder:text-[#00A3FF] focus:outline-none"
                                    />
                                </div>
                                <div className="flex-1 px-2 text-xs">
                                    {activeTab === "add" ? (
                                        <input
                                            type="text"
                                            placeholder="Enter Username"
                                            className="w-full placeholder:text-xs rounded bg-[#091520] p-2 text-[#00A3FF] placeholder:text-[#00A3FF] focus:outline-none"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-between rounded bg-[#091520] p-2 text-[#00A3FF]">
                                            <span>Company wallets - Main</span>
                                            <ArrowSquareDownIcon />

                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <Button
                  title="confirm"
                  className="rounded-full text-xs"
                  ></Button>
                </div>
            </div>
        </div>
    );
};

export default TransferAmountModal;