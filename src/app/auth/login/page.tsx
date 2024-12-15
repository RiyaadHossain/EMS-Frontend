"use client";
import React from "react";
import EMSForm from "@/components/form/Form";
import EMSInput from "@/components/form/Input";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "@/queries/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { PAGE_URL } from "@/enums/pageUrl";

export default function LogIn() {
  const router = useRouter();

  const login = useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      if (!res.success) {
        toast.error(res.message);
        return;
      }

      toast.success(res.message);
      router.push(PAGE_URL.Dashboard);
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const onFinishFailed = () => toast.error("Try again later!");

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <EMSForm
        title="Log In"
        onFinish={(data) => login.mutate(data)}
        onFinishFailed={onFinishFailed}
        width="w-1/3"
      >
        <EMSInput label="User Id" name="userId" required={true} />
        <EMSInput
          label="Password"
          name="password"
          required={true}
          password={true}
        />
      </EMSForm>
    </div>
  );
}
