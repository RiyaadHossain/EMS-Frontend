import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function AddTask({ isModalOpen, setIsModalOpen }) {
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps["onFinish"] = (values: any) => {
    console.log("Success:", values);
    setIsModalOpen(false);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const employeeOptions = [
    {
      value: "john-doe",
      label: "John Doe",
    },
    {
      value: "jane-smith",
      label: "Jane Smith",
    },
    {
      value: "michael-brown",
      label: "Michael Brown",
    },
    {
      value: "emily-davis",
      label: "Emily Davis",
    }
  ];
  
  return (
    <Modal open={isModalOpen} footer={[]} onCancel={handleCancel}>
      <EMSForm
        border={null}
        title="Add Task"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Task Name" name="taskName" required={true} />
        <EMSSelect name="employee" options={employeeOptions} label="Select Employee" required={true} />
      
      </EMSForm>
    </Modal>
  );
}
