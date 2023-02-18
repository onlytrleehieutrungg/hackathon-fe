import { Menu, Button, Layout, Row, Affix, Col } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/logo.svg";
import "./Header.module.css";
import { auth } from "../../configuration/firebase/firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth.slice";
import { useSelector } from "react-redux";
import { LoginButtonContainer } from "./components/LoginButton.container";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const { Header } = Layout;
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(login(res));
      })
      .catch();
  };
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
                mode= "horizontal"
              >
                <Menu.Item key="home">Home</Menu.Item>
                <Menu.Item key="about">Shop</Menu.Item>
                <Menu.Item key="about us">About us</Menu.Item>
                <Menu.Item key="service">Service</Menu.Item>
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
