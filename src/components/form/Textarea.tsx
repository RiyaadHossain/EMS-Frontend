import { Form, Input } from "antd";

export default function EMSTextarea({ label, name, required, disabled, rows=6 }: any) {
  let rules = [];
  if (required)
    rules = [
      ...rules,
      { required: true, message: `This field is required!` },
    ];

  return (
    <Form.Item label={label} name={name} rules={[...rules]}>
      <Input.TextArea rows={rows} disabled={disabled} /> 
    </Form.Item>
  );
}
