import React from "react";
import { Modal, List, Typography, Tag, Avatar } from "antd";
import { CheckCircleFilled, ClockCircleFilled } from "@ant-design/icons";
import { PROJECT_STATUS } from "@/enums/project";
import { formatString } from "@/utils/format";

const TaskList = ({isModalOpen, setIsModalOpen}) => {

  const tasks = [
    { name: "Task 1", assignee: "Alice", status: "completed" },
    { name: "Task 2", assignee: "Bob", status: "to-do" },
    { name: "Task 3", assignee: "Charlie", status: "to-do" },
  ];

  const getStatusTag = (status: string) => {
    switch (status) {
      case PROJECT_STATUS.COMPLETED:
        return <Tag icon={<CheckCircleFilled />} color="green">{formatString(status)}</Tag>;
      case PROJECT_STATUS.TO_DO:
        return <Tag icon={<ClockCircleFilled />} color="orange">{formatString(status)}</Tag>;
      default:
        return null;
    }
  };

  return (
    <Modal
      title={<Typography.Title level={4} style={{ textAlign: "center", margin: 0 }}>Project Name</Typography.Title>}
      visible={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen(false)}
      centered
      width={600}
    >
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{task.assignee.charAt(0)}</Avatar>}
              title={<Typography.Text>{task.name}</Typography.Text>}
              description={<Typography.Text>{task.assignee}</Typography.Text>}
            />
            {getStatusTag(task.status)}
          </List.Item>
        )}
      />
    </Modal>
  );
};

export default TaskList;
