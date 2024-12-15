import { Typography, List, Tag, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import ProjectDetails from "./modals/ProjectDetails";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading/Loading";
import { getProjects } from "@/queries/project";
import { QueryKey } from "@/constants/queryKey";

const statusColors = {
  "In Progress": "processing",
  Completed: "success",
  "To Do": "error",
};

const RunningProjects = () => {
  const [isModalOpen, setIsModalOpen] = useState("");

  const { isPending, data } = useQuery({
    queryFn: () => getProjects(),
    queryKey: [QueryKey.project],
  });
  if (isPending) return <Loading />;

  const projects = data?.data?.data?.slice(0, 6);

  return (
    <>
      <Typography.Title level={4}>Running Projects</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(project: any) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Button
                  type="link"
                  style={{ padding: 0 }}
                  onClick={() => setIsModalOpen(project.id)}
                >
                  {project.projectName}
                </Button>
              }
              description={
                <Tag color={statusColors[project.status]}>{project.status}</Tag>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/admin/projects-list">
        <Button
          style={{ padding: 0 }}
          type="link"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
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
