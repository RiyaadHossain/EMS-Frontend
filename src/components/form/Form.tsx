import { Button, Form} from "antd";

export default function EMSForm({ children, intialValues, title, onFinish, onFinishFailed, border = true }: any) {

  return (
    <div className={`${border && "border"} rounded-md p-5`}>
      <h3 className="text-center text-2xl font-semibold mb-2">{title} Form</h3>

      <Form
        layout="vertical"
        name="basic"
        style={{ width: "100%" }}
        initialValues={intialValues}
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
