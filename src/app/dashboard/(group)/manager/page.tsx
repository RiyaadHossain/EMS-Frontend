"use client"
import { Row, Col } from "antd"
import WelcomeSection from "../components/WelcomeSection";
import RunningProjects from "../components/RunningProject";
import ActiveEmployee from "./components/ActiveEmployee";
import AttendanceSheet from "../components/AttendanceSheet";

export default function ManagerHome() {
  return (
    <div style={{ padding: "24px" }} className="flex flex-col gap-6">
      {/* Section 1: Welcome */}
      <WelcomeSection />

      {/* Section 2: Running Projects and Active Employee */}
      <Row gutter={16} style={{ marginTop: "24px" }}>
        <Col span={14}>
          <RunningProjects />
        </Col>
        <Col span={10}>
          <ActiveEmployee />
        </Col>
      </Row>

      {/* Section 3: Attendance Sheet */}
      <AttendanceSheet/>
    </div>
  );
}
