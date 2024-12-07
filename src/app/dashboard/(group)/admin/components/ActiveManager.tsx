import { List, Typography, Avatar,Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const managers = [
  { name: 'Alice Johnson', department: 'Operations', id: 1 },
  { name: 'Bob Smith', department: 'Development', id: 2 },
];

const ActiveManager = () => {
  return (
    <>
      <Typography.Title level={4}>Active Managers</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={managers}
        renderItem={(manager) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{manager.name[0]}</Avatar>}
              title={
                <Link href={`/dashboard/common/employee-details/${manager.id}`} style={{ color: '#1890ff', fontWeight: 'bold' }}>
                  {manager.name}
                </Link>
              }
              description={`Department: ${manager.department}`}
            />
          </List.Item>
        )}
      />
       <Link href="/dashboard/admin/manager-list"><Button type="link" icon={<ArrowRightOutlined/>} iconPosition="end">See All</Button></Link>
    </>
  );
};

export default ActiveManager;
