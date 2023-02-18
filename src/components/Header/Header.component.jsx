import { Menu, Button, Layout, Row, Affix, Col } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/logo.svg";
import "./Header.module.css";
function HeaderComponent() {
  const { Header } = Layout;
  return (
    <Affix offsetTop={0}>
      <Header
        style={{
          padding: "20px",
          backgroundColor: "white",
          fontWeight: "bold",
        }}
      >
        <Row justify="space-around" align={"middle"}>
          <Col>
            <div>
              <img src={AppName} alt="logo" />
            </div>
          </Col>
          <Col>
            <div>
              <Menu
                mode={window.innerWidth < 768 ? "vertical" : "horizontal"}
                breakpoint="768"
              >
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">Shop</Menu.Item>
                <Menu.Item key="about us">About us</Menu.Item>
                <Menu.Item key="service">Service</Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col>
            <Button
              type="primary"
              style={{ background: "#F1635F" }}
              shape="round"
            >
              Contact
            </Button>
          </Col>
        </Row>
      </Header>
    </Affix>
  );
}

export default HeaderComponent;
