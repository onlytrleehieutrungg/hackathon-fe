import { Col, Row, Table, Input } from "antd";
import React, { useState } from "react";
import CardComponent from "../../components/CardComponent/CardComponent";
import BillForm from "../../components/OrderInformation/OrderInformationForm";
import food1 from "../../img/Product-svg/food1.svg";
import food2 from "../../img/Product-svg/food2.svg";
import food3 from "../../img/Product-svg/food3.svg";
import food4 from "../../img/Product-svg/food4.svg";
import MostPopular from "../../img/ComplexText/MostPopular.svg";
import SubscribeOurPetsArticles from "../../img/ComplexText/SubscribeOurPetsArticles.svg";

const columns = [
  {
    title: "Product",
    dataIndex: "product",
    render: (img) => <img style={{ width: "100px" }} src={img} alt="product" />,
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
  },
  {
    title: "Provisional",
    dataIndex: "provisional",
  },
];
const data = [
  {
    key: "1",
    price: "$19.99",
    product: food1,
    quantity: 1,
    provisional: "$19.99",
  },
  {
    key: "2",
    price: "$20.00",
    product: food2,
    quantity: 2,
    provisional: "$40.00",
  },
  {
    key: "3",
    price: "$19.99",
    product: food3,
    quantity: 1,
    provisional: "$19.99",
  },
  {
    key: "4",
    price: "$19.99",
    product: food4,
    quantity: 1,
    provisional: "$19.99",
  },
];

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

function ViewCartPage() {
  const [selectionType, setSelectionType] = useState("checkbox");
  const { Search } = Input;

  return (
    <div>
      <Row align={"center"}>
        <Table
          style={{ width: "1000px" }}
          size="small"
          rowSelection={{
            type: selectionType,
          }}
          columns={columns}
          dataSource={data}
        />
      </Row>
      <Row
        gutter={90}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#101C2D",
          padding: "40px 0px",
          color: "white",
        }}
      >
        Plus Cart{" "}
        <p
          style={{
            color: "#F1635F",
            fontWeight: "bold",
            margin: 0,
            wordSpacing: "10px",
          }}
        >
          $59.88
        </p>
      </Row>

      <Col
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "40px 0px",
          color: "white",
        }}
      >
        <BillForm />
      </Col>

      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={MostPopular} alt="mostpopular" />
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
    </div>
  );
}

export default ViewCartPage;
