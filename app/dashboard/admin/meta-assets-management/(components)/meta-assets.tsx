"use client";
import React from "react";
// import Asset from './Asset';
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import { useState } from "react";
import { transactionData } from "./constant";
import { ChevronRight, Search } from "lucide-react";
import ViewAssetsDetailModal from "./view-assets-detail-modal";
import { Button } from "@/components/shared";
import MetaAssetsTable from "./meta-assets-table";

const MetaAssets = () => {



    return (
        <>

            <div className=" p-2">
                <main className="space-y-6">
                    <div className="flex flex-col justify-between ">
                        <div className=" text-white rounded-xl flex flex-col gap-6 items-start justify-start">
                            {/* Left text */}
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-semibold">
                                    <span className="text-gradient text-base">
                                        Meta-Assets management
                                    </span>
                                </h2>
                                <p className="my-2 text-sm">
                                    Manage and track all meta-asstes on the plateform, including
                                    adding and removing assetsfar users
                                </p>
                            </div>
                            {/* Right icon and button */}
                        </div>
                        <div className=" text-white  flex gap-6   justify-between">
                            <div className="bg-[#0E1F30] w-full rounded-[20px] flex justify-between  items-center p-3">
                                <h3>
                                    <span className="text-gradient text-base ">
                                        Meta-Assets management
                                    </span>
                                </h3>
                                <Button
                                    variant="primary"
                                    title="Add"
                                    className="px-5 rounded-full"
                                />
                            </div>
                            <div className="bg-[#0E1F30]  w-full rounded-[20px]  flex justify-between items-center p-3">
                                <h3 className="flex items-center gap-2" >
                                    <span className="text-gradient">
                                        Track Asset Growth
                                    </span>
                                    <span className="text-xs truncate">
                                        Weekly/monthly reports on new purchases
                                    </span>
                                </h3>
                                <Button
                                    variant="primary"
                                    title="View Report"
                                    className="px-5 rounded-full"
                                />
                            </div>
                        </div>

                        <div className="relative p-4 mt-5 flex justify-end items-end">
                            <input
                                type="text"
                                placeholder="Search by email, username, ID..."
                                className="w-96 px-4 py-2 rounded-full bg-[#0E1F30]  placeholder:text-[#00A3FF] outline-none"
                            />
                            <Search className="absolute right-7 bottom-4 transform -translate-y-1/2 text-white w-5 h-5" />
                        </div>
                    </div>
                </main> 
                
            </div>
            <MetaAssetsTable/>

        </>
    );
}


export default MetaAssets
