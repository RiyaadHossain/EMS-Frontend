import { getTwoDigitDate } from "@/utils/format";
import { Table, Badge, Typography } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  LineOutlined,
} from "@ant-design/icons";
import { ATTD_STATUS } from "@/enums/attendance";

export default function AttendanceSheet() {
  const columns = [
    ...Array.from({ length: 30 }, (_, index) => ({
      title: getTwoDigitDate(index + 1),
      dataIndex: `day${getTwoDigitDate(index + 1)}`,
      key: `day${index + 1}`,
      render: (status: string) => {
        let icon = <LineOutlined />;
        if (status == ATTD_STATUS.ATTEND)
          icon = <CheckCircleFilled style={{ color: "green" }} />;
        if (status == ATTD_STATUS.NOT_ATTEND)
          icon = <CloseCircleFilled style={{ color: "red" }} />;

        return <Badge count={icon} />;
      },
    })),
  ];

  const dataSource = [
    {
      day01: "attend",
      day02: "not-attend",
      day03: "attend",
      day04: "attend",
      day05: "attend",
      day06: "not-attend",
      day07: "attend",
      day08: "attend",
      day09: "attend",
      day10: "not-attend",
      day11: "attend",
      day12: "attend",
      day13: "not-attend",
      day14: "attend",
      day15: "attend",
      day16: "attend",
      day17: "not-attend",
      day18: "attend",
      day19: "attend",
      day20: "",
      day21: "",
      day22: "",
      day23: "",
      day24: "",
      day25: "",
      day26: "",
      day27: "",
      day28: "",
      day29: "",
      day30: "",
    },
  ];

  return (
    <div>
      <Typography.Title level={4}>Attendance Sheet of March</Typography.Title>
      <Table bordered dataSource={dataSource} columns={columns} />;
    </div>
  );
}
