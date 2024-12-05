import { USER_ROLE } from "@/enums/userRole";
import AdminHome from "./(group)/admin/page";
import ManagerHome from "./(group)/manager/page";
import EmployeeHome from "./(group)/employee/page";
import { redirect } from "next/navigation";
import { userRole } from "@/constants/dummy";

export default function DashboardHome() {

  if (userRole == USER_ROLE.Admin) return <AdminHome />;
  if (userRole == USER_ROLE.Manager) return <ManagerHome />;
  if (userRole == USER_ROLE.Employee) return <EmployeeHome />;
  redirect("/login");
}
