import { Form, Input, Card, Button } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const BillForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card align={"center"} title="Thông tin hoá đơn">
      <Form
        {...layout}
        name="bill-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not a valid email address",
            },
            {
              required: true,
              message: "Please enter your email address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[
            {
              required: true,
              message: "Please enter your full name",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="streetAddress"
          rules={[
            {
              required: true,
              message: "Please enter your street address",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Xác nhận
          </Button>
        </Form.Item>
        <p>
          Chúng tôi sẽ gọi lại tư vấn và xác nhận đơn hàng<br /> trước khi giao hàng.
          Thông tin của bạn sẽ được sử dụng để xử lý<br /> đơn đặt hàng này theo chính
          sách của chúng tôi.
        </p>
      </Form>
    </Card>
  );
};

export default BillForm;
