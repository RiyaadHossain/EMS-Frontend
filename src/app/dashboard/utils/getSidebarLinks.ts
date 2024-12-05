import React from "react";
import { USER_ROLE } from "@/enums/userRole";
import {
  adminLinks,
  employeeLinks,
  managerLinks,
} from "../constants/sidebar-link";

export const getSidebarLinks = (role: any) => {
  let navLinks = [];

  if (role == USER_ROLE.Admin) navLinks = adminLinks;
  if (role == USER_ROLE.Manager) navLinks = managerLinks;
  if (role == USER_ROLE.Employee) navLinks = employeeLinks;

  return navLinks.map((link) => ({
    key: link.path,
    icon: React.createElement(link.icon),
    label: link.label,
  }));
};
