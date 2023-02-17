import { Row, Col } from "antd";
export const LayoutContainer = (props) => {
  return (
    <Row>
      <Col span={24}>{props.children}</Col>
    </Row>
  );
};
