import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../configuration/firebase/firebase.config";
import {
  LINK_ABOUT_US,
  LINK_HOME,
  LINK_SERVICE,
  LINK_SHOP,
} from "../../constants/app.constants";
import { NAVIGATE } from "../../constants/link";
import { login } from "../../redux/auth/auth.slice";
import HeaderComponent from "./Header.component";
export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        dispatch(login(res));
      })
      .catch();
  };
  const handleClickMenu = ({ item, key }) => {
    switch (key) {
      case LINK_HOME:
        navigate(NAVIGATE.HOME);
        break;
      case LINK_SHOP:
        navigate(NAVIGATE.SHOP);
        break;
      case LINK_SERVICE:
        navigate(NAVIGATE.SERVICES);
        break;
      case LINK_ABOUT_US:
        navigate(NAVIGATE.ABOUT_US);
        break;
      default:
        navigate("/");
    }
  };
  return (
    <HeaderComponent
      signInWithGoogle={signInWithGoogle}
      handleClickMenu={handleClickMenu}
    />
  );
};
