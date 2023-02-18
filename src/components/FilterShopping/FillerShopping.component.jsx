import { Segmented, Input, Col, Row, Button, Dropdown, Space } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
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
    <>
      <Row justify="center" align="middle">
        <Col span={8}>
          <Segmented options={options} style={{}} />
        </Col>
      </Row>
      <Row justify="center" align="middle">
        <Col span={8}>
          <img alt="" src={catText} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Input placeholder="Basic usage" />;
        </Col>
      </Row>
      <Row>
        <Col>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Age Pet
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Brand
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Price
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};
