import {Affix, Col, Layout, Menu, Row, Divider} from "antd";
import AppName from "../../img/BrandLogo/logo.svg";
import "./Header.module.css";
import React, {useEffect, useState} from "react";
import Drawers from "../../pages/PaymentPage/drawer";
import {
  LINK_ABOUT_US,
  LINK_HOME,
  LINK_SERVICE,
  LINK_SHOP,
} from "../../constants/app.constants";
import {Button, Drawer, Radio, Space, Badge} from "antd";
import {LoginButtonContainer} from "./components/LoginButton.container";
import {useNavigate} from "react-router";
import {DrawerProps} from "antd/es/drawer";
import {RadioChangeEvent} from "antd/es/radio";
import {useSelector} from "react-redux";
import {ShoppingCartOutlined} from "@ant-design/icons";
import mew from "../../img/mew.png";
const HeaderComponent = props => {
  const {handleClickMenu, signInWithGoogle} = props;
  const {Header} = Layout;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");

  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = e => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const {cart, total} = useSelector(state => state.card);
  const [cardPayment, setCartPayment] = useState();
  useEffect(() => {
    setCartPayment(cart);
  }, [cart]);

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
                style={{cursor: "pointer"}}
                onClick={() => {
                  navigate("/", {replace: true});
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
            <Button>
              <Badge
                count={cart?.length}
                onClick={() => setOpen(true)}
                // count={addedList.shoppingCartList.length}
              >
                <ShoppingCartOutlined />
              </Badge>
            </Button>
          </Col>
          <Col>
            <LoginButtonContainer signInWithGoogle={signInWithGoogle} />
          </Col>
        </Row>
        <Drawer
          title="Giỏ Hàng"
          placement={placement}
          width={500}
          onClose={onClose}
          open={open}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button type="primary" onClick={onClose}>
                OK
              </Button>
            </Space>
          }
        >
          <>
            {/* <Row>
              <Col span={8}>
                <h2>GIỎ HÀNG</h2>
              </Col>
              <Col span={8} offset={8} style={{alignSelf: "center"}}>
                sản phẩm trong giỏ
              </Col>
            </Row> */}
            <Divider orientation="left">
              <img
                style={{cursor: "pointer", width: "100px"}}
                src={AppName}
                alt="logo"
              />
            </Divider>
            {cardPayment?.map(product => (
              <Row>
                <Col span={8} offset={2}>
                  <img style={{width: "120px"}} src={mew} alt="example" />
                </Col>
                <Col span={8}>
                  <h3>{product.productName}</h3>
                  <p>Số lượng: {product.quantity}</p>
                  <h2 style={{color: "#f1635f"}}>{product?.price} Vnd</h2>
                </Col>
                <Divider />
              </Row>
            ))}

            <Divider orientation="left"></Divider>
            <Row>
              <Col span={8} style={{alignSelf: "center", ml: "60px"}}>
                <h3>Tổng tiền</h3>
              </Col>
              <Col span={8} offset={8}>
                <h2 style={{color: "#f1635f"}}>{total} Vnd</h2>
              </Col>
            </Row>
            <Divider></Divider>
            <Row>
              <Col offset={4}>
                <Button onClick={onClose}>Mua tiếp</Button>
              </Col>
              <Col span={8} offset={4}>
                <Button
                  type="primary"
                  onClick={() => {
                    navigate(`/viewcart`);
                  }}
                >
                  Thanh toán
                </Button>
              </Col>
            </Row>
          </>
        </Drawer>
      </Header>
    </Affix>
  );
};

export default HeaderComponent;
