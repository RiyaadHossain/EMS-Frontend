import { DatePicker, Form } from "antd";

export default function EMSDatePicker({ name, label, required }) {
  return (
    <Form.Item name={name} label={label} rules={[{required, message: "This field is required" }]}>
      <DatePicker style={{ width: "100%" }} />
    </Form.Item>
  );
}
