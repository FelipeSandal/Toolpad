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
    socialSecurityNumber: "123456789",
    securityRegistrationDocumentNumber: "",
    loanNumber: "BXAJ632",
    clientRef: "",
    loanAccountRef: "",
    propertyAddress: "",
    cadastralNumber: "",
    belongingCadastrals: "",
    securityRegistrationNominalValue: "",
    municipalityName: "",
    unitNumber: "UN123456",
    housingCooperativeOrganizationNumber: "",
    apartmentNumber: "A123456",
    shareNumber: "S123456",
    priority: 1,
    registrationDate: "",
    lastModified: "",
    loanOwner: "Mambu Test",
    owner: "",
    owner2: "",
    owner3: "",
    owner4: "",
  },
  {
    socialSecurityNumber: "987654321",
    securityRegistrationDocumentNumber: "",
    loanNumber: "BXAJ987",
    clientRef: "",
    loanAccountRef: "",
    propertyAddress: "",
    cadastralNumber: "",
    belongingCadastrals: "",
    securityRegistrationNominalValue: "",
    municipalityName: "",
    unitNumber: "",
    housingCooperativeOrganizationNumber: "",
    apartmentNumber: "A987654",
    shareNumber: "S987654",
    priority: 2,
    registrationDate: "",
    lastModified: "",
    loanOwner: "",
    owner: "",
    owner2: "",
    owner3: "",
    owner4: "",
  },
  {
    socialSecurityNumber: "112233445",
    securityRegistrationDocumentNumber: "",
    loanNumber: "BXAJ112",
    clientRef: "",
    loanAccountRef: "",
    propertyAddress: "",
    cadastralNumber: "",
    belongingCadastrals: "",
    securityRegistrationNominalValue:"",
    municipalityName: "",
    unitNumber: "",
    housingCooperativeOrganizationNumber: "",
    apartmentNumber: "",
    shareNumber: "",
    priority: 3,
    registrationDate: "",
    lastModified: "",
    loanOwner: "",
    owner: "",
    owner2: "",
    owner3: "",
    owner4: "",
  },
];
// Column definitions
const columns = [
  {
    flex: 1,
    field: "socialSecurityNumber",
    headerName: "Social Security Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "securityRegistrationDocumentNumber",
    headerName: "Security Registration Document Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "loanNumber",
    headerName: "Loan Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "propertyAddress",
    headerName: "Property Address",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "cadastralNumber",
    headerName: "Cadastral Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "belongingCadastrals",
    headerName: "Belonging Cadastrals",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "securityRegistrationNominalValue",
    headerName: "Security Registration Nominal Value",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "municipalityName",
    headerName: "Municipality Name",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "unitNumber",
    headerName: "Unit Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "housingCooperativeOrganizationNumber",
    headerName: "Housing Cooperative Organization Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "apartmentNumber",
    headerName: "Apartment Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "shareNumber",
    headerName: "Share Number",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "priority",
    headerName: "Priority",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "registrationDate",
    headerName: "Registration Date",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "lastModified",
    headerName: "Last Modified",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "loanOwner",
    headerName: "Loan Owner",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "owner",
    headerName: "Owner",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "owner2",
    headerName: "Owner",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "owner3",
    headerName: "Owner",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
  {
    flex: 1,
    field: "owner4",
    headerName: "Owner",
    headerAlign: "left",
    align: "left",
    aggregable: false,
  },
];

export default function AccountingPage() {
  return (
    <div className="h-[calc(100vh-1rem)] -m-6 sm:-m-8 md:-m-12 lg:-m-16 absolute left-0 right-0">
      <h1 className="text-2xl font-bold mb-2 px-4">Depot</h1>
      <div className="h-[calc(100%-2.5rem)]">
        <DataGridPremium
          rows={mockRows}
          columns={columns}
          getRowId={(row) => row.socialSecurityNumber}
          disableRowSelectionOnClick={true}
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