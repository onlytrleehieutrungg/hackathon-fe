import { Button, Col, Row, Input } from "antd";
import CardComponent from "../../components/CardComponent/CardComponent";
import { FilterShoppingContainer } from "../../components/FilterShopping/FilterShopping.container";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";
import ShopPage from "../../img/Decord/ShopPage.svg";

export const ShoppingPage = () => {
  const { Search } = Input;
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to top right, #FFFFFF,#FFFFFF, #FFFFFF, #F6EDFF, #69C9D0, #FFB9BD, #8E5FF1)",
      }}
    >
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <FilterShoppingContainer />
        <Row style={{ padding: "0px 200px" }}>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
          <Col align={"center"} span={8}>
            <CardComponent />
          </Col>
        </Row>
      </Row>

      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            background: "white",
            color: "black",
            width: "200px",
            margin: "20px 0px",
          }}
          shape="round"
        >
          Load more
        </Button>
      </Row>

      <Row
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={ShopPage} alt="shoppagedecord" />
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
    </div>
  );
};
