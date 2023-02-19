import { Row, Col } from "antd";
import CardComponent from "./CardComponent";
export const CardContainer = () => {
  const listItem = [
    {
      id: 1,
      title: "Good food",
      des: "123",
      price: 100,
    },
    {
      id: 2,
      title: "Good food",
      des: "123",
      price: 100,
    },
    {
      id: 2,
      title: "Good food",
      des: "123",
      price: 100,
    },
    {
      id: 2,
      title: "Good food",
      des: "123",
      price: 100,
    },
    {
      id: 2,
      title: "Good food",
      des: "123",
      price: 100,
    },
    {
      id: 2,
      title: "Good food",
      des: "123",
      price: 100,
    },
  ];
  return (
    <Row gutter={[8, 16]}>
      {listItem.map((item) => (
        <Col span={8}>
          <CardComponent item={item} />
        </Col>
      ))}
    </Row>
  );
};
