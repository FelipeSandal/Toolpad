import * as React from "react";
import { Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import PaidIcon from "@mui/icons-material/Paid";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <PaidIcon sx={{ fontSize: 32, mr: 1 }} /> Gebryendringer
            </h3>
            <p>Oversikt og endring av termingebyrer..</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <FactCheckIcon sx={{ fontSize: 32, mr: 1 }} /> Rapport
            </h3>
            <p>Oversikt over rapporter om økonomisk status og aktiviteter.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <ReceiptIcon sx={{ fontSize: 32, mr: 1 }} /> Faktura
            </h3>
            <p>Oversikt over faktura.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <WarehouseIcon sx={{ fontSize: 32, mr: 1 }} /> Depot
            </h3>
            <p>Oversikt over depot.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <WorkIcon sx={{ fontSize: 32, mr: 1 }} /> Jobber
            </h3>
            <p>Grensesnitt for planlagte jobber.</p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ p: 2, height: "100%" }}>
            <h3>
              <AccountBalanceIcon sx={{ fontSize: 32, mr: 1 }} /> SIMBA
            </h3>
            <p>Oversikt av SIMBA</p>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
