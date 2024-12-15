import { List, Typography, Avatar,Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getManagers } from '@/queries/manager';
import { QueryKey } from '@/constants/queryKey';
import Loading from '@/components/loading/Loading';
import EmployeeDetails from '../../components/modals/EmployeeDetails';
import { useState } from 'react';

const ActiveManager = () => {
  const [isModalOpen, setIsModalOpen] = useState("")

  const { isPending, data } = useQuery({ queryFn: getManagers, queryKey: [QueryKey.manager] })
  if (isPending) return <Loading />

  const managers = data?.data?.slice(0,6)

  return (
    <>
      <Typography.Title level={4}>Active Managers</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={managers}
        renderItem={(manager:any) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar  style={{
                backgroundColor: "#1890ff", // Bright blue for contrast
                color: "#fff", // White text inside avatar
              }}>{manager?.name[0]}</Avatar>}
              title={
                <Button onClick={() => setIsModalOpen(manager?.employeeId)} type="link" style={{ padding: 0 }}>
                  {manager?.name}
                </Button>
              }
              description={`Department: ${manager?.department}`}
            />
          </List.Item>
        )}
      />
      <Link href="/dashboard/admin/manager-list"><Button style={{ padding: 0 }} type="link" icon={<ArrowRightOutlined />} iconPosition="end">See All</Button></Link>
      <EmployeeDetails isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default ActiveManager;
