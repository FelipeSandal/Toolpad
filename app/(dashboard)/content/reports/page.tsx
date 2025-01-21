"use client";

import { useState } from "react";
import { Box, Tabs, Tab, FormControl, FormLabel, TextField } from "@mui/material";

function ReportsPage() {
  const [tabValue, setTabValue] = useState(0);
  const [accessToken, setAccessToken] = useState<string>("");

  return (
    <Box sx={{ width: "100%" }}>
      <h1>Reports Page</h1>
      <Tabs
        value={tabValue}
        onChange={(event, newValue) => setTabValue(newValue)}
      >
        <Tab label="Test Tab" sx={{ textTransform: "none" }} />
        <Tab label="Test Tab" sx={{ textTransform: "none" }} />
        <Tab label="Test Tab" sx={{ textTransform: "none" }} />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        <form>
          <FormControl fullWidth margin="normal">
            <Box display="flex" alignItems="center">
              <FormLabel htmlFor="accessToken" sx={{ mr: "10px", ml: "10px" }}>
                Access token:
              </FormLabel>
              <TextField
                id="accessToken"
                value={accessToken}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAccessToken(event.target.value);
                }}
                size="small"
                variant="outlined"
              />
            </Box>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
}

export default ReportsPage;