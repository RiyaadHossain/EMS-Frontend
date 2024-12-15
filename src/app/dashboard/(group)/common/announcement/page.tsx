"use client";
import { Button, List, Avatar, Typography } from "antd";
import { USER_ROLE } from "@/enums/userRole";
import { useState } from "react";
import AddAnnouncement from "./Add";
import { getUserInfo } from "@/helpers/jwt";
import { useQuery } from "@tanstack/react-query";
import { getAnnouncements } from "@/queries/announcement";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";

const user = getUserInfo();
const havePermission =
  user.role == USER_ROLE.Admin || user.role == USER_ROLE.Manager;

export default function Announcement() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {isPending, data} = useQuery({queryFn: getAnnouncements, queryKey: [QueryKey.announcement]})
  if (isPending) return <Loading />
const announcements = data?.data


  return (
    <div>
      <div className="flex justify-end">
        {havePermission && (
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Announce
          </Button>
        )}
      </div>

      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        <Typography.Title level={3}>Announcements</Typography.Title>
        <List
          itemLayout="horizontal"
          dataSource={announcements}
          renderItem={(item:any) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar  style={{
                  backgroundColor: "#1890ff", // Bright blue for contrast
                  color: "#fff", // White text inside avatar
                }}>{item.username.slice(0, 1)}</Avatar>}
                title={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography.Text style={{ fontWeight: 600, color: "#d0d0d0" }}>
                      {item.username}
                    </Typography.Text>
                    <Typography.Text
                      style={{ color: "#aaa", fontSize: "0.9em" }}
                    >
                      {item.time}
                    </Typography.Text>
                  </div>
                }
                description={
                  <Typography.Text style={{ color: "#555" }}>
                    {item.announcement}
                  </Typography.Text>
                }
              />
            </List.Item>
          )}
        />
      </div>

      <AddAnnouncement
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
