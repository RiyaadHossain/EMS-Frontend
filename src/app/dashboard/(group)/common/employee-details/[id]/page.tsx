/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import React from "react";
import { Card, Col, Row, Avatar, Typography, Divider } from "antd";
import { useParams } from "next/navigation";

const { Title, Text } = Typography;

// Sample profile data
const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 123-456-7890",
  department: "Marketing",
  address: "123 Main St, City, Country",
  joinedAt: "January 15, 2021",
  projectsWorkedOn: ["Project Alpha", "Project Beta", "Project Gamma"],
  profilePictureUrl: "https://example.com/profile-pic.jpg",
};

export default function EmployeeDetails() {
  const { id } = useParams();
  console.log(id);

  return (
    //@ts-ignore
    <Card style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
      <Row gutter={[16, 16]} align="middle">
        <Col span={6}>
          <Avatar size={128}>
            <span className="text-5xl font-bold">
              {profileData.name.slice(0, 1)}
            </span>
          </Avatar>
        </Col>
        <Col span={18}>
          <Title level={2}>{profileData.name}</Title>
          <Text style={{ fontSize: "16px", color: "gray" }}>
            {profileData.email}
          </Text>
          <br />
          <Text style={{ fontSize: "16px", color: "gray" }}>
            {profileData.phone}
          </Text>
          <br />
          <Text style={{ fontSize: "16px", color: "gray" }}>
            {profileData.address}
          </Text>
          <br />
          <Text style={{ fontSize: "16px", color: "gray" }}>
            Joined: {profileData.joinedAt}
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Title level={4}>Projects Worked On</Title>
          <ul>
            {profileData.projectsWorkedOn.map((project, index) => (
              <li key={index}>
                <Text>{project}</Text>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Card>
  );
}
