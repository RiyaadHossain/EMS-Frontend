import { List, Typography, Avatar,Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Link from 'next/link';

const employees = [
  { name: 'Alice Johnson', department: 'Operations', id: 1 },
  { name: 'Bob Smith', department: 'Development', id: 2 },
];

const ActiveEmployee = () => {
  return (
    <>
      <Typography.Title level={4}>Active Employees</Typography.Title>
      <List
        itemLayout="horizontal"
        dataSource={employees}
        renderItem={(employee) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{employee.name[0]}</Avatar>}
              title={
                <Link href={`/dashboard/common/employee-details/${employee.id}`} style={{ color: '#1890ff', fontWeight: 'bold' }}>
                  {employee.name}
                </Link>
              }
              description={`Department: ${employee.department}`}
            />
          </List.Item>
        )}
      />
       <Link href="/dashboard/common/employee-list"><Button style={{padding:0}} type="link" icon={<ArrowRightOutlined/>} iconPosition="end">See All</Button></Link>
    </>
  );
};

export default ActiveEmployee;
