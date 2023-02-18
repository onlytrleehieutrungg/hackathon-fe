import { Button, Col, Divider, Input, Row, Space } from "antd";
import React from "react";
import CustomerReviewComponent from "../../components/CustomerReview/CustomerReview.component";
import { LayoutContainer } from "../../components/Layout/Layout.component";
import brand1 from "../../img/BrandLogo/brand1.svg";
import brand2 from "../../img/BrandLogo/brand2.svg";
import brand3 from "../../img/BrandLogo/brand3.svg";
import brand4 from "../../img/BrandLogo/brand4.svg";
import brand5 from "../../img/BrandLogo/brand5.svg";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";
import DogHug from "../../img/Decord/dog_hug.svg";
import DogPaw from "../../img/Decord/dog_paws.svg";
import Facebook from "../../img/Decord/facebook.svg";
import Instagram from "../../img/Decord/instagram.svg";
import LandingPageDesign from "../../img/Decord/LandingPageDesign.svg";
import OurPets from "../../img/Decord/OurPets.svg";
import Review from "../../img/Decord/Review.svg";
import Tiktok from "../../img/Decord/tiktok.svg";
import Twitter from "../../img/Decord/twitter.svg";
import WeProvideYourPet from "../../img/Decord/WeProvideYourPet.svg";

const LandingPage = () => {
  const { Search } = Input;
  return (
    <LayoutContainer>
      <Row
        style={{
          backgroundImage:
            "linear-gradient(to top right, #FFFFFF,#FFFFFF, #FFFFFF, #F6EDFF, #69C9D0, #FFB9BD, #8E5FF1)",
        }}
      >
        <Col span={12} align="left">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              height: "100%",
              padding: "20px 150px",
            }}
          >
            <div
              style={{
                borderRadius: "25px",
                border: "1px solid #F0DEE0",
                padding: "0px 25px",
                background: "#F0DEE0",
              }}
            >
              <p style={{ color: "#F1635F", fontWeight: "bold" }}>Petview</p>
            </div>
            <img
              // style={{ width: "300px", height: "300px" }}
              src={WeProvideYourPet}
              alt="WeProvideYourPet"
            />
            <p>
              Chúng tôi tin rằng thú cưng làm phong phú thêm cuộc sống của chúng
              ta và xây dựng một xã hội phát triển, văn minh. Chúng tôi tin vào
              những gì chúng tôi đang làm dựa trên những giá trị chuẩn mực.
            </p>
            <Button
              type="primary"
              style={{ background: "#F1635F" }}
              shape="round"
            >
              Shop now
            </Button>

            {/* <Row> */}
            <Space
              direction="horizontal"
              size="large"
              style={{ display: "flex", marginTop: "10px" }}
            >
              <img src={Facebook} alt="Facebook" />
              <img src={Instagram} alt="Instagram" />
              <img
                // style={{ width: "300px", height: "300px" }}
                src={Twitter}
                alt="Twitter"
              />
              <img
                // style={{ width: "300px", height: "300px" }}
                src={Tiktok}
                alt="Tiktok"
              />
            </Space>
            {/* </Row> */}
          </div>
        </Col>

        <Col span={12}>
          <div>
            <img
              style={{
                position: "relative",
              }}
              src={DogPaw}
              alt="WeProvideYourPet"
            />
            <img
              style={{
                position: "absolute",
                right: "0",
                left: "0",
                top: "0",
                bottom: "0",
                margin: "auto",
                width: "600px",
                height: "600px",
              }}
              src={DogHug}
              alt="WeProvideYourPet"
            />
          </div>
        </Col>
      </Row>

      <Col>
        <p>POPULAR BRANDS</p>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            // style={{ width: "", height: "" }}
            src={brand1}
            alt="brand1"
          />
          <img
            // style={{ width: "", height: "" }}
            src={brand2}
            alt="brand2"
          />
          <img
            // style={{ width: "", height: "" }}
            src={brand3}
            alt="brand3"
          />
          <img
            // style={{ width: "", height: "" }}
            src={brand4}
            alt="brand4"
          />
          <img
            // style={{ width: "", height: "" }}
            src={brand5}
            alt="brand5"
          />
        </Row>
      </Col>

      <Row
        gutter={90}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#101C2D",
          padding: "40px 0px",
        }}
      >
        <Col>
          <p
            style={{
              color: "#F1635F",
              fontSize: "50px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            2k+
          </p>
          <p style={{ color: "#FFFFFF" }}>Total pets</p>
        </Col>
        <Divider
          style={{
            background: "white",
            height: 60,
          }}
          type="vertical"
        />
        <Col>
          <p
            style={{
              color: "#F1635F",
              fontSize: "50px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            32k+
          </p>
          <p style={{ color: "#FFFFFF" }}>Total Clients</p>
        </Col>
        <Divider
          style={{
            background: "white",
            height: 60,
          }}
          type="vertical"
        />
        <Col>
          <p
            style={{
              color: "#F1635F",
              fontSize: "50px",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            100k+
          </p>
          <p style={{ color: "#FFFFFF" }}>Total Brands</p>
        </Col>
      </Row>

      <Row></Row>

      <Row>
        <Col span={12}>
          <img
            // style={{ width: "", height: "" }}
            src={LandingPageDesign}
            alt="LandingPageDesign"
          />
        </Col>
        <Col
          span={12}
          style={{
            position: "relative",
          }}
        >
          <img src={OurPets} alt="OurPets" />
        </Col>
      </Row>
      <Row
        style={{
          justifyContent: "center",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <img src={Review} alt="Review"/>
        <span
          style={{
            position: "absolute",
            bottom: "0",
            width:"800px",
          }}
        >
          <CustomerReviewComponent />
        </span>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          padding: "100px",
        }}
      >
        <img src={SubscribeOurPetsArticles} alt="SubscribeOurPetsArticles" />
        <p style={{ fontSize: "20px", width: "1000px" }}>
          Chúng tôi tin rằng khả năng tư vấn, giao tiếp và cung cấp dịch vụ tốt
          nhất cho khách hàng của chúng tôi sẽ dẫn đến kết quả tài chính mạnh mẽ
          và tăng trưởng dài hạn.
        </p>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={() => {}}
        />
      </Row>
    </LayoutContainer>
  );
};

export default LandingPage;
