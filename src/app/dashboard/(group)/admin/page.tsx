"use client"
import { Row, Col, Card } from "antd"
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "./components/StatsCard";
import RunningProjects from "../components/RunningProject";
import ActiveManager from "./components/ActiveManager";
import SalaryChart from "./components/SalaryChart";

export default function AdminHome() {
  return (
    <div style={{ padding: '24px' }} className="flex flex-col gap-6">
      {/* Section 1: Welcome */}
      <WelcomeSection />

      {/* Section 2: Stats Cards */}
      <StatsCards />

      {/* Section 3: Running Projects and Active Manager */}
      <Row gutter={16} style={{ marginTop: '24px' }}>
        <Col span={14}>
          <RunningProjects />
        </Col>
        <Col span={10}>
          <ActiveManager />
        </Col>
      </Row>

      {/* Section 4: Salary Chart */}
      <Card style={{ marginTop: '24px' }}>
        <SalaryChart />
      </Card>
    </div>
  );
}
