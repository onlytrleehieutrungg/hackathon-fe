import { Col, Layout, Row } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/logo.svg";
import { LayoutContainer } from "../Layout/Layout.component";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer style={{ padding: "20px 40px 20px 40px" }}>
        <LayoutContainer>
          <Row justify="space-around" align={"top"}>
            <Col span={5} align="left">
              <div>
                <img src={AppName} alt="logo" />
              </div>
              <div>
                <p>
                  Theo dõi chúng tôi để cập nhật sản phẩm mới, ưu đãi độc quyền
                  và lời khuyên chuyên gia về thú cưng.
                </p>
              </div>
            </Col>
            <Col span={2} align="left">
              <h3>Shop</h3>
              <p>Dogs</p>
              <p>Cats</p>
              <p>Human</p>
              {/* <Menu
              mode={window.innerWidth < 768 ? "horizontal" : "vertical"}
              breakpoint="768"
            >
              <Menu.Item key="dogs">Dogs</Menu.Item>
              <Menu.Item key="cats">Cats</Menu.Item>
              <Menu.Item key="human">Human</Menu.Item>
            </Menu> */}
            </Col>
            <Col span={2} align="left">
              <h3>About us</h3>
              <p>Our Story</p>
              <p>Careers</p>
              {/* <Menu
              mode={window.innerWidth < 768 ? "horizontal" : "vertical"}
              breakpoint="768"
            >
              <Menu.Item key="story">Our Story</Menu.Item>
              <Menu.Item key="careers">Careers</Menu.Item>
            </Menu> */}
            </Col>
            <Col span={2} align="left">
              <h3>Services</h3>
              <p>Dogs</p>
              <p>Cats</p>
              {/* <Menu
              mode={window.innerWidth < 768 ? "horizontal" : "vertical"}
              breakpoint="768"
            >
              <Menu.Item key="dogs">Dogs</Menu.Item>
              <Menu.Item key="cats">Cats</Menu.Item>
            </Menu> */}
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
        </LayoutContainer>
      </Footer>
    </div>
  );
};

export default Footer;
