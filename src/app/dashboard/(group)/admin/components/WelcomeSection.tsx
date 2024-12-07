import { Row, Col, Typography, Button, Space, Statistic } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const WelcomeSection = () => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2}>Welcome, John Doe</Typography.Title>
      </Col>
      <Col>
        <Space>
        <Statistic title="Capital Balance" value={112893} precision={2} />
      <Button icon={<PlusOutlined/>} style={{ marginTop: 16 }} type="primary" shape="circle"/>
        </Space>
      </Col>
    </Row>
  );
};

export default WelcomeSection;
