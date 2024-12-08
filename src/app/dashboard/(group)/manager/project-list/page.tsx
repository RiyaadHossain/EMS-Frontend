
"use client";
import { Button, Select, Table, Tag } from "antd";
import {PlusCircleFilled} from "@ant-design/icons"
import { useState } from "react";
import ProjectDetails from "../../components/modals/ProjectDetails";
import AddTask from "./AddTask";
import { formatDate, formatString } from "@/utils/format";
import TaskList from "./TaskList";
import { PROJECT_STATUS } from "@/enums/project";

export default function ProjectList() {

  const [isModalOpen, setIsModalOpen] = useState("");
  const [isTaskModalOpen, setIsTaskModalOpen] = useState("");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");

  const showDetailsModal = (projectId:string) => {
    setIsDetailsModalOpen(projectId);
  };

  const dataSource = [
    {
      id: "1",
      projectName: "Employee Management System",
      department: "Human Resources",
      manager: "John Doe",
      issueDate: "2024-12-01",
      expectedEndDate: "2025-06-01",
      status: "To Do",
    },
    {
      id: "2",
      projectName: "Finance Tracker",
      department: "Finance",
      manager: "Jane Smith",
      issueDate: "2024-11-15",
      expectedEndDate: "2025-02-15",
      status: "In Progress",
    },
    {
      id: "3",
      projectName: "Inventory System",
      department: "Engineering",
      manager: "Michael Brown",
      issueDate: "2024-10-10",
      expectedEndDate: "2025-10-10",
      status: "Completed",
    },
    {
      id: "4",
      projectName: "Marketing Campaign Tracker",
      department: "Marketing",
      manager: "Emily Davis",
      issueDate: "2024-09-20",
      expectedEndDate: "2025-05-20",
      status: "In Progress",
    },
    {
      id: "5",
      projectName: "Sales Dashboard",
      department: "Sales",
      manager: "William Johnson",
      issueDate: "2024-08-01",
      expectedEndDate: "2025-01-01",
      status: "To Do",
    },
  ];


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
        <Button type='link' style={{padding:0}} onClick={() =>showDetailsModal(record.id)}>
          {text}
        </Button>
      ),
    },
    {
      title: "Issue Date",
      dataIndex: "issueDate",
      key: "issueDate",
      render: (date) => formatDate(date)
    },
    {
      title: "Expected End Date",
      dataIndex: "expectedEndDate",
      key: "expectedEndDate",
      render: (date) => formatDate(date)
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = 'green';
        if (status === 'To Do') {
          color = 'red';
        } else if (status === 'In Progress') {
          color = 'orange';
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
      <Button type="link" onClick={() => setIsTaskModalOpen(record.id)} style={{ margin: 0 }}>
        Task List
      </Button>
      <Button type="primary" onClick={() => setIsModalOpen(record.id)} shape="circle" icon={<PlusCircleFilled/>}/>
    </div>
  );

  const handleChange = (record) => {
    console.log(record);
  }

  const renderActions = (record) => {
    const options = Object.values(PROJECT_STATUS).map((status) => ({
      value: status,
      label: formatString(status)
    }));

   return <Select
      defaultValue={options[0]}
      style={{ width: 120 }}
      onChange={() => handleChange(record)}
      options={options}
    />
  }



  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Project List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl"><span className="font-semibold">Total:</span> 4</p>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;

      <TaskList isModalOpen={isTaskModalOpen} setIsModalOpen={setIsTaskModalOpen} />
      <AddTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      <ProjectDetails isModalOpen={isDetailsModalOpen} setIsModalOpen={setIsDetailsModalOpen}/>
    </div>
  );
}
