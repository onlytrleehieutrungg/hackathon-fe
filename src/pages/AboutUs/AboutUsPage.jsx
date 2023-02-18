import { Col, Row, Input } from "antd";
import React from "react";
import AboutUs from "../../img/Decord/AboutUs.svg";
import AboutUsBrandDecord from "../../img/Decord/AboutUsBrandDecord.svg";
import AboutUsDecord from "../../img/Decord/AboutUsDecord.svg";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";


function AboutUsPage(props) {
  const { Search } = Input;
  return (
    <Col align={"center"}>
      <img src={AboutUs} alt="AboutUs" />
      <img src={AboutUsDecord} alt="AboutUsDecord" />
      <img src={AboutUsBrandDecord} alt="AboutUsDecord" />
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
    </Col>
  );
}

export default AboutUsPage;
