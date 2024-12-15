import { getTwoDigitDate } from "@/utils/format";
import { Table, Badge, Typography } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  LineOutlined,
} from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { getMyAttendanceSheet } from "@/queries/attendance";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { getDay } from "@/utils/date";

export default function AttendanceSheet() {
  const { isPending, data } = useQuery({ queryFn: getMyAttendanceSheet, queryKey: [QueryKey.attendance, 'sheet'] })
  if (isPending) return <Loading />
  
  const columns = [
    ...Array.from({ length: 30 }, (_, index) => ({
      title: getTwoDigitDate(index + 1),
      dataIndex: `day${getTwoDigitDate(index + 1)}`,
      key: `day${index + 1}`,
      render: (status: boolean) => {
        let icon = <LineOutlined />;
        if (getDay() < index + 1) return <Badge count={icon} />;

        if (status) icon = <CheckCircleFilled style={{ color: "green" }} />;
        else icon = <CloseCircleFilled style={{ color: "red" }} />;
        return <Badge count={icon} />;
      },
    })),
  ];


  const dataSource = [ data?.data]

  return (
    <div>
      <Typography.Title level={4}>Attendance Sheet of March</Typography.Title>
      <Table bordered dataSource={dataSource} columns={columns} pagination={false} />;
    </div>
  );
}
