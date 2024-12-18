import { Form, Input } from "antd";

export default function EMSInput({ label, name, required, password, disabled }: any) {
  let rules = [];
  if (required)
    rules = [
      ...rules,
      { required: true, message: `This field is required!` },
    ];

  return (
    <Form.Item label={label} name={name} rules={[...rules]}>
      {!password ? <Input disabled={disabled} /> : <Input.Password />}
    </Form.Item>
  );
}
