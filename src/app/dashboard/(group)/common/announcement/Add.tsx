import EMSForm from "@/components/form/Form";
import EMSTextarea from "@/components/form/Textarea";
import { QueryKey } from "@/constants/queryKey";
import { addAnnouncement } from "@/queries/announcement";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function AddAnnouncement({ isModalOpen, setIsModalOpen }) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addAnnouncement, onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }
      queryClient.invalidateQueries({queryKey: [QueryKey.announcement]})
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    }
  })

  const onFinish = (values: any) => {
    mutation.mutate(values)

      setIsModalOpen(false)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      open={isModalOpen}
      footer={[]}
      onCancel={() => setIsModalOpen(false)}
    >
      <EMSForm
        border={null}
        title="Add Announcement"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSTextarea
          label="Announcement"
          name="text"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
