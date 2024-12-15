"use client";
import { Button, Select, Table, Tag } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import ProjectDetails from "../../components/modals/ProjectDetails";
import AddTask from "./AddTask";
import { formatDate, formatString } from "@/utils/format";
import TaskList from "./TaskList";
import { PROJECT_STATUS } from "@/enums/project";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects, updateProject } from "@/queries/project";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import toast from "react-hot-toast";

export default function ProjectList() {
  const queryClient = useQueryClient()
  const [isModalOpen, setIsModalOpen] = useState("");
  const [isTaskModalOpen, setIsTaskModalOpen] = useState("");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");

  const { isPending, data } = useQuery({
    queryFn: getProjects,
    queryKey: [QueryKey.project],
  });
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: any) => updateProject(id, data),
    onSuccess: (res) => {
      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
      queryClient.invalidateQueries({queryKey: [QueryKey.project]})
    },
    onError: (res) => {
      toast.error(res.message);
    },
  });
  if (isPending) return <Loading />;

  const showDetailsModal = (projectId: string) => {
    setIsDetailsModalOpen(projectId);
  };

  const dataSource = data?.data?.data;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record) => (
        <Button
          type="link"
          style={{ padding: 0 }}
          onClick={() => showDetailsModal(record.id)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "Issue Date",
      dataIndex: "issueDate",
      key: "issueDate",
      render: (date) => formatDate(date),
    },
    {
      title: "Expected End Date",
      dataIndex: "expectedEndDate",
      key: "expectedEndDate",
      render: (date) => formatDate(date),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green";
        if (status === "To Do") {
          color = "red";
        } else if (status === "In Progress") {
          color = "orange";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Task",
      key: "task",
      render: (_, record) => renderTaskActions(record),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => renderActions(record),
    },
  ];

  const renderTaskActions = (record) => (
    <div>
      <Button
        type="link"
        onClick={() => setIsTaskModalOpen(record.id)}
        style={{ margin: 0 }}
      >
        Task List
      </Button>
      <Button
        type="primary"
        onClick={() => setIsModalOpen(record.id)}
        shape="circle"
        icon={<PlusCircleFilled />}
      />
    </div>
  );

  const handleChange = (record, status) => updateMutation.mutate({id: record.id, data:{status}})

  const renderActions = (record) => {
    const options = Object.values(PROJECT_STATUS).map((status) => ({
      value: status,
      label: formatString(status),
    }));

    return (
      <Select
        defaultValue={record?.status}
        style={{ width: 120 }}
        onChange={(value) => handleChange(record,value)}
        options={options}
      />
    );
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Project List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Total:</span> 4
        </p>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
      <TaskList
        isModalOpen={isTaskModalOpen}
        setIsModalOpen={setIsTaskModalOpen}
      />
      <AddTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ProjectDetails
        isModalOpen={isDetailsModalOpen}
        setIsModalOpen={setIsDetailsModalOpen}
      />
    </div>
  );
}
