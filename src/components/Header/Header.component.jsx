import { Affix, Col, Layout, Menu, Row } from "antd";
import AppName from "../../img/BrandLogo/logo.svg";
import "./Header.module.css";

import {
  LINK_ABOUT_US,
  LINK_HOME,
  LINK_SERVICE,
  LINK_SHOP,
} from "../../constants/app.constants";
import { LoginButtonContainer } from "./components/LoginButton.container";
import { useNavigate } from "react-router";
const HeaderComponent = (props) => {
  const { handleClickMenu, signInWithGoogle } = props;
  const { Header } = Layout;
  const navigate = useNavigate();
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
              <img
                style={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/", { replace: true });
                }}
                src={AppName}
                alt="logo"
              />
            </div>
          </Col>
          <Col>
            <div>
              <Menu
                // mode={window.innerWidth < 768 ? "vertical" : "horizontal"}
                // breakpoint="768"
                mode="horizontal"
                onClick={handleClickMenu}
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
