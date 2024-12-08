"use client";
import { Button,List, Avatar, Typography } from "antd";
import { userRole } from "@/constants/dummy";
import { USER_ROLE } from "@/enums/userRole";
import { useState } from "react";
import AddAnnouncement from "./Add";

const announcements = [
  {
    id: 1,
    username: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1", // Placeholder avatar
    announcement: "The server will be down for maintenance at 11 PM.",
    time: "10 min ago",
  },
  {
    id: 2,
    username: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    announcement: "New feature: Dark mode is now available!",
    time: "1 hour ago",
  },
  {
    id: 3,
    username: "Alice Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    announcement: "Please update your profile information by next week.",
    time: "2 days ago",
  },
];

const havePermission =
  //@ts-ignore
  userRole == USER_ROLE.Admin || userRole == USER_ROLE.Manager;

export default function Announcement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Announements</h2>
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
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
                    avatar={<Avatar>{item.username.slice(0,1)}</Avatar>}
              title={
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography.Text style={{ fontWeight: 600, color: "#000" }}>{item.username}</Typography.Text>
                  <Typography.Text style={{ color: "#aaa", fontSize: "0.9em" }}>{item.time}</Typography.Text>
                </div>
              }
              description={
                <Typography.Text style={{ color: "#555" }}>{item.announcement}</Typography.Text>
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
