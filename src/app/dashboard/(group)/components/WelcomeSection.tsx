import { Row, Col, Typography, Button, Space, Statistic } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { userRole } from "@/constants/dummy";
import { USER_ROLE } from "@/enums/userRole";

const WelcomeSection = () => {
  //@ts-ignore
  const isAdmin = userRole==USER_ROLE.Admin

  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2}>Welcome, John Doe</Typography.Title>
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
