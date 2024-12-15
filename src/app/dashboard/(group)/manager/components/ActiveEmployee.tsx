import { List, Typography, Avatar, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/queries/employee";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { useState } from "react";
import EmployeeDetails from "../../components/modals/EmployeeDetails";

const ActiveEmployee = () => {
  const [isModalOpen, setIsModalOpen] = useState("");
  const { isPending, data } = useQuery({
    queryFn: getEmployees,
    queryKey: [QueryKey.employee],
  });
  if (isPending) return <Loading />;

  const employees = data?.data?.data?.slice(0, 6);

  return (
    <>
      <Typography.Title level={4}>Active Employees</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={employees}
        renderItem={(employee: any) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar  style={{
                  backgroundColor: "#1890ff", // Bright blue for contrast
                  color: "#fff", // White text inside avatar
                }}>
                  {employee.name[0]}
                </Avatar>
              }
              title={
                <Button
                  onClick={() => setIsModalOpen(employee.id)}
                  type="link"
                  style={{ padding: 0 }}
                >
                  {employee.name}
                </Button>
              }
              description={`Department: ${employee.department}`}
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/common/employee-list">
        <Button
          style={{ padding: 0 }}
          type="link"
          icon={<ArrowRightOutlined />}
          iconPosition="end"
        >
          See All
        </Button>
      </Link>
      <EmployeeDetails
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </>
  );
};

export default ActiveEmployee;
