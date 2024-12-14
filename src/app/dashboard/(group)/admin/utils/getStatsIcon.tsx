import { TeamOutlined, ProjectOutlined, UserOutlined, ApartmentOutlined } from '@ant-design/icons';

export const getCardStats = (data: any) => {
  return [
    {
      title: 'Departments',
      count: data.departments,
      icon: <ApartmentOutlined style={{ fontSize: '32px', color: '#1890ff' }} />,
    },
    {
      title: 'Projects',
      count: data.projects,
      icon: <ProjectOutlined style={{ fontSize: '32px', color: '#faad14' }} />,
    },
    {
      title: 'Managers',
      count: data.managers,
      icon: <UserOutlined style={{ fontSize: '32px', color: '#52c41a' }} />,
    },
    {
      title: 'Employees',
      count: data.employees,
      icon: <TeamOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} />,
    },
  ];
};
