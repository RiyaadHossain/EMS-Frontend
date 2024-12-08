import { Badge, Descriptions, Modal, Typography } from "antd";

const project = {
  name: "Website Redesign",
  issueDate: "2024-01-15",
  expectedEndDate: "2024-06-15",
  department: "IT",
  manager: "John Smith",
  status: "In Progress",
  duration: "5 months",
};

export default function ProjectDetails({ isModalOpen, setIsModalOpen }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // is modal open contain the project id

  return (
    <Modal open={isModalOpen} footer={[]} onCancel={handleCancel}>
      <Typography.Title level={3} postion="center" style={{'text-align':'center'}}>Project Description</Typography.Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Project Name">
          {project.name}
        </Descriptions.Item>
        <Descriptions.Item label="Issue Date">
          {project.issueDate}
        </Descriptions.Item>
        <Descriptions.Item label="Expected End Date">
          {project.expectedEndDate}
        </Descriptions.Item>
        <Descriptions.Item label="Department">
          {project.department}
        </Descriptions.Item>
        <Descriptions.Item label="Manager">{project.manager}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge
            status={
              project.status === "In Progress"
                ? "processing"
                : project.status === "Completed"
                ? "success"
                : "warning"
            }
            text={project.status}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Duration">
          {project.duration}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
