"use client";
import { Button, Checkbox, Table, Tag } from "antd";
import { useState } from "react";
import ProjectDetails from "../../components/modals/ProjectDetails";
import { TASK_STATUS } from "@/enums/project";
import { formatString } from "@/utils/format";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTasks, updateTask } from "@/queries/task";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import toast from "react-hot-toast";

export default function TaskList() {
  const queryClient = useQueryClient();
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");
  const { isPending, data } = useQuery({
    queryFn: getTasks,
    queryKey: [QueryKey.task],
  });

  const editTask = useMutation({
    mutationFn: async ({ id, data }: any) => updateTask(id, data),
    onSuccess: (res: any) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.task] });
      toast.success(res.message);
    },
    onError: (err) => toast.error(err.message),
  });

  if (isPending) return <Loading />;

  const showModal = (id) => {
    setIsDetailsModalOpen(id);
  };

  const dataSource = data?.data;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Task Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record) => (
        <Button
          type="link"
          style={{ padding: 0 }}
          onClick={() => showModal(record.projectId)}
        >
          {text}
        </Button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "green";
        if (status === TASK_STATUS.TO_DO) color = "red";
        return <Tag color={color}>{formatString(status)}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Checkbox
            defaultChecked={record.status == TASK_STATUS.COMPLETED}
            onChange={(e) => onChange(record.id,e)}
          ></Checkbox>
        );
      },
    },
  ];

  const onChange = (taskId, e) => {
    const status = e.target.checked ? TASK_STATUS.COMPLETED : TASK_STATUS.TO_DO
    editTask.mutate({ id: taskId, data: { status } });
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
      <ProjectDetails
        isModalOpen={isDetailsModalOpen}
        setIsModalOpen={setIsDetailsModalOpen}
      />
    </div>
  );
}
