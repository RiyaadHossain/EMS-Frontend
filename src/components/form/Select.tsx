import React from "react";
import { Select, Form } from "antd";

type PropType = {
  options: any;
  name: any;
  label: any;
  required: boolean;
  placeholder?: any;
};

export default function EMSSelect({
  name,
  options,
  label,
  required,
  placeholder,
}: PropType) {
  return (
    <Form.Item name={name} label={label} rules={[{ required, message: `This field is required!` }]}>
      
        <Select
          style={{ width: "100%" }}
          showSearch
          placeholder={placeholder || label}
          optionFilterProp="label"
          options={options}
        />
    </Form.Item>
  );
}
