import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const salaryData = [
  { month: "Jan", cost: 30000 },
  { month: "Feb", cost: 35000 },
  { month: "Mar", cost: 40000 },
  { month: "Apr", cost: 38000 },
  { month: "May", cost: 42000 },
];

const SalaryChart = () => {
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="cost" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
      <h3 className="text-center mt-5 text-xl font-semibold">Salary Distrubution</h3>
    </>
  );
};

export default SalaryChart;
