import React, {Fragment, useState, useEffect} from "react";
import {Drawer, Button, Row, Col, Icon, Badge} from "antd";
import {ShoppingCartOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
export default function Drawers(props) {
  const productList = useSelector(state => state.productList);
  useEffect(() => {
    console.log(productList);
  }, [productList]);


  return (
    <div>
      <Button>
        <Badge
          // count={addedList.shoppingCartList.length}
          style={{
            backgroundColor: "#fff",
            color: "#999",
            boxShadow: "0 0 0 1px red inset",
          }}
        >
          <ShoppingCartOutlined />
        </Badge>
      </Button>
    </div>
  );
}
