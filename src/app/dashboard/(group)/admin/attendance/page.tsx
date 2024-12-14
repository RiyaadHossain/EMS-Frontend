"use client";
import { USER_ROLE } from "@/enums/userRole";
import { Table, Badge, Button } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  LineOutlined,
} from "@ant-design/icons";
import { getTwoDigitDate } from "@/utils/format";
import { DatePicker } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getEmployeeSheet } from "@/queries/attendance";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { getUserInfo } from "@/helpers/jwt";
import { useState } from "react";
import EmployeeDetails from "../../components/modals/EmployeeDetails";
import { getDay, getDaysInMonth, getMonthName } from "@/utils/date";

export default function Attandence() {
  const userInfo = getUserInfo();
  const isAdmin = userInfo.role == USER_ROLE.Admin;

  const mon = (new Date()).getMonth()
  const [month, setMonth] = useState(mon);
  const [isEmpModalOpen, setIsEmpModalOpen] = useState("");

  const { isPending, data } = useQuery({
    queryFn: () => getEmployeeSheet(month),
    queryKey: [QueryKey.attendance,month],
    enabled: !!month
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return record.employeeId ? (
          <Button
            type="link"
            style={{ margin: 0 }}
            onClick={() => setIsEmpModalOpen(record.employeeId)}
          >
            {text}
          </Button>
        ) : (
          <Button type="link" disabled>
            {text}
          </Button>
        );
      },
    },
    ...Array.from({ length: getDaysInMonth() }, (_, index) => ({
      title: getTwoDigitDate(index + 1),
      dataIndex: `day${getTwoDigitDate(index + 1)}`,
      key: `day${index + 1}`,
      render: (status: string) => {
        let icon = <LineOutlined />;
        if (getDay() < index + 1) return <Badge count={icon} />;

        if (status) icon = <CheckCircleFilled style={{ color: "green" }} />;
        else icon = <CloseCircleFilled style={{ color: "red" }} />;
        return <Badge count={icon} />;
      },
    })),
  ];

  const dataSource = data?.data;

  if (isPending) return <Loading />;

  const onChange = (date) => {
    const month = date.month()
    setMonth(() => month)
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-bold mb-8">
        Employee Attandance
      </h2>
      <div className="flex justify-between mb-4">
        <p className="text-xl">
          <span className="font-semibold">Month:</span> {getMonthName(month)}
        </p>
        {isAdmin && <DatePicker onChange={onChange} picker="month" />}
      </div>
      <Table
        bordered
        dataSource={dataSource}
        columns={columns}
        scroll={{ x: "max-content" }}
      />
      ;
      <EmployeeDetails
        isModalOpen={isEmpModalOpen}
        setIsModalOpen={setIsEmpModalOpen}
      />
    </div>
  );
}
