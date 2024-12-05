"use client";
import React from "react";
import EMSForm from "@/components/form/Form";
import type { FormProps } from "antd";
import EMSInput from "@/components/form/Input";

export default function Register() {
    type FieldType = {
        username?: string;
        password?: string;
        remember?: string;
      };
    
      const onFinish: FormProps<FieldType>["onFinish"] = (values: any) => {
        console.log("Success:", values);
      };
    
      const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
        errorInfo: any
      ) => {
        console.log("Failed:", errorInfo);
      };
    

  return (
    <div className="flex items-center justify-center h-full">
      <EMSForm
        title="Register"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Company Name" name="companyName" required={true} />
        <EMSInput label="Email" name="email" required={true} />
        <EMSInput label="Address" name="address" required={true} />
        <EMSInput label="Phone" name="phone" required={true} />
      </EMSForm>
    </div>
  );
}
