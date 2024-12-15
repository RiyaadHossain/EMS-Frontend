"use client";
import { PAGE_URL } from "@/enums/pageUrl";
import { getUserInfo } from "@/helpers/jwt";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const userInfo = getUserInfo();
  useEffect(() => {
    if (!userInfo) {
      redirect(PAGE_URL.Login);
    } else {
      redirect(PAGE_URL.Dashboard);
    }
  }, [userInfo]);

  return null; // Render nothing while redirecting
}
