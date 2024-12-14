import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getMyProfile, updateProfile } from "@/queries/profile";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function EditProfile({ isEditModalOpen, setIsEditModalOpen }) {
  const queryClient = useQueryClient()

  const { isPending, data } = useQuery({
    queryFn: getMyProfile,
    queryKey: [QueryKey.profile],
  });
  const updateProMutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }
      queryClient.invalidateQueries({queryKey: [QueryKey.profile]})
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });


  if (isPending) return <Loading />;

  const onFinish = (values: any) => {
    updateProMutation.mutate(values)
    setIsEditModalOpen(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const initialValues = data?.data;

  return (
    <Modal
      open={isEditModalOpen}
      footer={[]}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <EMSForm
        initialValues={initialValues}
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
