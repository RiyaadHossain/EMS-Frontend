"use client";
import { userRole } from "@/constants/dummy";
import { USER_ROLE } from "@/enums/userRole";
import { Table, Select, Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import AddEmployee from "./Add";

export default function EmployeeList() {
  const isAdmin = userRole == USER_ROLE.Admin;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const dataSource = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      department: "Human Resources",
      designation: "HR Manager",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 234-567-8901",
      department: "Finance",
      designation: "Financial Analyst",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1 345-678-9012",
      department: "Engineering",
      designation: "Software Engineer",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 456-789-0123",
      department: "Marketing",
      designation: "Marketing Specialist",
    },
    {
      id: "5",
      name: "William Johnson",
      email: "william.johnson@example.com",
      phone: "+1 567-890-1234",
      department: "Sales",
      designation: "Sales Executive",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/dashboard/common/employee-details/${record.id}`}>
          {text}
        </Link>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
  ];

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const deptOptions = [
    {
      value: "hr",
      label: "Human Resources",
    },
    {
      value: "finance",
      label: "Finance",
    },
    {
      value: "engineering",
      label: "Engineering",
    },
  ];

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Employee List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Total:</span> 5
        </p>
        {isAdmin && (
          <div className="flex gap-3">
            <Select
              defaultValue="Filter Department"
              style={{ width: 200 }}
              onChange={handleChange}
              options={deptOptions}
            />
            <Button type="primary" onClick={showModal}>
              Add New
            </Button>
          </div>
        )}
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
      <AddEmployee isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}
