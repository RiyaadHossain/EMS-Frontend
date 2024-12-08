import { Typography, List, Tag, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const projects = [
  { name: "Task 1", status: "To Do", id: 1 },
  { name: "Task 2", status: "Completed", id: 2 },
  { name: "Task 3", status: "To Do", id: 3 },
];

const statusColors = {
  "In Progress": "processing",
  Completed: "success",
  "To Do": "error",
};

const WorkingTask = () => {

  return (
    <>
      <Typography.Title level={4}>WorkingTask</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(project) => (
          <List.Item>
            <List.Item.Meta
              title={<Button type="link" style={{padding:0}}>{project.name}</Button >}
              description={
                <Tag color={statusColors[project.status]}>{project.status}</Tag>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/employee/task-list">
        <Button style={{padding:0}} type="link" icon={<ArrowRightOutlined />} iconPosition="end">
          See All
        </Button>
      </Link>
    </>
  );
};

export default WorkingTask;
