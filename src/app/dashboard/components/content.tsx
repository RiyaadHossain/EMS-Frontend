import { Layout, theme } from "antd";

export default function Content({content}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout.Content style={{ margin: "24px 16px 0" }} className="h-full">
      <div
        style={{
          padding: 24,
          minHeight: 360,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        {content}
      </div>
    </Layout.Content>
  );
}
