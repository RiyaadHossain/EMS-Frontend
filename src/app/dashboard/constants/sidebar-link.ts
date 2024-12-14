import {
  UserOutlined,
  DashboardOutlined,
  ApartmentOutlined,
  ProjectOutlined,
  CalendarOutlined,
  TeamOutlined,
  // DollarCircleOutlined,
  FileTextOutlined,
  ProfileOutlined,
  NotificationOutlined
} from "@ant-design/icons";

export const adminLinks = [
  { icon: DashboardOutlined, label: "Dashboard", path: "/" },
  {
    icon: ApartmentOutlined,
    label: "Departments",
    path: "admin/department-list",
  },
  { icon: ProjectOutlined, label: "Projects", path: "common/project-list" },
  { icon: CalendarOutlined, label: "Attendance", path: "admin/attendance" },
  { icon: TeamOutlined, label: "Managers", path: "admin/manager-list" },
  { icon: UserOutlined, label: "Employees", path: "common/employee-list" },
  // { icon: DollarCircleOutlined, label: "Salary", path: "admin/salary" },
  { icon: NotificationOutlined, label: "Announcement", path: "common/announcement" },
  { icon: ProfileOutlined, label: "Profile", path: "common/profile" },
];

export const managerLinks = [
  { icon: DashboardOutlined, label: "Dashboard", path: "/" },
  { icon: ProjectOutlined, label: "Projects", path: "manager/project-list" },
  { icon: UserOutlined, label: "Employees", path: "common/employee-list" },
  { icon: NotificationOutlined, label: "Announcement", path: "common/announcement" },
  { icon: ProfileOutlined, label: "Profile", path: "common/profile" },
];

export const employeeLinks = [
  { icon: DashboardOutlined, label: "Dashboard", path: "/" },
  // { icon: ProjectOutlined, label: "Projects", path: "common/project-list" },
  { icon: FileTextOutlined, label: "Tasks", path: "employee/task-list" },
  { icon: NotificationOutlined, label: "Announcement", path: "common/announcement" },
  { icon: ProfileOutlined, label: "Profile", path: "common/profile" },
];
