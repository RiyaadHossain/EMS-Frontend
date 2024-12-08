'use client'
import { Button, Checkbox, Table, Tag } from "antd"
import { useState } from "react";
import ProjectDetails from "../../components/modals/ProjectDetails";
import { PROJECT_STATUS } from "@/enums/project";
import { formatString } from "@/utils/format";


export default function TaskList() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState("");

  const showModal = (id) => {
    setIsDetailsModalOpen(id);
  };

  const dataSource = [
    {id: 1, taskName: 'task 1',projectName: 'project 1', status: 'completed'}
  ]

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName"
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      render: (text, record) => (
        <Button type='link' style={{padding:0}} onClick={() =>showModal(record.id)}>
          {text}
        </Button>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = 'green';
        if (status === PROJECT_STATUS.TO_DO) 
          color = 'red';
        return <Tag color={color}>{formatString(status)}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Checkbox defaultChecked={record.status == PROJECT_STATUS.COMPLETED} onChange={() => onChange(record.id)}></Checkbox>,
    },
  ];

  const onChange = (taskId) => {
    console.log(taskId);
    // handle update task api
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">Project List</h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl"><span className="font-semibold">Total:</span> 4</p>
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;

      <ProjectDetails isModalOpen={isDetailsModalOpen} setIsModalOpen={setIsDetailsModalOpen}/>
    </div>
  );
}
