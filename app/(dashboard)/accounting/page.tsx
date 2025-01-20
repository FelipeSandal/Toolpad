"use client";

import { DataGridPremium, GridToolbar } from "@mui/x-data-grid-premium";
import { Box } from "@mui/material";
import { nbNO } from "@mui/x-data-grid/locales";
// Utility functions
const formatDate = (value: string | undefined) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString();
};

const formatAmount = (value: number | null | undefined) => {
  if (value == null) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
};

// Mock data
const mockRows = [
  {
    batchId: "BATCH001",
    transactionId: "TRX001",
    entryIdFrom: 1,
    entryIdTo: 2,
    branchName: "Main Branch",
    transferNumber: 12345,
    transactionDate: "2024-03-20",
    voucherDate: "2024-03-20",
    accountId: "ACC001",
    debit: 1000.0,
    credit: null,
    hierarchy: ["1"],
  },
  {
    batchId: "BATCH001",
    transactionId: "TRX002",
    entryIdFrom: 3,
    entryIdTo: 4,
    branchName: "Main Branch",
    transferNumber: 12346,
    transactionDate: "2024-03-20",
    voucherDate: "2024-03-20",
    accountId: "ACC002",
    debit: null,
    credit: 1000.0,
    hierarchy: ["1", "1.1"],
  },
  {
    batchId: "BATCH002",
    transactionId: "TRX003",
    entryIdFrom: 5,
    entryIdTo: 6,
    branchName: "Downtown Branch",
    transferNumber: 12347,
    transactionDate: "2024-03-21",
    voucherDate: "2024-03-21",
    accountId: "ACC003",
    debit: 2500.0,
    credit: null,
    hierarchy: ["2"],
  },
  {
    batchId: "BATCH002",
    transactionId: "TRX004",
    entryIdFrom: 7,
    entryIdTo: 8,
    branchName: "Downtown Branch",
    transferNumber: 12348,
    transactionDate: "2024-03-21",
    voucherDate: "2024-03-21",
    accountId: "ACC004",
    debit: null,
    credit: 2500.0,
    hierarchy: ["2", "2.1"],
  },
];

// Column definitions
const columns = [
  {
    flex: 1,
    field: "batchId",
    headerName: "Batch ID",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1.5,
    field: "entryIdFrom",
    headerName: "GL Entry ID From",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1.5,
    field: "entryIdTo",
    headerName: "GL Entry ID To",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1.5,
    field: "transferNumber",
    headerName: "Transfer Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1.5,
    field: "branchName",
    headerName: "Branch Name",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1.5,
    field: "transactionDate",
    headerName: "Transaction Date",
    headerAlign: "left",
    align: "left",
    aggregable: false,
    renderCell: ({ value }) => formatDate(value),
  },
  {
    flex: 1,
    field: "voucherDate",
    headerName: "Voucher Date",
    headerAlign: "left",
    align: "left",
    aggregable: false,
    renderCell: ({ value }) => formatDate(value),
  },
  {
    flex: 1,
    field: "accountId",
    headerName: "Account ID",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "debit",
    type: "number",
    headerName: "Debit",
    headerAlign: "left",
    align: "left",
    renderCell: ({ value }) => formatAmount(value),
  },
  {
    flex: 1,
    field: "credit",
    type: "number",
    headerName: "Credit",
    headerAlign: "left",
    align: "left",
    renderCell: ({ value }) => formatAmount(value),
  },
];

export default function AccountingPage() {
  return (
    <div className="h-[calc(100vh-1rem)] -m-6 sm:-m-8 md:-m-12 lg:-m-16 absolute left-0 right-0">
      <h1 className="text-2xl font-bold mb-2 px-4">Accounting Audit Data</h1>
      <div className="h-[calc(100%-2.5rem)]">
        <DataGridPremium
          rows={mockRows}
          columns={columns}
          getRowId={(row) => row.hierarchy.join("-")}
          treeData={true}
          disableRowSelectionOnClick={true}
          getTreeDataPath={(row) => row.hierarchy}
          localeText={nbNO.components.MuiDataGrid.defaultProps.localeText}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 100 },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              filterButtonActive: true, // Filter
              showColumnsButton: true, // Kolonner
              showDensitySelector: true, // Tetthet
              showExport: true, // Eksporter
            },
          }}
          sx={{
            width: "auto",
            "& .MuiDataGrid-main": {
              width: "auto",
            },
          }}
        />
      </div>
    </div>
  );
}
