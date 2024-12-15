"use client";
import React from "react";
import { Menu, Layout } from "antd";
import { redirect, useRouter } from "next/navigation";
import { getSidebarLinks } from "../utils/getSidebarLinks";
import { getUserInfo } from "@/helpers/jwt";
import { PAGE_URL } from "@/enums/pageUrl";


export default function Sidebar() {
  const userInfo = getUserInfo()
  if(!userInfo) redirect(PAGE_URL.Login)

  const items = getSidebarLinks(userInfo?.role);

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
