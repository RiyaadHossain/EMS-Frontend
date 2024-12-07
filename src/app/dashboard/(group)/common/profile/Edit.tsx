import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function EditProfile({ isEditModalOpen, setIsEditModalOpen }) {
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
    
    const initialValues = {
        name: "Riyad",
        email: "he@g.com",
        phone: "023423",
        address: "23423423"
    }


  return (
    <Modal open={isEditModalOpen} footer={[]} onCancel={handleCancel}>
      <EMSForm
        intialValues={initialValues}
        border={null}
        title="Edit Profile"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Name" name="name" required={true} />
        <EMSInput disabled label="Email" name="email" required={true} />
        <EMSInput label="Phone" name="phone" required={true} />
        <EMSInput label="Address" name="address" required={true} />
        
      </EMSForm>
    </Modal>
  );
}
