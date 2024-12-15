import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getEmployeeSelectOptions } from "@/queries/employee";
import { addTask } from "@/queries/task";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { FormProps } from "antd";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function AddTask({ isModalOpen, setIsModalOpen }) {
  const queryClient = useQueryClient()
  const projectId = isModalOpen
  const { isPending: isEmpPending, data: empOptions } = useQuery({
    queryFn: () => getEmployeeSelectOptions(),
    queryKey: [QueryKey.employee, isModalOpen],
    enabled: !!isModalOpen,
  });

  const addTaskMutate = useMutation({
    mutationFn: addTask,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({queryKey: [QueryKey.task]})
      toast.success(res.message);
    },
    onError: (err) => toast.error(err.message),
  });

  if (isEmpPending && isModalOpen) return <Loading />;

  const onFinish: FormProps["onFinish"] = (values: any) => {
    values['project'] = projectId
    addTaskMutate.mutate(values)
    setIsModalOpen(false);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const employeeOptions = empOptions?.data;

  return (
    <Modal
      open={isModalOpen}
      footer={[]}
      onCancel={() => setIsModalOpen(false)}
    >
      <EMSForm
        border={null}
        title="Add Task"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Task Name" name="name" required={true} />
        <EMSSelect
          name="assignedTo"
          options={employeeOptions}
          label="Select Employee"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
