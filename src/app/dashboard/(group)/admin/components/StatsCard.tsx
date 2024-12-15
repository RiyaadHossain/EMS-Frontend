import { Card, Col, Row, Typography } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { getDashboardStats } from '@/queries/dashboard';
import { QueryKey } from '@/constants/queryKey';
import toast from 'react-hot-toast';
import { getCardStats } from '../utils/getStatsIcon';
import Loading from '@/components/loading/Loading';

const StatsCards = () => {

  const { isPending, isError, data } = useQuery({ queryFn: getDashboardStats, queryKey: [QueryKey.dashboard] })
  
  if (isPending)
    return <Loading/>
  
  if (isError)
    toast.error("Something went wrong!")
  
  const stats = getCardStats(data.data || {})


  return (
    <Row gutter={16}>
      {stats.map(({ title, count, icon }, index) => (
          <Col span={6} key={index}>
          <Card
            style={{
              textAlign: 'center',
              // backgroundColor: '#f9f9f9',
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
