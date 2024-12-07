import { Card, Col, Row, Typography } from 'antd';
import { TeamOutlined, ProjectOutlined, UserOutlined, ApartmentOutlined } from '@ant-design/icons';

const stats = [
  { title: 'Departments', count: 5, icon: <ApartmentOutlined style={{ fontSize: '32px', color: '#1890ff' }} /> },
  { title: 'Projects', count: 12, icon: <ProjectOutlined style={{ fontSize: '32px', color: '#faad14' }} /> },
  { title: 'Managers', count: 4, icon: <UserOutlined style={{ fontSize: '32px', color: '#52c41a' }} /> },
  { title: 'Employees', count: 50, icon: <TeamOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} /> },
];

const StatsCards = () => {
  return (
    <Row gutter={16}>
      {stats.map(({ title, count, icon }, index) => (
          <Col span={6} key={index}>
          <Card
            style={{
              textAlign: 'center',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              padding: '16px',
            }}
          >
            <div style={{ marginBottom: '10px' }}>{icon}</div>
            <Typography.Title level={3} style={{ margin: 0 }}>
              {count}
            </Typography.Title>
            <Typography.Text style={{ fontSize: '16px', fontWeight: 'bold' }}>
              {title}
            </Typography.Text>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default StatsCards;
