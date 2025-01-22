"use client";

import dynamic from "next/dist/shared/lib/dynamic";
import { SetStateAction, useEffect, useState } from "react";

import {
  Box,
  FormControl,
  FormLabel,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";

import reportsConfiguration from "./reportsConfiguration.json";

const PowerBiReport = dynamic(() => import("./PowerBIreport"), { ssr: false });

interface reportsConfig {
  name: string;
  id: string;
  embedUrl: string;
}

export default function Reports() {
  const [reportsConfig, setReportsConfig] = useState<reportsConfig[]>([]);

  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setReportsConfig(reportsConfiguration);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabValue}
        onChange={(event: any, newTabValue: SetStateAction<number>) => {
          setTabValue(newTabValue);
        }}
        aria-label="basic tabs example"
      >
        {reportsConfig.map((tabReport, index) => (
          <Tab
            key={index}
            label={tabReport.name}
            sx={{ textTransform: "none" }}
          />
        ))}
      </Tabs>
      {reportsConfig.map((config, index) => (
        <div key={index} hidden={tabValue !== index}>
          <PowerBiReport reportId={config.id} embedUrl={config.embedUrl} />
        </div>
      ))}
    </Box>
  );
}