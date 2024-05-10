
// import SidebarDash from '@/components/dashboardstyle/sidebar'
import React from 'react'
import getUser from '../../../actions/GetUser';
import { USER } from '../../../types';
import SidebarDash from '@/components/dashboardstyle/Sidebar';
interface ResGetUserDetail {
  message: string;
  success: boolean;
  data: any;
}
export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  const user:USER = await getUser();
  console.log(user)
  return (
    <section>
       <SidebarDash user={user}>  {children}</SidebarDash>
    {/* {children} */}
     
   
    </section>
  )
}
