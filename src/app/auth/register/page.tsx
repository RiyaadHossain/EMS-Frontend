"use client";
import React from "react";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "@/queries/user";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PAGE_URL } from "@/enums/pageUrl";

export default function Register() {
  const router = useRouter();

  const register = useMutation({
    mutationFn: registerUser,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      router.push(PAGE_URL.Login);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onFinishFailed = (errorInfo) =>
    toast.error(errorInfo.message || "Something went wrong");

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <EMSForm
        title="Register"
        onFinish={(data) => register.mutate(data)}
        onFinishFailed={onFinishFailed}
        width="w-1/3"
      >
        <EMSInput label="Company Name" name="companyName" required={true} />
        <EMSInput label="Email" name="email" required={true} />
        <EMSInput label="Address" name="address" required={true} />
        <EMSInput label="Phone" name="phone" required={true} />
      </EMSForm>
    </div>
  );
}
