"use client";
import React from "react";
import EMSForm from "@/components/form/Form";
import type { FormProps } from "antd";
import EMSInput from "@/components/form/Input";
import EMSCheckbox from "@/components/form/Checkbox";

export default function LogIn() {

  const onFinish: FormProps["onFinish"] = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps["onFinishFailed"] = (
    errorInfo: any
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <EMSForm
        title="Log In"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <EMSInput label="Username" name="username" required={true} />
        <EMSInput
          label="Password"
          name="password"
          required={true}
          password={true}
        />
        <EMSCheckbox label="Remember Me" name="remember"/>
      </EMSForm>
    </div>
  );
}
