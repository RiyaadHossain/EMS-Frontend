import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getProjectDetails } from "@/queries/project";
import { useQuery } from "@tanstack/react-query";
import { Badge, Descriptions, Modal, Typography } from "antd";

export default function ProjectDetails({ isModalOpen, setIsModalOpen }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const { isPending, data } = useQuery({ queryFn: () => getProjectDetails(isModalOpen), queryKey: [QueryKey.manager, isModalOpen], enabled: !!isModalOpen })
  if (isPending && isModalOpen) return <Loading />

  console.log(data);
  const project = data?.data

  return (
    <Modal open={isModalOpen} footer={[]} onCancel={handleCancel}>
      <Typography.Title level={3} style={{textAlign:'center'}}>Project Description</Typography.Title>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Project Name">
          {project?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Issue Date">
          {project?.issueDate}
        </Descriptions.Item>
        <Descriptions.Item label="Expected End Date">
          {project?.expectedEndDate}
        </Descriptions.Item>
        <Descriptions.Item label="Department">
          {project?.department?.name}
        </Descriptions.Item>
        <Descriptions.Item label="Manager">{project?.manager?.name}</Descriptions.Item>
        <Descriptions.Item label="Status">
          <Badge
            status={
              project?.status === "In Progress"
                ? "processing"
                : project?.status === "Completed"
                ? "success"
                : "warning"
            }
            text={project?.status}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Duration">
          {project?.duration}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
}
