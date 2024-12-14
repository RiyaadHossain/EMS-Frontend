"use client";
import React, { useState } from "react";
import { Col, Row, Avatar, Typography, Divider, Button } from "antd";
import EditProfile from "./Edit";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/queries/profile";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { USER_ROLE } from "@/enums/userRole";
import { getUserInfo } from "@/helpers/jwt";

const { Title, Text } = Typography;

export default function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { isPending, data } = useQuery({ queryFn: getMyProfile, queryKey: [QueryKey.profile] })
  if (isPending) return <Loading />
  
  const profileData = (data?.data);
  const role = getUserInfo()?.role

  return (
    <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center" }}>
          <Avatar size={128}><span className="text-5xl font-bold">{profileData.name.slice(0,1)}</span></Avatar>
          <Title style={{ margin: "16px 0", fontWeight: "bold" }}>
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
          <Title>Profile Details</Title>
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
    {role == USER_ROLE.Manager &&  <Row>
        <Col span={24}>
          <Title>Projects Worked On</Title>
          <ul>
            {profileData?.projects?.map((project, index) => (
              <li key={index}>
                <Text>{project?.name}</Text>
              </li>
            ))}
          </ul>
        </Col>
      </Row>}

      <EditProfile
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
      />
    </div>
  );
}
