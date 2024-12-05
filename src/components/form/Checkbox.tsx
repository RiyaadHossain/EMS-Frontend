import { Form, Checkbox } from "antd";

export default function EMSCheckbox({ label, name, required }: any) {
  let rules = [];
  if (required)
    rules = [
      ...rules,
      { required: true, message: `This field is required!` },
    ];

  return (
    <Form.Item name={name} rules={[...rules]} valuePropName="checked" >
      <Checkbox>{label}</Checkbox>
    </Form.Item>
  );
}
