import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function AddDepartment({ isModalOpen, setIsModalOpen }) {

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish: FormProps["onFinish"] = (values: any) => {
      console.log("Success:", values);
      setIsModalOpen(false)
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={isModalOpen}
      footer={[]}
      onCancel={handleCancel}
    >
      <EMSForm
        border={null}
        title="Add Department"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput
          label="DepartmentName"
          name="departmentName"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
