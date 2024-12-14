"use client"
import { Row, Col, Card } from "antd"
import WelcomeSection from "../components/WelcomeSection";
import StatsCards from "./components/StatsCard";
import RunningProjects from "../components/RunningProject";
import ActiveManager from "./components/ActiveManager";
import SalaryChart from "./components/SalaryChart";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/queries/profile";
import { QueryKey } from "@/constants/queryKey";
import { useRouter } from "next/navigation";
import { PAGE_URL } from "@/enums/pageUrl";
import toast from "react-hot-toast";
import { deleteToken } from "@/helpers/localStorage";
import Loading from "@/components/loading/Loading";

export default function AdminHome() {
  const router = useRouter()

  const { isPending, isError, data } = useQuery({ queryFn: getMyProfile, queryKey: [QueryKey.user] })

  if (isPending)
    return <Loading/>
  
  if (isError)
  {
    deleteToken()
    toast.error("Something went wrong!")
    router.push(PAGE_URL.Login)
  }


  return (
    <div style={{ padding: '24px' }} className="flex flex-col gap-6">
      {/* Section 1: Welcome */}
      <WelcomeSection userData={data.data}/>

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
