import Link from "next/link";
import React from "react";

import getUser from "../../../actions/GetUser";
import { USER } from "../../../types";
import SidebarDash from "@/components/dashboardstyle/Sidebar";
interface ResGetUserDetail {
  message: string;
  success: boolean;
  data: any;
}
type DashboardLayoutProps = {
  children: React.ReactNode;
};
const page = async () =>
  // {children }: DashboardLayoutProps
  {
    const user: USER = await getUser();
    console.log(user);
    return (
      <div>
        dahsboard
        {/* <SidebarDash user={user}>  {children}</SidebarDash> */}
        {/* <Link href={'/dashboard/list'} >da</Link> */}
      </div>
    );
  };

export default page;
