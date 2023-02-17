import { Anchor, Button, Layout, Row } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/AppName.png";

function Header() {
  const { Header } = Layout;
  return (
    <Header>
      <Row justify="space-around" align={"middle"}>
        <span>
          <div>
            <img src={AppName} alt="logo" />
          </div>
        </span>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "home",
              href: "#part-1",
              title: "Home",
            },
            {
              key: "shop",
              href: "#part-2",
              title: "Shop",
            },
            {
              key: "aboutus",
              href: "#part-3",
              title: "About Us",
            },
            {
              key: "services",
              href: "#part-4",
              title: "Services",
            },
          ]}
        />
        <span>
          <Button
            type="primary"
            style={{ background: "#F1635F" }}
            shape="round"
          >
            Contact
          </Button>
        </span>
      </Row>
    </Header>
  );
}

export default Header;
