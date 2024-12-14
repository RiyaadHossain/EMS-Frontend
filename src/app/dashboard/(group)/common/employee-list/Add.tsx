import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import EMSTextarea from "@/components/form/Textarea";
import Loading from "@/components/loading/Loading";
import { DESIGNATION_OPTIONS } from "@/constants/designation";
import { QueryKey } from "@/constants/queryKey";
import { getDepartmentSelectOptions } from "@/queries/department";
import { addEmployee } from "@/queries/employee";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function AddEmployee({ isModalOpen, setIsModalOpen }) {
  const { isPending: isDeptPending, data: deptOptions } = useQuery({
    queryFn: getDepartmentSelectOptions,
    queryKey: [QueryKey.department],
  });
  const mutation = useMutation({
    mutationFn: addEmployee,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (isDeptPending) return <Loading />;

  const onFinish = (values: any) => {
    mutation.mutate(values);
    setIsModalOpen(false);
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
        title="Add Employee"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Name" name="name" required={true} />
        <EMSInput label="Email" name="email" required={true} />
        <EMSSelect options={DESIGNATION_OPTIONS} label="Designation" name="designation" required={true} />
        <EMSSelect
          name="department"
          options={deptOptions?.data}
          label="Select Department"
          required={true}
        />
        <EMSInput label="Phone" name="phone" required={true} />
        <EMSTextarea label="Address" name="address" required={true} />
      </EMSForm>
    </Modal>
  );
}
