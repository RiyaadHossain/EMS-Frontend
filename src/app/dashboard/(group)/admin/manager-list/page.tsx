"use client";
import { Table } from "antd";
import Link from "next/link";

export default function ManagerList() {

  const dataSource = [
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 123-456-7890",
      department: "Human Resources",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 234-567-8901",
      department: "Finance",
    },
    {
      id: "3",
      name: "Michael Brown",
      email: "michael.brown@example.com",
      phone: "+1 345-678-9012",
      department: "Engineering",
    },
    {
      id: "4",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "+1 456-789-0123",
      department: "Marketing",
    },
    {
      id: "5",
      name: "William Johnson",
      email: "william.johnson@example.com",
      phone: "+1 567-890-1234",
      department: "Sales",
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
  ];


  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Manager List</h2>
      <div className="flex justify-start mb-4">
        <p className="text-xl"><span className="font-semibold">Total:</span> 5</p>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;

    </div>
  );
}
