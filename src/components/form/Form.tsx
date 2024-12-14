import { Button, Form} from "antd";

export default function EMSForm({width = "", children, initialValues, title, onFinish, onFinishFailed, border = true }: any) {

  return (
    <div className={`${border && "border"} rounded-md p-5 ${width}`}>
      <h3 className="text-center text-2xl font-semibold mb-2">{title} Form</h3>

      <Form
        layout="vertical"
        name="basic"
        style={{ width: "100%" }}
        initialValues={initialValues}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {children}

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            {title}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
