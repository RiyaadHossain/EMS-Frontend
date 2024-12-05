"use client";
import React from "react";
import {
  NotificationTwoTone,
} from "@ant-design/icons";
import { Avatar, theme, Badge, MenuProps, Dropdown,Layout } from "antd";


export default function Header() {

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    
      const dropdown_items: MenuProps["items"] = [
        {
          label: <a href="https://www.antgroup.com">You have an announcement</a>,
          key: "0",
        },
        {
          label: <a href="https://www.aliyun.com">Boss, sheduled meeting</a>,
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: "Your salary has been done",
          key: "3",
        },
      ];

  return (
    <Layout.Header
          style={{ padding: 24, background: colorBgContainer }}
          className="flex justify-end items-center"
        >
          <div className="flex items-center gap-4">
            <Dropdown menu={{ items:dropdown_items }} trigger={["click"]}>
              <Badge dot>
                <NotificationTwoTone style={{ fontSize: 16 }} />
              </Badge>
            </Dropdown>

            <Avatar
              className="bg-red-600"
              style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
              size="large"
              gap={1}
            >
              {"R"}
            </Avatar>
          </div>
        </Layout.Header>
  );
}
