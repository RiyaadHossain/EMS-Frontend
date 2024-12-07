"use client";
import { userRole } from "@/constants/dummy";
import { USER_ROLE } from "@/enums/userRole";
import { Table, Badge } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";
import { getTwoDigitDate } from "@/utils/date";
import { DatePicker } from 'antd';


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
        const icon = status ? (
          <CheckCircleFilled style={{ color: "green" }} />
        ) : (
          <CloseCircleFilled style={{ color: "red" }} />
        );
        return <Badge count={icon} />;
      },
    })),
  ];

  const dataSource = [
    {
      id: 1,
      name: "John Doe",
      day01: true,
      day02: false,
      day03: true,
      day04: true,
      day05: true,
      day06: false,
      day07: true,
      day08: true,
      day09: true,
      day10: false,
      day11: true,
      day12: true,
      day13: false,
      day14: true,
      day15: true,
      day16: true,
      day17: false,
      day18: true,
      day19: true,
      day20: true,
      day21: false,
      day22: true,
      day23: false,
      day24: true,
      day25: true,
      day26: false,
      day27: true,
      day28: true,
      day29: true,
      day30: false,
    },
    {
      id: 2,
      name: "Jane Smith",
      day01: true,
      day02: true,
      day03: true,
      day04: false,
      day05: true,
      day06: true,
      day07: true,
      day08: false,
      day09: true,
      day10: true,
      day11: true,
      day12: false,
      day13: true,
      day14: true,
      day15: true,
      day16: false,
      day17: true,
      day18: true,
      day19: false,
      day20: true,
      day21: true,
      day22: false,
      day23: true,
      day24: true,
      day25: false,
      day26: true,
      day27: true,
      day28: true,
      day29: false,
      day30: true,
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
        {isAdmin && (
          <DatePicker onChange={onChange} picker="month" />
        )}
      </div>
      <Table bordered dataSource={dataSource} columns={columns} />;
    </div>
  );
}
