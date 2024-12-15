import React from "react";
import { Modal, List, Typography, Tag, Avatar } from "antd";
import { CheckCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import { PROJECT_STATUS } from "@/enums/project";
import { formatString } from "@/utils/format";
import { useQuery } from "@tanstack/react-query";
import { getTasksByProject } from "@/queries/task";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { getProjectDetails } from "@/queries/project";

const TaskList = ({ isModalOpen, setIsModalOpen }) => {
  const projectId = isModalOpen;
  const { isPending, data } = useQuery({
    queryFn: () => getTasksByProject(projectId),
    queryKey: [QueryKey.task, projectId],
    enabled: !!projectId,
  });
  const { isPending: projectPending, data: projectDetails } = useQuery({
    queryFn: () => getProjectDetails(projectId),
    queryKey: [QueryKey.task],
  });

  if (isModalOpen && (isPending || projectPending)) return <Loading />;

  const getStatusTag = (status: string) => {
    switch (status) {
      case PROJECT_STATUS.COMPLETED:
        return (
          <Tag icon={<CheckCircleFilled />} color="green">
            {formatString(status)}
          </Tag>
        );
      case PROJECT_STATUS.TO_DO:
        return (
          <Tag icon={<ClockCircleFilled />} color="orange">
            {formatString(status)}
          </Tag>
        );
      default:
        return null;
    }
  };

  const tasks = data?.data;

  return (
    <Modal
      title={
        <Typography.Title
          level={4}
          style={{
            textAlign: "center",
            margin: 0,
            color: "#f0f0f0", // White text for the dark theme
          }}
        >
          {projectDetails?.data?.name}
        </Typography.Title>
      }
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen(false)}
      centered
      width={600}
    >
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(task: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  style={{
                    backgroundColor: "#1890ff", // Bright blue for contrast
                    color: "#fff", // White text inside avatar
                  }}
                >
                  {task?.assignee?.charAt(0) || "N"}
                </Avatar>
              }
              title={
                <Typography.Text style={{ color: "#f0f0f0" }}>
                  {task?.name}
                </Typography.Text>
              }
              description={
                <Typography.Text style={{ color: "#bfbfbf" }}>
                  {task?.assignee || "Unassigned"}
                </Typography.Text>
              }
            />
            {getStatusTag(task?.status)}
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default TaskList;
