"use client";

import Head from 'next/head';
import styles from '../content/styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid2 } from '@mui/material';

import { useState, useEffect } from 'react';
import dataUser from './mockup_data_person.json';
import Grid2DisplayData from "./GridDataDisplay";
import SearchField from './SearchField';
import { ClientDetailProps, UserDataProps } from './MockData';



export default function Home() {

  
  const [filteredData, setFilteredDatas] = useState([]);
  
  const [transformedUserData, setTransformedUserData] = useState([]);
  
  function userDetailsTransformed(data: any): UserDataProps[] {
    return data.map((item: any) => ({
      PersonNumber: item["Person-Number"],
      LoanID: item["Loan-ID"],
      Name: item.Name
    }))
  }

  useEffect(() => {
    const transformed = userDetailsTransformed(dataUser);
    console.log("Transformed User Data:", transformed); // Debug
    setTransformedUserData(transformed);
  }, []);

  console.log("filtered dAta:", filteredData)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <div style={{ position: "fixed", top: "100px", zIndex: 1000 }}>
            <SearchField
              setFilteredData={setFilteredDatas}
              transformedData={transformedUserData} // Pass full data here
              transformedUserData={transformedUserData}
            />
          </div>

          <Box
            sx={{
              width: "100%",
              marginTop: "30px",
              minHeight: "calc(100vh - 80px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid2 container spacing={1}>
              <Grid2DisplayData filteredDatas={filteredData} />
            </Grid2>
          </Box>
        </Box>
      </main>
    </div>
  );
}