import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function EditDepartment({ isEditModalOpen, setIsEditModalOpen }) {
  const handleCancel = () => {
    setIsEditModalOpen(false);
  };

  const onFinish: FormProps["onFinish"] = (values: any) => {
    console.log("Success:", values);
    setIsEditModalOpen(false);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={isEditModalOpen} footer={[]} onCancel={handleCancel}>
      <EMSForm
        intialValues={{ departmentName: "IT" }}
        border={null}
        title="Edit Department"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput
          label="Department Name"
          name="departmentName"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
