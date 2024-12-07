import { Typography, List, Tag, Button } from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from "next/link";

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
  return (
    <>
      <Typography.Title level={4}>Running Projects</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link
                  href={`/dashboard/admin/projects-list`}
                  style={{ color: "#1890ff", fontWeight: "bold" }}
                >
                  {project.name}
                </Link>
              }
              description={
                <Tag color={statusColors[project.status]}>{project.status}</Tag>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/admin/projects-list"><Button type="link" icon={<ArrowRightOutlined/>} iconPosition="end">See All</Button></Link>
    </>
  );
};

export default RunningProjects;
