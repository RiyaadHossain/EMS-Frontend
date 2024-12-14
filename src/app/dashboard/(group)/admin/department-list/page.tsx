/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Button, Table } from "antd";
import { useState } from "react";
import AddDepartment from "./Add";
import EditDepartment from "./Edit";
import EmployeeDetails from "../../components/modals/EmployeeDetails";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDepartments, removeDepartment } from "@/queries/department";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import toast from "react-hot-toast";

export default function DepartmentList() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState("");
  const [isEmpModalOpen, setIsEmpModalOpen] = useState("");

  const deleteDept = useMutation({
    mutationFn: async ({ id }: any) => removeDepartment(id),
    onSuccess: (res: any) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.department] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const { isPending, data } = useQuery({
    queryFn: () => getDepartments(),
    queryKey: [QueryKey.department],
  });
  if (isPending) return <Loading />;

  const departments = data?.data;

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
      title: "Department Name",
      dataIndex: "departmentName",
      key: "departmentName",
    },
    {
      title: "Manger",
      dataIndex: "manager",
      key: "manager",
      render: (text, record) => {
        return record.employeeId ? (
          <Button
            type="link"
            style={{ margin: 0 }}
            onClick={() => setIsEmpModalOpen(record.employeeId)}
          >
            {text}
          </Button>
        ) : (
          <Button type="link" disabled>
            {text}
          </Button>
        );
      },
    },
    {
      title: "Total Employee",
      dataIndex: "totalEmployee",
      key: "totalEmployee",
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
      {/* <Button onClick={() => deleteDept.mutate({id: record.id})} style={{ color: "red" }}>
        Delete
      </Button> */}
    </div>
  );

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Department List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Total:</span> {departments.length}
        </p>
        <Button type="primary" onClick={showModal}>
          Add New
        </Button>
      </div>
      <Table bordered dataSource={departments} columns={columns} />;
      <EmployeeDetails
        setIsModalOpen={setIsEmpModalOpen}
        isModalOpen={isEmpModalOpen}
      />
      <AddDepartment
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      <EditDepartment
        setIsEditModalOpen={setIsEditModalOpen}
        isEditModalOpen={isEditModalOpen}
      />
    </div>
  );
}
