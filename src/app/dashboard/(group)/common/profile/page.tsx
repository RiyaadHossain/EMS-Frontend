"use client";
import React, { useState } from "react";
import { Col, Row, Avatar, Typography, Divider, Button } from "antd";
import EditProfile from "./Edit";

const { Title, Text } = Typography;

// Sample profile data
const profileData = {
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 123-456-7890",
  department: "IT",
  address: "123 Main St, City, Country",
  joinedAt: "January 15, 2021",
  projectsWorkedOn: ["Project Alpha", "Project Beta", "Project Gamma"],
  profilePictureUrl: "https://example.com/profile-pic.jpg",
};

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Avatar size={128}><span className="text-5xl font-bold">{profileData.name.slice(0,1)}</span></Avatar>
          <Title z style={{ margin: "16px 0", fontWeight: "bold" }}>
            {profileData.name}
          </Title>
        </Col>
      </Row>
      <Divider />

      <Row
        justify="space-between"
        align="middle"
        style={{ marginBottom: "16px" }}
      >
        <Col>
          <Title z>Profile Details</Title>
        </Col>
        <Col>
          <Button type="primary" onClick={() => setIsEditModalOpen(true)}>
            Edit
          </Button>
        </Col>
      </Row>

      <Row gutter={[0, 16]}>
        <Col span={24}>
          <Text
            style={{ display: "block", fontWeight: "500", marginBottom: "8px" }}
          >
            Department:{" "}
            <span style={{ fontWeight: "400" }}>{profileData.department}</span>
          </Text>
          <Text
            style={{ display: "block", fontWeight: "500", marginBottom: "8px" }}
          >
            Email:{" "}
            <span style={{ fontWeight: "400" }}>{profileData.email}</span>
          </Text>
          <Text
            style={{ display: "block", fontWeight: "500", marginBottom: "8px" }}
          >
            Phone:{" "}
            <span style={{ fontWeight: "400" }}>{profileData.phone}</span>
          </Text>
          <Text
            style={{ display: "block", fontWeight: "500", marginBottom: "8px" }}
          >
            Address:{" "}
            <span style={{ fontWeight: "400" }}>{profileData.address}</span>
          </Text>
          <Text
            style={{ display: "block", fontWeight: "500", marginBottom: "8px" }}
          >
            Joined:{" "}
            <span style={{ fontWeight: "400" }}>{profileData.joinedAt}</span>
          </Text>
        </Col>
      </Row>

      <Divider />
      <Row>
        <Col span={24}>
          <Title z>Projects Worked On</Title>
          <ul>
            {profileData.projectsWorkedOn.map((project, index) => (
              <li key={index}>
                <Text>{project}</Text>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      <EditProfile
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </div>
  );
}
