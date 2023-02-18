import { Button, Col, Row } from "antd";
export const LoginButtonComponent = (props) => {
  const { isLogin, user, signInWithGoogle, handleLogout } = props;
  return (
    <>
      {!isLogin ? (
        <Button
          type="primary"
          style={{ background: "#F1635F" }}
          shape="round"
          onClick={signInWithGoogle}
        >
          Login
        </Button>
      ) : (
        <Row align={"middle"} gutter={4}>
          <Col>
            <p>
              Xin chào. <a>{user.displayName}</a>
            </p>
          </Col>
          <Col>
            <Button
              type="primary"
              size="small"
              style={{ background: "#F1635F" }}
              shape="round"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Col>
        </Row>
      )}
    </>
  );
};
