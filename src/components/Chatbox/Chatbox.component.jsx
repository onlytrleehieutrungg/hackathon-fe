import React, { useState } from "react";
import { List, Input, Button, Avatar, Row, Col } from "antd";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import meo from "../../img/mew.png";

function ChatboxComponent(props) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    setMessages((messages) => [...messages, { text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        right: "0",
        width: "300px",
        height: "400px",
        border: "1px solid #ccc",
        borderRadius: "10px 50px 10px 50px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "white",
        zIndex: "100",
      }}
    >
      <Row align={"middle"} gutter={[16, 16]} style={{ padding: "10px" }}>
        <Col>
          <img src={meo} alt="123" style={{ width: "50px", height: "50px" }} />
        </Col>
        <Col>
          <p style={{ fontWeight: "bold" }}> Hỗ trợ khách hàng</p>
          <p style={{ marginTop: "-15px", fontSize: "10px" }}>
            Rất vui được giúp đỡ quý khách
          </p>
        </Col>
        <CloseOutlined style={{ width: "20px", cursor: "pointer" }} />
      </Row>
      <div style={{ overflow: "auto", position: "relative" }}>
        <List
          className="message-list"
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title={null}
                description={item.text}
              />
            </List.Item>
          )}
        />
      </div>

      <div
        className="message-input"
        style={{
          padding: "5px",
          position: "absolute",
          marginLeft: "3rem",
          bottom: "0",
        }}
      >
        <Row gutter={8} align={"bottom"}>
          <Col span={16}>
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here"
            />
          </Col>
          <Col span={8}>
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ChatboxComponent;
