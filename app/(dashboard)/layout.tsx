import * as React from "react";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <DashboardLayout>
      <div className="w-full max-w-none">
        {" "}
        {/* Remove PageContainer's constraints */}
        {props.children}
      </div>
    </DashboardLayout>
  );
}
