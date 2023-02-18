import { Row, Col } from "antd";
export const LayoutContainer = (props) => {
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col xs={24} lg={24}>
        {props.children}
      </Col>
    </Row>
  );
};
