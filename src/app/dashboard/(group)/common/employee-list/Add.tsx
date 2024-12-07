import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSTextarea from "@/components/form/Textarea";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function AddEmployee({ isModalOpen, setIsModalOpen }) {

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
        title="Add Employee"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput
          label="Name"
          name="name"
          required={true}
        />
        <EMSInput
          label="Email"
          name="email"
          required={true}
        />
        <EMSInput
          label="Department"
          name="department"
          required={true}
        />
        <EMSInput
          label="Phone"
          name="phone"
          required={true}
        />
        <EMSTextarea
          label="Address"
          name="address"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
