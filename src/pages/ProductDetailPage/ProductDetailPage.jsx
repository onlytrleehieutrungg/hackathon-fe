import { Button, Col, Input, Row } from "antd";
import React from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";
import car from "../../img/Decord/car.svg";
import Star from "../../img/Decord/Star.svg";
import mew from "../../img/mew.png";

function ProductDetailPage() {
  const { Search } = Input;

  return (
    <Row>
      <Col span={12}>
        <div
          style={{
            border: "1px solid #808080",
            borderRadius: "10px",
            width: "400px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img style={{ width: "300px" }} src={mew} alt="example" />
        </div>
      </Col>
      <Col span={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <b style={{ fontSize: "40px" }}>Hạt nutrience cho mèo</b>
          <img
            style={{
              width: "200px",
            }}
            src={Star}
            alt="evaluate"
          />
        </div>

        <p style={{ fontSize: "18px" }}>
          Với thành phần gồm nhiều chất dinh dưỡng tốt cho sức khỏe của mèo như
          Omega 3 và 6, xuất phát từ các nguyên liệu tự nhiên như trái cây và
          rau củ quả, gạo lứt, yến mạch, dầu cá hồi và các loại Vitamin khác.
        </p>

        <ul>
          <li>Giúp cơ bắp săn chắc, cơ thể khỏe mạnh, cân nặng ổn định</li>
          <li>
            Omega 3 và 6 giúp duy trì làn da khỏe mạnh và ngăn ngừa tình trạng
            rụng lông
          </li>
          <li>Hỗ trợ xương khớp phát triển, tăng cường hệ miễn dịch</li>
        </ul>

        <p>
          Price:{" "}
          <b
            style={{
              fontSize: "40px",
            }}
          >
            300.000đ
          </b>
        </p>

        <Row>
          <img src={car} alt="delivery" />
          <p style={{ fontSize: "16px" }}>
            Giao hàng miễn phí - giao hàng ước tính từ 3-5 ngày
          </p>
        </Row>

        <Col>
          <Button
            type="primary"
            style={{ background: "#F1635F" }}
            shape="round"
            onClick={() => {}}
          >
            Add to card
          </Button>
        </Col>
      </Col>

      <Row
        style={{
          backgroundColor: "#101C2D",
          padding: "40px 60px",
          width: "100%",
        }}
      >
        <div style={{ color: "white" }}>
          <b style={{ fontSize: "30px" }}>Hoạt chất</b>
          <br />
          <b>Nguyên liệu chính của hạt Nutrience cho mèo bao gồm: </b>
          <p>
            Bột thịt gà Canada, gạo lứt, bột yến mạch, đậu hà lan, mỡ gà, bột củ
            cải khô, hương vị gà tự nhiên, sản phẩm trứng, hạt lanh, Canxi
            cacbonat, men bia, dầu cá hồi (nguồn DHA), việt quất…
          </p>

          <b>
            Sử dụng hạt Nutrience, mèo nhà bạn nhận được hàm lượng dinh dưỡng
            như sau:{" "}
          </b>
          <p>
            Protein (tối thiểu): 42%
            <br />
            Chất béo (tối thiểu): 20%
            <br />
            Chất xơ (tối đa): 3.5%
            <br />
            Độ ẩm (tối đa): 10%
            <br />
            Tro (tối đa): 7.5%
            <br />
            Canxi (tối thiểu): 1.1%
            <br />
            Phốt pho (tối thiểu): 0.9%
          </p>
        </div>
      </Row>

      <div
        style={{
          marginTop:"20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <b style={{fontSize:"30px"}}>You may also like</b>
        <Row gutter={30}>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
          <Col>
            <CardComponent />
          </Col>
        </Row>
      </div>

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
    </Row>
  );
}

export default ProductDetailPage;
