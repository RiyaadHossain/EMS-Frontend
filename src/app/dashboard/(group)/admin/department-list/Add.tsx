import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import { QueryKey } from "@/constants/queryKey";
import { addDepartment } from "@/queries/department";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function AddDepartment({ isModalOpen, setIsModalOpen }) {
  const ueryClient= useQueryClient()

  const addDept = useMutation({
    mutationFn: addDepartment,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      ueryClient.invalidateQueries({queryKey:[QueryKey.department]})
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    addDept.mutate(values)
    setIsModalOpen(false);
  };

  const onFinishFailed = () => {
    toast.error("Something went wrong")
    setIsModalOpen(false)
  };

  return (
    <Modal open={isModalOpen} footer={[]} onCancel={handleCancel}>
      <EMSForm
        border={null}
        title="Add Department"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput
          label="Name"
          name="name"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
