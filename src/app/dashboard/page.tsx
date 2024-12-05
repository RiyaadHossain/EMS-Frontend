"use client";
import React from "react";
import { Layout} from "antd";
import Sidebar from "./components/sidebar";
import Content from "./components/content";
import Header from "./components/header";

const { Footer } = Layout;


const App: React.FC = () => {


  return (
    <Layout className="h-full">
      <Sidebar/>
      <Layout>
        <Header/>
        <Content/>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
