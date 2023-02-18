import { Col, Layout, Row } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/logo.svg";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ padding: "20px 40px 20px 40px" }}>
      <Row justify="space-around" align={"top"}>
        <Col span={5} align="left">
          <div>
            <img src={AppName} alt="logo" />
          </div>
          <div>
            <p>
              Theo dõi chúng tôi để cập nhật sản phẩm mới, ưu đãi độc quyền và
              lời khuyên chuyên gia về thú cưng.
            </p>
          </div>
        </Col>
        <Col span={2} align="left">
          <h3>Shop</h3>
          <p>Dogs</p>
          <p>Cats</p>
          <p>Human</p>
        </Col>
        <Col span={2} align="left">
          <h3>About us</h3>
          <p>Our Story</p>
          <p>Careers</p>
        </Col>
        <Col span={2} align="left">
          <h3>Services</h3>
          <p>Dogs</p>
          <p>Cats</p>
        </Col>
        <Col span={4} align="left">
          <h3>Contact</h3>
          <p>+ 84 934 799 190</p>
          <p>hello@petview.com</p>
          <p style={{ fontWeight: "bold" }}>
            Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố HCM
          </p>
        </Col>
      </Row>
    </Footer>
  );
};

export default Footer;
