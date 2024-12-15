import Loading from "@/components/loading/Loading";
import { QueryKey } from "@/constants/queryKey";
import { getAttendanceStats } from "@/queries/attendance";
import { getMonthName } from "@/utils/date";
import { useQuery } from "@tanstack/react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  const { isPending, data } = useQuery({
    queryFn: getAttendanceStats,
    queryKey: [QueryKey.attendance, "stats"],
  });
  if (isPending) return <Loading />;

  const attendanceData = data?.data;

  return (
    <>
       <h3
          className="text-center mt-5 text-xl font-semibold"
          style={{ color: "#f0f0f0", marginBottom: '15px' }} // Adjust title color
        >
          Attendance Status of {getMonthName()}
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={attendanceData}>
            {/* Adjust the grid and chart stroke colors */}
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis
              dataKey="day"
              stroke="#f0f0f0" // Light axis labels for contrast
              tick={{ fill: "#f0f0f0" }} // Light tick marks
            />
            <YAxis stroke="#f0f0f0" tick={{ fill: "#f0f0f0" }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#333", // Dark tooltip background
                borderColor: "#555", // Subtle border
                color: "#f0f0f0", // Light text
              }}
              itemStyle={{ color: "#f0f0f0" }}
              labelStyle={{ color: "#f0f0f0" }}
            />
            {/* Line color adjusted for better contrast */}
            <Line
              type="monotone"
              dataKey="attend"
              stroke="#4caf50"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
       
    </>
  );
};

export default AttendanceChart;
