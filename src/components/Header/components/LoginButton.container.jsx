import { logout } from "../../../redux/auth/auth.slice";
import { LoginButtonComponent } from "./LoginButton.component";
import { useSelector, useDispatch } from "react-redux";

export const LoginButtonContainer = (props) => {
  const { user, isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { signInWithGoogle } = props;
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <LoginButtonComponent
      signInWithGoogle={signInWithGoogle}
      user={user}
      isLogin={isLogin}
      handleLogout={handleLogout}
    />
  );
};
