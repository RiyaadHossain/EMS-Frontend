import React from "react";
import { Avatar, Typography, Row, Col, Divider } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getMyManager } from "@/queries/manager";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";

const { Title, Text } = Typography;

export default function MyManager() {
  const { isPending, data } = useQuery({
    queryFn: getMyManager,
    queryKey: [QueryKey.manager],
  });
  if (isPending) return <Loading />;

  const managerData = data?.data;

  return (
    <>
      <Typography.Title level={4}>My Manager</Typography.Title>
      <div
  style={{
    backgroundColor: "#2a2a2a", // Dark background
    padding: "20px",
    borderRadius: "8px",
    maxWidth: "500px",
    color: "#f0f0f0", // Light text for better contrast
  }}
>
  <Row justify="center" style={{ marginBottom: "15px" }}>
    <Avatar
      size={80}
      style={{
        backgroundColor: "#1890ff", // Bright blue for avatar
        color: "#fff", // White text for contrast
        fontSize: "2rem", // Larger font size
      }}
    >
      {managerData?.name ? managerData?.name[0] : "N/A"}
    </Avatar>
  </Row>
  <Row justify="center">
    <Title
      level={4}
      style={{
        margin: 0,
        textAlign: "center",
        color: "#ffffff", // White for title
      }}
    >
      {managerData?.name || "No Manager Assigned"}
    </Title>
  </Row>
  <Row justify="center" style={{ marginBottom: "10px" }}>
    <Text type="secondary" style={{ color: "#bfbfbf" }}>
      {managerData?.department || "No Department Assigned"}
    </Text>
  </Row>
  <Divider style={{ borderColor: "#404040" }} />
  <Row>
    <Col span={12}>
      <Text strong style={{ color: "#d9d9d9" }}>Email:</Text>
    </Col>
    <Col span={12}>
      <Text style={{ color: "#f0f0f0" }}>{managerData?.email || "N/A"}</Text>
    </Col>
  </Row>
  <Row style={{ marginTop: "8px" }}>
    <Col span={12}>
      <Text strong style={{ color: "#d9d9d9" }}>Phone:</Text>
    </Col>
    <Col span={12}>
      <Text style={{ color: "#f0f0f0" }}>{managerData?.phone || "N/A"}</Text>
    </Col>
  </Row>
</div>

    </>
  );
}
