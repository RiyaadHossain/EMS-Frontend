"use client";
import { Button, Table } from "antd";
import EmployeeDetails from "../../components/modals/EmployeeDetails";
import { useState } from "react";
import Loading from "@/components/loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { getManagers } from "@/queries/manager";
import { QueryKey } from "@/constants/queryKey";

export default function ManagerList() {

  const [isModalOpen, setIsModalOpen] = useState("")
  const { isPending, data } = useQuery({
    queryFn: () => getManagers(),
    queryKey: [QueryKey.manager,'manager-list'],
  });
  if (isPending) return <Loading />;

  const dataSource = data?.data
  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Button
          onClick={() => setIsModalOpen(record?.employeeId)}
          type="link"
          style={{ padding: 0 }}
        >
          {text}
        </Button>
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
        <p className="text-xl">
          <span className="font-semibold">Total:</span> {dataSource.length}
        </p>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
      <EmployeeDetails isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </div>
  );
}
