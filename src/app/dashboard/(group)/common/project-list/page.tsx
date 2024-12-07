
"use client";
import { Button, Table, Tag } from "antd";
import { useState } from "react";
import AddProject from "./Add";
import EditProject from "./Edit";
import Link from "next/link";

export default function ProjectList() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
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
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department"
    },
    {
      title: "Manager",
      dataIndex: "manager",
      key: "manager",
      render: (text, record) => (
        <Link href={`/profile/${record.id}`}>
          {text}
        </Link>
      ),
    },
    {
      title: "Issue Date",
      dataIndex: "issueDate",
      key: "issueDate",
    },
    {
      title: "Expected End Date",
      dataIndex: "expectedEndDate",
      key: "expectedEndDate",
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
      title: "Action",
      key: "action",
      render: (_, record) => renderActions(record),
    },
  ];

  const renderActions = (record: { id: string }) => (
    <div>
      <Button onClick={() => handleEdit(record.id)} style={{ marginRight: 8, color: "yellow" }}>
        Edit
      </Button>
      <Button onClick={() => handleDelete(record.id)} style={{ color: "red" }}>
        Delete
      </Button>
    </div>
  );

  // Sample handlers for Edit and Delete actions
  const handleEdit = (id: string) => {
    console.log(`Editing department with ID: ${id}`);
    setIsEditModalOpen(id)
    // Add your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log(`Deleting department with ID: ${id}`);
    // Add your delete logic here
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Project List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl"><span className="font-semibold">Total:</span> 4</p>
        <Button type="primary" onClick={showModal}>Add New</Button>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;

      <AddProject setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <EditProject setIsEditModalOpen={setIsEditModalOpen} isEditModalOpen={isEditModalOpen} /> 
    </div>
  );
}
