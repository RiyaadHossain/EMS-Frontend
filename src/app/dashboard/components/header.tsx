"use client";
import React from "react";
import { NotificationFilled, PoweroffOutlined } from "@ant-design/icons";
import { Avatar, theme, Badge, Dropdown, Layout, Button } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getNotifications, readAllNotifications } from "@/queries/notification";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import toast from "react-hot-toast";
import { deleteToken } from "@/helpers/localStorage";
import { useRouter } from "next/navigation";
import { PAGE_URL } from "@/enums/pageUrl";

export default function Header() {
const {
  token: { colorBgContainer },
} = theme.useToken();

  const router = useRouter();
  const queryClient = useQueryClient();

  const { isPending, data } = useQuery({
    queryFn: getNotifications,
    queryKey: [QueryKey.notification],
  });

  const notificion = useMutation({
    mutationFn: readAllNotifications,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKey.notification] });
    },
  });

  if (isPending) return <Loading />;

  const notifications = data?.data?.length
    ? data?.data
    : [{ text: "No New Notification", _id: "1" }];
  const dropdown_items = [];
  notifications?.forEach((notification, index) => {
    dropdown_items.push({ label: notification.text, key: notification._id });

    if (index + 1 < notifications.length)
      dropdown_items.push({ type: "divider" });
  });

  const handleMenuClick = () => {
    deleteToken();
    router.push(PAGE_URL.Login)
    toast.success("Logged Out Successful");
  };

  const menu_dropdowns = [
    {
      key: "1",
      label: "LogOut",
      danger: true,
      icon: <PoweroffOutlined />,
    },
  ];

  return (
    <Layout.Header
      style={{ padding: 24, background: colorBgContainer }}
      className="flex justify-end items-center"
    >
      <div className="flex items-center gap-4">
        <Dropdown menu={{ items: dropdown_items }} trigger={["click"]}>
          <Button type="text" onClick={() => notificion.mutate()}>
            <Badge dot={data?.data?.length}>
              <NotificationFilled style={{ fontSize: 16 }} />
            </Badge>
          </Button>
        </Dropdown>

        <Dropdown menu={{ items: menu_dropdowns, onClick: handleMenuClick }}>
          <Avatar
            className="bg-red-600 cursor-pointer"
            style={{ backgroundColor: "#f56a00", verticalAlign: "middle" }}
            size="large"
            gap={1}
          >
            {"R"}
          </Avatar>
        </Dropdown>
      </div>
    </Layout.Header>
  );
}
