import { Anchor, Col, Layout, Row } from "antd";
import React from "react";
import AppName from "../../img/BrandLogo/AppName.png";

const Footer = () => {
  const { Footer } = Layout;
  return (
    <div>
      <Footer>
        <Row justify="space-around" align={"top"}>
          <Col span={8}>
            <div>
              <div>
                <img src={AppName} alt="logo" />
              </div>
              <div>
                <p>
                  Theo dõi chúng tôi để cập nhật sản phẩm mới,<br />ưu đãi độc quyền và lời khuyên chuyên gia về thú cưng.
                </p>
              </div>
            </div>
          </Col>
          <Col span={4}>
            <h3>Shop</h3>
            <Anchor
              affix={false}
              items={[
                {
                  key: "dog",
                  href: "#part-1",
                  title: "Dog",
                },
                {
                  key: "cats",
                  href: "#part-2",
                  title: "Cats",
                },
                {
                  key: "human",
                  href: "#part-3",
                  title: "Human",
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <h3>About us</h3>
            <Anchor
              items={[
                {
                  key: "ourStory",
                  href: "#part-1",
                  title: "Our Story",
                },
                {
                  key: "careers",
                  href: "#part-2",
                  title: "Careers",
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <h3>Services</h3>
            <Anchor
              items={[
                {
                  key: "dog",
                  href: "#part-1",
                  title: "Dog",
                },
                {
                  key: "cats",
                  href: "#part-2",
                  title: "Cats",
                },
              ]}
            />
          </Col>
          <Col span={4}>
            <h3>Contact</h3>
            <p>+ 84 934 799 190</p>
            <p>hello@petview.com</p>
            <p>Đường D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Thành phố HCM</p>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};

export default Footer;
