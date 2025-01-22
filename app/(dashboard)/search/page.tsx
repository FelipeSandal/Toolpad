"use client"
import Head from 'next/head';
import styles from '../content/styles/Home.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Grid2 } from '@mui/material';
import { getArrayItem } from "./SearchFunctionality";
import Grid2DisplayData from "./GridDataDisplay";
import type ClientDetailProps from './MockData'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredDatas] = useState<Array<ClientDetailProps>>([]);

  function handleSearch() {
    const matchingItems = getArrayItem(searchQuery);
    const flatItems = Array.isArray(matchingItems[0]) ? matchingItems.flat() : matchingItems;
    setFilteredDatas(flatItems);
  }

  // Function to handle key down events in the search input
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box sx={{ p: 2 }}>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mb: 4,
            mt: 2
          }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                width: '300px'
              }}
            />
            <button 
              onClick={handleSearch}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                cursor: 'pointer',
                backgroundColor: 'grey'
              }}
            >
              Search
            </button>
          </Box>

          <Box>
            <Grid2DisplayData filteredDatas={filteredData} />
          </Box>
        </Box>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
