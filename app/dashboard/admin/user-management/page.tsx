'use client'

import React, { useState } from 'react';
import { Search, ChevronLeft, ChevronRight, MoreHorizontal, AlertCircle } from 'lucide-react';

const UserManagementPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data based on the image
  const users = [
    { id: '15734569', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'USD/GBP', holdings: '50', status: 'Active', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734698', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'ZEC/USD', holdings: '65', status: 'Suspended', kycStatus: 'Need Verification', lastLoginStatus: '12 JAN 2023' },
    { id: '15734596', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'USD/GBP', holdings: '50', status: 'Inactive', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734988', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'ZEC/USD', holdings: '65', status: 'Blocked', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734889', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'USD/GBP', holdings: '50', status: 'Active', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734289', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'ZEC/USD', holdings: '65', status: 'Suspended', kycStatus: 'Need Verification', lastLoginStatus: '12 JAN 2023' },
    { id: '15734789', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'USD/GBP', holdings: '50', status: 'Inactive', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734669', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'ZEC/USD', holdings: '65', status: 'Blocked', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734469', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'USD/GBP', holdings: '50', status: 'Inactive', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
    { id: '15734159', username: 'johndev', name: 'John Doe', email: 'johndoe@example.com', regDate: '12 JAN 2023', assetType: 'ZEC/USD', holdings: '65', status: 'Blocked', kycStatus: 'Approved', lastLoginStatus: '12 JAN 2023' },
  ];

  const getStatusColor = (status: any) => {
    switch (status) {
      case 'Active':
        return 'text-emerald-500';
      case 'Suspended':
        return 'text-amber-500';
      case 'Inactive':
        return 'text-blue-500';
      case 'Blocked':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getKYCStatusColor = (status: any) => {
    switch (status) {
      case 'Approved':
        return 'text-emerald-500';
      case 'Need Verification':
        return 'text-amber-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gradient from-green-400">
              User Management
            </h1>
            <p className="text-sm text-gray-400 mt-1">
              Manage and track user profiles, KYC status, assets, and affiliate activities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-80">
              <input
                type="text"
                placeholder="Search by email, username, userID"
                className="w-full bg-[#0D1622] text-sm text-white rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <div className="absolute inset-y-0 right-3 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 7.65a7.5 7.5 0 010 10.6z" />
                </svg>
              </div>
            </div>

            <button className="flex items-center gap-2 border border-cyan-500 text-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-500 hover:text-white transition">
              Date
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4h10M5 11h14M5 15h14M5 19h14" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-transparent">
          <thead>
            <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
              <th className="py-3 px-2">User ID</th>
              <th className="py-3 px-2">Username</th>
              <th className="py-3 px-2">Name</th>
              <th className="py-3 px-2">Email</th>
              <th className="py-3 px-2">Registration date</th>
              <th className="py-3 px-2">Asset</th>
              <th className="py-3 px-2">Number of holdings</th>
              <th className="py-3 px-2">Status</th>
              <th className="py-3 px-2">KYC</th>
              <th className="py-3 px-2">Last login status</th>
              <th className="py-3 px-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b border-gray-800  xxl:text-xs text-[10px] bgScreen:text-sm">
                <td className="py-4 px-2">{user.id}</td>
                <td className="py-4 px-2">{user.username}</td>
                <td className="py-4 px-2">{user.name}</td>
                <td className="py-4 px-2">{user.email}</td>
                <td className="py-4 px-2">{user.regDate}</td>
                <td className="py-4 px-2">{user.assetType}</td>
                <td className="py-4 px-2">{user.holdings}</td>
                <td className={`py-4 px-2 ${getStatusColor(user.status)}`}>{user.status}</td>
                <td className={`py-4 px-2 ${getKYCStatusColor(user.kycStatus)}`}>{user.kycStatus}</td>
                <td className="py-4 px-2">{user.lastLoginStatus}</td>
                <td className="py-6 px-8">
                  <div className="flex flex-col  gap-2">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white rounded px-3 py-1 text-xs">
                      View Profile
                    </button>
                    <button className="bg-emerald-500 hover:bg-emerald-600 text-white rounded px-3 py-1 text-xs">
                      Suspend
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-4 space-x-1 pb-4">
        <button
          className="p-1 rounded-full border border-gray-600 text-gray-400"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 1 ? 'bg-emerald-500 text-white' : 'text-gray-400'}`}>
          1
        </button>
        <button className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 2 ? 'bg-emerald-500 text-white' : 'text-gray-400'}`}>
          2
        </button>
        <button className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 3 ? 'bg-emerald-500 text-white' : 'text-gray-400'}`}>
          3
        </button>
        <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
        <button className={`w-8 h-8 flex items-center justify-center rounded-full ${currentPage === 10 ? 'bg-emerald-500 text-white' : 'text-gray-400'}`}>
          10
        </button>

        <button
          className="p-1 rounded-full border border-gray-600 text-gray-400"
          onClick={() => setCurrentPage(Math.min(10, currentPage + 1))}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default UserManagementPage;