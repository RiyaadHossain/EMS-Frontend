"use client";
import { Button, Table } from "antd";
import { useState } from "react";
import AddDepartment from "./Add";
import EditDepartment from "./Edit";

export default function DepartmentList() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dataSource = [
    {
      id: "1",
      departmentName: "Human Resources",
    },
    {
      id: "2",
      departmentName: "Finance",
    },
    {
      id: "3",
      departmentName: "Engineering",
    },
    {
      id: "4",
      departmentName: "Marketing",
    },
    {
      id: "5",
      departmentName: "Sales",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Department Name",
      dataIndex: "departmentName",
      key: "departmentName",
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
      <h2 className="text-center text-2xl font-bold mb-8">Department List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl"><span className="font-semibold">Total:</span> 23</p>
        <Button type="primary" onClick={showModal}>Add New</Button>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;

      <AddDepartment setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      <EditDepartment setIsEditModalOpen={setIsEditModalOpen} isEditModalOpen={isEditModalOpen} /> 
    </div>
  );
}
