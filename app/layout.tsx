import * as React from "react";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LinearProgress from "@mui/material/LinearProgress";
import type { Navigation } from "@toolpad/core/AppProvider";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

import theme from "../theme";

const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "System",
  },
  {
    segment: "",
    title: "System",
    icon: <HomeIcon />,
  },
  {
    segment: "search",
    title: "Search",
    icon: <SearchIcon />,
  },
  {
    segment: "accounting",
    title: "Accounting",
    icon: <AccountBalanceIcon />,
  },
];

const BRANDING = {
  title: "My Toolpad Core Next.js App",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-toolpad-color-scheme="dark" suppressHydrationWarning>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <React.Suspense fallback={<LinearProgress />}>
            <NextAppProvider
              navigation={NAVIGATION}
              branding={BRANDING}
              theme={theme}
            >
              {props.children}
            </NextAppProvider>
          </React.Suspense>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
