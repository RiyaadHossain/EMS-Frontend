"use client";
import React from "react";
import { Menu, Layout } from "antd";
import { useRouter } from "next/navigation";
import { userRole } from "@/constants/dummy";
import { getSidebarLinks } from "../utils/getSidebarLinks";

const items = getSidebarLinks(userRole);
export default function Sidebar() {
  const router = useRouter();

  const handleClick = ({ key }: { key: string }) =>
    router.push(`/dashboard/${key}`);

  return (
    <Layout.Sider breakpoint="lg" collapsedWidth="0">
      <div className="demo-logo-vertical text-center text-xl font-bold my-5">
        EMS
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        items={items}
        onClick={handleClick}
      />
    </Layout.Sider>
  );
}
