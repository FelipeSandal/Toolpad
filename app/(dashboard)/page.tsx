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
        {[
          {
            href: "/gebryendringer",
            icon: <PaidIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "Gebryendringer",
            description: "Oversikt og endring av termingebyrer.."
          },
          {
            href: "/content/reports",
            icon: <FactCheckIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "Rapport",
            description: "Oversikt over rapporter om økonomisk status og aktiviteter."
          },
          {
            href: "/faktura",
            icon: <ReceiptIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "Faktura",
            description: "Oversikt over faktura."
          },
          {
            href: "content/depot",
            icon: <WarehouseIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "Depot",
            description: "Oversikt over depot."
          },
          {
            href: "/jobber",
            icon: <WorkIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "Jobber",
            description: "Grensesnitt for planlagte jobber."
          },
          {
            href: "/simba",
            icon: <AccountBalanceIcon sx={{ fontSize: 32, mr: 1 }} />,
            title: "SIMBA",
            description: "Oversikt av SIMBA"
          }
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Link 
              href={item.href}
              style={{ textDecoration: 'none' }}
            >
              <Paper 
                elevation={2}
                sx={{ 
                  p: 2, 
                  height: "100%", 
                  width: "100%",
                  cursor: 'pointer',
                  display: 'block',
                  border: 'none',
                  textAlign: 'left',
                  '& h3': {
                    transition: 'color 0.2s',
                    '&:hover': {
                      color: 'lightgreen'
                    }
                  }
                }}
              >
                <h3>
                  {item.icon} {item.title}
                </h3>
                <p>{item.description}</p>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}