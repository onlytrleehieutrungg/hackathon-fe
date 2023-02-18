import { Col, Input, Row, Segmented } from "antd";
import { useState } from "react";
import catText from "../../img/Cat Supplements.svg";
export const FilterShoppingComponent = (props) => {
  const { listAgePet } = props;
  const [options, setOptions] = useState(["Cat", "Dog"]);
  const items = [
    {
      label: "1st menu item",
      key: "1",
    },
    {
      label: "2nd menu item",
      key: "2",
    },
    {
      label: "3rd menu item",
      key: "3",
      danger: true,
    },
    {
      label: "4rd menu item",
      key: "4",
      danger: true,
      disabled: true,
    },
  ];
  const handleMenuClick = (e) => {
    console.log("click", e);
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <div>
      <Col align={"center"}>
        <Row justify="center" align="middle">
          <Col span={8}>
            <Segmented block options={options} style={{ width: "400px" }} />
          </Col>
        </Row>
        <Row align="center" span={8} style={{ marginTop: "20px" }}>
          <img alt="" src={catText} />
        </Row>
        <Row style={{ margin: "20px 40px", padding: "0px 170px" }}>
          <Col>
            <Input
              style={{ borderRadius: "25px", width: "300px" }}
              placeholder="Find something you want!"
            />
          </Col>
        </Row>
      </Col>
    </div>
  );
};
