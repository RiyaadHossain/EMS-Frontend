'use client'
import { USER_ROLE } from "@/enums/userRole";
import AdminHome from "./(group)/admin/page";
import ManagerHome from "./(group)/manager/page";
import EmployeeHome from "./(group)/employee/page";
import { redirect } from "next/navigation";
import { getUserInfo } from "@/helpers/jwt";
import { PAGE_URL } from "@/enums/pageUrl";

export default function DashboardHome() {

  const userInfo = getUserInfo()
  if(!userInfo) redirect(PAGE_URL.Login)

  const userRole = userInfo.role
  if (userRole == USER_ROLE.Admin) return <AdminHome />;
  if (userRole == USER_ROLE.Manager) return <ManagerHome />;
  if (userRole == USER_ROLE.Employee) return <EmployeeHome />;
  redirect("/auth/login");
}
