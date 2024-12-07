import EMSDatePicker from "@/components/form/DatePicker";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function AddProject({ isModalOpen, setIsModalOpen }) {
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
    }
  ];

  const managerOptions = [
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
        title="Add Project"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Project Name" name="projectName" required={true} />
        <EMSSelect name="department" options={deptOptions} label="Select Department" required={true} />
        <EMSSelect name="manager" options={managerOptions} label="Select Manager" required={true} />
        <EMSDatePicker name="issueDate" label="Issue Date" required={true}/> 
        <EMSDatePicker name="expectededEndDate" label="Expecteded End Date" required={true}/> 
      
      </EMSForm>
    </Modal>
  );
}
