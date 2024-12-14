import { Row, Col, Typography, Button, Space, Statistic } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { USER_ROLE } from "@/enums/userRole";
import { getUserInfo } from "@/helpers/jwt";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/queries/profile";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";

const WelcomeSection = () => {
  const { isPending, data } = useQuery({ queryFn: getMyProfile, queryKey: [QueryKey.profile] })
  if (isPending) return <Loading />
  const {role} = getUserInfo()

  const isAdmin = role==USER_ROLE.Admin

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2}>Welcome, {data?.name}</Typography.Title>
      </Col>
      <Col>
        {isAdmin ? (
          <Space>
            <Statistic title="Capital Balance" value={112893} precision={2} />
            <Button
              icon={<PlusOutlined />}
              style={{ marginTop: 16 }}
              type="primary"
              shape="circle"
            />
          </Space>
        ) : (
          <Button icon={<PlusOutlined />} type="primary">
            Conform Attendance
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default WelcomeSection;
