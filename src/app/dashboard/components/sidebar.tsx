import React from "react";
import { Menu, Layout } from "antd"
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));


export default function Sidebar() {
  return (
    <Layout.Sider breakpoint="lg" collapsedWidth="0">
        {/* <div className="demo-logo-vertical text-center text-xl font-bold my-3" >EMS</div> */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Layout.Sider>
  );
}
