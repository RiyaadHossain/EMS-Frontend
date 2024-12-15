import { Typography, List, Tag, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getTasks } from "@/queries/task";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";

const statusColors = {
  "In Progress": "processing",
  Completed: "success",
  "To Do": "error",
};

const WorkingTask = () => {
  const { isPending, data } = useQuery({
    queryFn: getTasks,
    queryKey: [QueryKey.task],
  });
  if (isPending) return <Loading />;

  const projects = data?.data?.slice(0, 6);

  return (
    <>
      <Typography.Title level={4}>WorkingTask</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={projects}
        renderItem={(project: any) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Button type="link" style={{ padding: 0 }}>
                  {project.name}
                </Button>
              }
              description={
                <Tag color={statusColors[project.status]}>{project.status}</Tag>
              }
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/employee/task-list">
        <Button
          style={{ padding: 0 }}
          type="link"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
          See All
        </Button>
      </Link>
    </>
  );
};

export default WorkingTask;
