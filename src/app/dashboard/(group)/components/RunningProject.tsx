import { Typography, List, Tag, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import ProjectDetails from "./modals/ProjectDetails";

const projects = [
  { name: "Project Alpha", status: "In Progress", id: 1 },
  { name: "Project Beta", status: "Completed", id: 2 },
  { name: "Project Gamma", status: "To Do", id: 3 },
];

const statusColors = {
  "In Progress": "processing",
  Completed: "success",
  "To Do": "error",
};

const RunningProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const showModal = (id: number|string) => {
    id = id.toString()
    setIsModalOpen(id);
  };

  return (
    <>
      <Typography.Title level={4}>Running Projects</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={<Button type="link" style={{padding:0}} onClick={() => showModal(project.id)}>{project.name}</Button >}
              description={
                <Tag color={statusColors[project.status]}>{project.status}</Tag>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/admin/projects-list">
        <Button style={{padding:0}} type="link" icon={<ArrowRightOutlined />} iconPosition="end">
          See All
        </Button>
      </Link>
      <ProjectDetails
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};

export default RunningProjects;
