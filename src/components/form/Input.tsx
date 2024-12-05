import { Form, Input } from "antd";

export default function EMSInput({ label, name, required, password }: any) {
  let rules = [];
  if (required)
    rules = [
      ...rules,
      { required: true, message: `Please input your ${label}!` },
    ];

  return (
    <Form.Item label={label} name={name} rules={[...rules]}>
      {!password ? <Input /> : <Input.Password />}
    </Form.Item>
  );
}
