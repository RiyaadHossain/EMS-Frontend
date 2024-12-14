"use client";
import React from "react";
import { Layout} from "antd";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Header from "./components/header";

const { Footer } = Layout;


const DashboardLayout: React.FC = ({children}:any) => {

  return (
    <Layout  style={{minHeight: '100vh'}}>
      <Sidebar/>
      <Layout>
        <Header/>
        <Content content={children}/>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
