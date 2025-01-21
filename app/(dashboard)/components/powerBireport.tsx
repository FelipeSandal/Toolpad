import { useState } from "react";
import { models } from "powerbi-client";
import { PowerBIEmbed } from "powerbi-client-react";
import { EventHandler } from "powerbi-client-react";

export interface PowerBIReportProps {
  reportId: string;
  embedUrl: string;
}

function PowerBIReport({ reportId, embedUrl }: PowerBIReportProps) {
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
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 16 }}>
        <label htmlFor="accessToken" style={{ marginRight: 10 }}>
          Access token:
        </label>
        <input
          id="accessToken"
          value={accessToken}
          onChange={(event) => setAccessToken(event.target.value)}
          style={{ padding: 8 }}
        />
      </div>

      {!!accessToken?.trim() && (
        <PowerBIEmbed
          embedConfig={reportConfig}
          cssClassName={"embeddedReport"}
          eventHandlers={
            new Map([
              ["loaded", (event: EventHandler) => console.log("Report loaded")],
              [
                "rendered",
                (event: EventHandler) => console.log("Report rendered"),
              ],
              ["error", (event: EventHandler) => console.log(event?.detail)],
              ["visualClicked", () => console.log("visual clicked")],
              ["pageChanged", (event: any) => console.log(event)],
            ])
          }
        />
      )}
    </div>
  );
}

export default createComponent(PowerBIReport, {
  argTypes: {
    reportId: {
      type: "string",
      default: "",
    },
    embedUrl: {
      type: "string",
      default: "",
    },
  },
});
function createComponent(
  PowerBIReport: ({
    reportId,
    embedUrl,
  }: PowerBIReportProps) => import("react").JSX.Element,
  arg1: {
    argTypes: {
      reportId: { type: string; default: string };
      embedUrl: { type: string; default: string };
    };
  }
) {
  throw new Error("Function not implemented.");
}
