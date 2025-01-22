import { useState } from "react";

import { Box, FormControl, FormLabel, TextField } from "@mui/material";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";

interface Props {
  reportId: string;
  embedUrl: string;
}

export default function PowerBiReport({ reportId, embedUrl }: Props) {
  const [accessToken, setAccessToken] = useState<string>("");
  const reportConfig: models.IReportEmbedConfiguration = {
    type: "report",
    id: reportId,
    embedUrl: embedUrl,
    accessToken: accessToken,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false,
        },
      },
      background: models.BackgroundType.Transparent,
    },
  };

  return (
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
      <br></br>
      {!!accessToken?.trim() && (
        <PowerBIEmbed
          embedConfig={reportConfig}
          cssClassName={"embeddedReport"}
          eventHandlers={
            new Map([
              [
                "loaded",
                function () {
                  console.log("Report loaded");
                },
              ],
              [
                "rendered",
                function () {
                  console.log("Report rendered");
                },
              ],
              [
                "error",
                function (event) {
                  console.log(event?.detail);
                },
              ],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event) => console.log(event)],
            ])
          }
        />
      )}
    </form>
  );
}
