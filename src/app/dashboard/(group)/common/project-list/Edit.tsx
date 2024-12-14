'use client'
import EMSDatePicker from "@/components/form/DatePicker";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getProjectDetails, updateProject } from "@/queries/project";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Modal } from "antd";
import dayjs from "dayjs";
import toast from "react-hot-toast";

export default function EditProject({ isEditModalOpen, setIsEditModalOpen }) {
  const queryClient = useQueryClient();
  const projectId = isEditModalOpen
  const { isPending, data } = useQuery({
    queryFn: () => getProjectDetails(projectId),
    queryKey: [QueryKey.project, projectId],
    enabled: !!projectId
  });


  const editProject = useMutation({
    mutationFn:  async ({ id, data }:any) => updateProject(id, data),
    onSuccess: (res: any) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      queryClient.invalidateQueries({ queryKey: [QueryKey.project] });
      toast.success(res.message);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  if(isPending && projectId) return <Loading/>
    
  const onFinish = (values: any) => {
    editProject.mutate({id:projectId, data:values})
    setIsEditModalOpen(false);
  };

  const onFinishFailed = () => toast.error("Something went wrong")
  
  const initialValues = {
    name: data?.data?.name,
    expectedEndDate: data?.data?.plainExpectedEndDate ? dayjs(data?.data?.plainExpectedEndDate) : null,
  };
  
  return (
    <Modal open={isEditModalOpen} footer={[]} onCancel={() => setIsEditModalOpen(false)}>
      <EMSForm
        initialValues={initialValues}
        border={null}
        title="Edit Project"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Project Name" name="name" />
        <EMSDatePicker name="expectedEndDate" label="Expecteded End Date" /> 
      
      </EMSForm>
    </Modal>
  );
}
