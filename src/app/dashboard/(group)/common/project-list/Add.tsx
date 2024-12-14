import EMSDatePicker from "@/components/form/DatePicker";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getDepartmentSelectOptions } from "@/queries/department";
import { addProject } from "@/queries/project";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function AddProject({ isModalOpen, setIsModalOpen }) {
  const ueryClient = useQueryClient();

  const {isPending, data: deptOptions} = useQuery({queryFn: getDepartmentSelectOptions, queryKey: [QueryKey.department, isModalOpen], enabled: !!isModalOpen})
  const mutation = useMutation({
    mutationFn: addProject,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      ueryClient.invalidateQueries({ queryKey: [QueryKey.project] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if(isPending) return <Loading/>

  const onFinish = (values: any) => {
    mutation.mutate(values);
    setIsModalOpen(false);
  };

  const onFinishFailed = () => toast.error("Something went wrong")

  console.log(deptOptions);

  return (
    <Modal
      open={isModalOpen}
      footer={[]}
      onCancel={() => setIsModalOpen(false)}
    >
      <EMSForm
        border={null}
        title="Add Project"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Project Name" name="name" required={true} />
        <EMSSelect
          name="department"
          options={deptOptions?.data}
          label="Select Department"
          required={true}
        />
        <EMSDatePicker name="issueDate" label="Issue Date" required={true} />
        <EMSDatePicker
          name="expectedEndDate"
          label="Expecteded End Date"
          required={true}
        />
      </EMSForm>
    </Modal>
  );
}
