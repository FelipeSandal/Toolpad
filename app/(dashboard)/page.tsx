import Link from 'next/link';
import { Box, Grid, Paper } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ReceiptIcon from '@mui/icons-material/Receipt';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Link href="/gebryendringer" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <PaidIcon sx={{ fontSize: 32, mr: 1 }} /> Gebryendringer
              </h3>
              <p>Oversikt og endring av termingebyrer..</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Link href="/content/reports" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <FactCheckIcon sx={{ fontSize: 32, mr: 1 }} /> Rapport
              </h3>
              <p>Oversikt over rapporter om økonomisk status og aktiviteter.</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/faktura" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <ReceiptIcon sx={{ fontSize: 32, mr: 1 }} /> Faktura
              </h3>
              <p>Oversikt over faktura.</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/depot" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <WarehouseIcon sx={{ fontSize: 32, mr: 1 }} /> Depot
              </h3>
              <p>Oversikt over depot.</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/jobber" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <WorkIcon sx={{ fontSize: 32, mr: 1 }} /> Jobber
              </h3>
              <p>Grensesnitt for planlagte jobber.</p>
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Link href="/simba" passHref>
            <Paper sx={{ p: 2, height: "100%", cursor: 'pointer' }}>
              <h3>
                <AccountBalanceIcon sx={{ fontSize: 32, mr: 1 }} /> SIMBA
              </h3>
              <p>Oversikt av SIMBA</p>
            </Paper>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}