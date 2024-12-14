"use client";
import { PAGE_URL } from "@/enums/pageUrl";
import { getUserInfo } from "@/helpers/jwt";
import { redirect } from "next/navigation";

export default function Home() {

  const userInfo = getUserInfo();
  if (!userInfo) redirect(PAGE_URL.Login);
  else redirect(PAGE_URL.Dashboard);
}
