"use client";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import EMSSelect from "@/components/form/Select";
import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getDepartmentDetails, updateDepartment } from "@/queries/department";
import { getEmployeeSelectOptions } from "@/queries/employee";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import toast from "react-hot-toast";

export default function EditDepartment({
  isEditModalOpen,
  setIsEditModalOpen,
}) {
  const queryClient = useQueryClient();

  const deptId = isEditModalOpen;
  const { isPending: isEmpPending, data: empOptions } = useQuery({
    queryFn: () => getEmployeeSelectOptions(deptId),
    queryKey: [QueryKey.employee, deptId],
    enabled: !!isEditModalOpen,
  });

  const { isPending, data: deptData } = useQuery({
    queryFn: () => getDepartmentDetails(deptId),
    queryKey: [QueryKey.department, isEditModalOpen],
    enabled: !!isEditModalOpen,
  });

  const editDept = useMutation({
    mutationFn:  async ({ id, data }:any) => updateDepartment(id, data),
    onSuccess: (res: any) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.department] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if (deptId && (isPending || isEmpPending)) return <Loading />;
  
  const onFinish = (values: any) => {
    editDept.mutate({id:deptId, data:values})
    setIsEditModalOpen(false);
  };

  const onFinishFailed = () => toast.error("Something went wrong!");

  const initialValues = {
    name: deptData?.data?.name,
    manager: deptData?.data?.manager?.employee?.user?.name,
  };

  return (
    <Modal
      open={isEditModalOpen}
      footer={[]}
      onCancel={() => setIsEditModalOpen(false)}
    >
      <EMSForm
        initialValues={initialValues}
        border={null}
        title="Edit Department"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Department Name" name="name" required={true} />
        <EMSSelect
          name="employee"
          options={empOptions?.data}
          label="Select Manager"
        />
      </EMSForm>
    </Modal>
  );
}
