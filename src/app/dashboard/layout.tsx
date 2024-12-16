"use client";
import React from "react";
import { Layout} from "antd";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Header from "./components/header";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "@/queries/profile";
import { QueryKey } from "@/constants/queryKey";
import Loading from "@/components/loading/Loading";
import { deleteToken } from "@/helpers/localStorage";
import { PAGE_URL } from "@/enums/pageUrl";
import { redirect } from "next/navigation";

const { Footer } = Layout;


const DashboardLayout: React.FC = ({ children }: any) => {
  const { isPending, isError, data } = useQuery({ queryFn: getMyProfile, queryKey: [QueryKey.user] })

  if (isPending)
    return <Loading/>
  
  if (isError)
  {
    deleteToken()
    redirect(PAGE_URL.Login)
  }

  const userData = data?.data 

  return (
    <Layout  style={{minHeight: '100vh'}}>
      <Sidebar/>
      <Layout>
        <Header userData={userData} />
        <Content content={children}/>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
