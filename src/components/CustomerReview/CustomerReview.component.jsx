import { Avatar, Card, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";

function CustomerReviewComponent() {
  return (
    <Card type="inner" size="small">
      <Row>
        <Col span={4} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Avatar size={100} icon={<UserOutlined />} />
        </Col>
        <Col align="left" span={20}>
          <p style={{ fontWeight: "bold", fontSize: "36px" }}>Review</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit, quo corrupti porro libero similique ut nulla nihil
            sapiente molestiae sint, maiores atque asperiores dolorum quidem
            impedit alias quam! Omnis, iste?
          </p>
          <p style={{ fontWeight: "bold", fontSize: "40px" }}>Name</p>
          <p>Ho Chi Minh</p>
        </Col>
      </Row>
    </Card>
  );
}

export default CustomerReviewComponent;
