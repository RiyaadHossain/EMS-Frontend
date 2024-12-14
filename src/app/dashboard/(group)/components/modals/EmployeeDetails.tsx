/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React from "react";
import { Card, Col, Modal, Row, Avatar, Typography, Divider } from "antd";
import { QueryKey } from "@/constants/queryKey";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/loading/Loading";
import { getEmployeeDetails } from "@/queries/employee";
import { ENUM_DESIGNATION } from "@/enums/designation";

const { Title, Text } = Typography;

export default function EmployeeDetails({ isModalOpen, setIsModalOpen }) {
  const { isPending, data } = useQuery({
    queryFn: () => getEmployeeDetails(isModalOpen),
    queryKey: [QueryKey.employee, isModalOpen],
    enabled: !!isModalOpen,
  });
  if (isPending && isModalOpen) return <Loading />;
  const profileData = data?.data;

  return (
    <Modal
      open={isModalOpen}
      footer={null}
      onCancel={() => setIsModalOpen("")}
      width={800}
    >
      <Card style={{ padding: "24px", maxWidth: "800px", border: 0 }}>
        <Row gutter={[16, 16]} align="middle">
          {/* Avatar and Name Section */}
          <Col span={6}>
            <Avatar
              size={128}
              style={{ backgroundColor: "#1890ff", color: "#fff" }}
            >
              <span className="text-5xl font-bold">
                {profileData?.name.slice(0, 1)}
              </span>
            </Avatar>
          </Col>
          <Col span={18}>
            <Title level={2}>{profileData?.name}</Title>
            <Text style={{ fontSize: "16px", color: "gray" }}>
              {profileData?.department}
            </Text>
            <br />
            <Text style={{ fontSize: "16px", color: "gray" }}>
              {profileData?.email}
            </Text>
            <br />
            <Text style={{ fontSize: "16px", color: "gray" }}>
              {profileData?.phone}
            </Text>
            <br />
            <Text style={{ fontSize: "16px", color: "gray" }}>
              {profileData?.address}
            </Text>
            <br />
            <Text style={{ fontSize: "16px", color: "gray" }}>
              Joined: {profileData?.joinedAt}
            </Text>
          </Col>
        </Row>

        <Divider style={{ margin: "24px 0" }} />

        {/* Projects Worked On Section */}
        {profileData?.designation == ENUM_DESIGNATION.MANAGER && (
          <Row>
            <Col span={24}>
              <Title level={4}>Projects Worked On</Title>
              <ul style={{ paddingLeft: "20px" }}>
                {profileData?.projects.map((project, index) => (
                  <li key={index}>
                    <Text>{project?.name}</Text>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </Card>
    </Modal>
  );
}
