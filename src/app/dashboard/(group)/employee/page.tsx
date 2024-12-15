"use client"
import { Row, Col } from "antd"
import WelcomeSection from "../components/WelcomeSection";
import AttendanceSheet from "../components/AttendanceSheet";
import WorkingTask from "./components/WorkingTask";
import MyManager from "./components/MyManager";

export default function EmployeeHome() {
  return (
    <div style={{ padding: "24px" }} className="flex flex-col gap-6">
      {/* Section 1: Welcome */}
      <WelcomeSection />

      {/* Section 2: Running Projects and Active Employee */}
      <Row gutter={16} style={{ marginTop: "24px" }}>
        <Col span={14}>
          <WorkingTask/>
        </Col>
        <Col span={10}>
          {/* <RunningProjects /> */}
          <MyManager/>
        </Col>
      </Row>

      {/* Section 3: Attendance Sheet */}
      <AttendanceSheet/>
    </div>
  );
}
