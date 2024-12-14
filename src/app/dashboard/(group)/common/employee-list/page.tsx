"use client";
import { USER_ROLE } from "@/enums/userRole";
import { Table, Button } from "antd";
import { useState } from "react";
import AddEmployee from "./Add";
import EmployeeDetails from "../../components/modals/EmployeeDetails";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/queries/employee";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
// import { getDepartmentSelectOptions } from "@/queries/department";
import { getUserInfo } from "@/helpers/jwt";

export default function EmployeeList() {
  const userInfo = getUserInfo()
  const isAdmin = userInfo.role == USER_ROLE.Admin;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [department, setDepartment] = useState("");
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");

  const { isPending, data } = useQuery({ queryFn: () => getEmployees(), queryKey: [QueryKey.employee] })
  // const {isPending: isDeptPending, data: deptOptions}= useQuery({queryFn: getDepartmentSelectOptions, queryKey: [QueryKey.department]})
  if (isPending) return <Loading />

  const dataSource = data?.data?.data

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
        <Button
          onClick={() => setIsDetailsModalOpen(record?.id)}
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
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
  ];


  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Employee List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Total:</span> {dataSource.length}
        </p>
        {(isAdmin) && (
          <div className="flex gap-3">
           {/* <Select
              defaultValue="Filter Department"
              style={{ width: 200 }}
              onChange={(value) => setDepartment(() => value)}
              options={deptOptions?.data}
            /> */}
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Add New
            </Button>
          </div>
        )}
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
      <AddEmployee isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <EmployeeDetails isModalOpen={isDetailsModalOpen} setIsModalOpen={setIsDetailsModalOpen}/>
    </div>
  );
}
