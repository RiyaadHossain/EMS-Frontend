import EMSForm from "@/components/form/Form";
import EMSTextarea from "@/components/form/Textarea";
import type { FormProps } from "antd";
import { Modal } from "antd";

export default function AddAnnouncement({ isModalOpen, setIsModalOpen }) {

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
        title="Add Announcement"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSTextarea
          label="Announcement"
          name="announcement"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
