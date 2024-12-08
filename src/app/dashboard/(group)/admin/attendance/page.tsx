"use client";
import { userRole } from "@/constants/dummy";
import { USER_ROLE } from "@/enums/userRole";
import { Table, Badge } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  LineOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { getTwoDigitDate } from "@/utils/date";
import { DatePicker } from "antd";
import { ATTD_STATUS } from "@/enums/attendance";

export default function Attandence() {
  const isAdmin = userRole == USER_ROLE.Admin;

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link href={`/dashboard/common/employee-details/${record.id}`}>
          {text}
        </Link>
      ),
    },
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
      id: 1,
      name: "John Doe",
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
    {
      id: 2,
      name: "Jane Smith",
      day01: "attend",
      day02: "attend",
      day03: "attend",
      day04: "not-attend",
      day05: "attend",
      day06: "attend",
      day07: "attend",
      day08: "not-attend",
      day09: "attend",
      day10: "attend",
      day11: "attend",
      day12: "not-attend",
      day13: "attend",
      day14: "attend",
      day15: "attend",
      day16: "not-attend",
      day17: "attend",
      day18: "attend",
      day19: "not-attend",
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
    // Add more employees as needed
  ];

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">
        Employee Attandance
      </h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Monthe:</span> February
        </p>
        {isAdmin && <DatePicker onChange={onChange} picker="month" />}
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
    </div>
  );
}
