"use client";
import { Button, Table, Tag } from "antd";
import { useState } from "react";
import AddProject from "./Add";
import EditProject from "./Edit";
import ProjectDetails from "../../components/modals/ProjectDetails";
import { formatDate } from "@/utils/format";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProjects, removeProject } from "@/queries/project";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import toast from "react-hot-toast";
import EmployeeDetails from "../../components/modals/EmployeeDetails";

export default function ProjectList() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState("");
  const [isEmpDetailsModalOpen, setIsEmpDetailsModalOpen] = useState("");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");

  const { isPending, data } = useQuery({
    queryFn: () => getProjects(),
    queryKey: [QueryKey.project],
  });

  const deleteProject = useMutation({
    mutationFn: async ({ id }: any) => removeProject(id),
    onSuccess: (res: any) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.project] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (isPending) return <Loading />;

  const projects = data.data.data;

  const showModal = () => {
    setIsModalOpen(true);
  };

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
          onClick={() => setIsDetailsModalOpen(record.id)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
      render: (text, record) => (
        <Button
        type="link"
        style={{ padding: 0 }}
        onClick={() => setIsEmpDetailsModalOpen(record.employeeId)}
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
      title: "Action",
      key: "action",
      render: (_, record) => renderActions(record),
    },
  ];

  const renderActions = (record: { id: string }) => (
    <div>
      <Button
        onClick={() => setIsEditModalOpen(record.id)}
        style={{ marginRight: 8, color: "yellow" }}
      >
        Edit
      </Button>
      <Button onClick={() => deleteProject.mutate({id:record.id})} style={{ color: "red" }}>
        Delete
      </Button>
    </div>
  );

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Project List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Total:</span> 4
        </p>
        <Button type="primary" onClick={showModal}>
          Add New
        </Button>
      </div>
      <Table bordered dataSource={projects} columns={columns} />;
      <AddProject setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <EditProject
        setIsEditModalOpen={setIsEditModalOpen}
        isEditModalOpen={isEditModalOpen}
      />
      <ProjectDetails
        isModalOpen={isDetailsModalOpen}
        setIsModalOpen={setIsDetailsModalOpen}
      />
      <EmployeeDetails
        isModalOpen={isEmpDetailsModalOpen}
        setIsModalOpen={setIsEmpDetailsModalOpen}
      />
    </div>
  );
}
