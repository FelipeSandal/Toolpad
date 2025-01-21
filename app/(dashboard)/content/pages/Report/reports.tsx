"use client";

import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import PowerBIReport from "../../../components/powerBireport";
import { reportsConfiguration } from "../../../components/reportconfig";

function ReportsPage() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
      >
        {reportsConfiguration.map((report, index) => (
          <Tab key={index} label={report.name} sx={{ textTransform: "none" }} />
        ))}
      </Tabs>

      {reportsConfiguration.map((report, index) => (
        <div key={index} hidden={tabValue !== index}>
          <PowerBIReport reportId={report.id} embedUrl={report.embedUrl} />
        </div>
      ))}
    </Box>
  );
}

export default createPage(ReportsPage);
