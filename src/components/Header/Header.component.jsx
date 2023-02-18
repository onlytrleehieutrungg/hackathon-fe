import { Menu, Layout, Row, Affix, Col } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/logo.svg";
import "./Header.module.css";

import { LoginButtonContainer } from "./components/LoginButton.container";
import {
  LINK_ABOUT_US,
  LINK_HOME,
  LINK_SERVICE,
  LINK_SHOP,
} from "../../constants/app.constants";

const HeaderComponent = (props) => {
  const { handleClickMenu, signInWithGoogle } = props;
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
                // mode={window.innerWidth < 768 ? "vertical" : "horizontal"}
                // breakpoint="768"
                mode="horizontal"
              >
                <Menu.Item key={LINK_HOME}>Home</Menu.Item>
                <Menu.Item key={LINK_SHOP}>Shop</Menu.Item>
                <Menu.Item key={LINK_ABOUT_US}>About us</Menu.Item>
                <Menu.Item key={LINK_SERVICE}>Service</Menu.Item>
              </Menu>
            </div>
          </Col>
          <Col>
            <LoginButtonContainer signInWithGoogle={signInWithGoogle} />
          </Col>
        </Row>
      </Header>
    </Affix>
  );
};

export default HeaderComponent;
