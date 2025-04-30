import React from 'react'
import WalletBalance from './(components)/wallet-balance'
import TransactionsTable from './(components)/transaction-table'

const TransactionMAnagementPage = () => {
  return (
    <div>
      <WalletBalance/>
      <TransactionsTable />
    </div>
  )
}

export default TransactionMAnagementPage
