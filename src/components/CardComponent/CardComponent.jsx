import { Button, Card, Col } from "antd";
import React from "react";
import food1 from "../../img/Product-svg/food1.svg";

function CardComponent(props) {
  const { item } = props;
  return (
    <Card
      hoverable
      style={{ width: 300, backgroundColor: "#FFE3E5" }}
      cover={<img alt="example" src={food1} />}
    >
      <Col align={"center"}>
        <b>Title of Product</b>
        <p>Description of product</p>
        <p>
          Price: <b style={{ color: "#F1635F" }}>$19.99</b>{" "}
        </p>
      </Col>

      <Button
        type="primary"
        style={{ background: "#101C2D", color: "white", width: "100%" }}
        shape="round"
        onClick={() => {}}
      >
        Buy now
      </Button>
    </Card>
  );
}

export default CardComponent;
