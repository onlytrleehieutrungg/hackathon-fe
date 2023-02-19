import { useDispatch } from "react-redux";
import { chatboxApi } from "../../api/chatbox.api";
import { notification } from "antd";
import { isFetched, logMessage } from "../../redux/chat/chatbox.slice";
import { ChatboxComponent } from "./Chatbox.component";

export const ChatboxContainer = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const key = "updatable";
  const handleCallChatBox = (input) => {
    chatboxApi(input)
      .then((res) => {
        api.open({
          key,
          message: "AI trả lời ",
          description: res.data,
        });

        setTimeout(() => {
          api.open({
            key,
            message: "AI trả lời ",
            description: res.data,
          });
        }, 1000);
        dispatch(isFetched());
        console.log(res.data);
        dispatch(logMessage(res.data));
      })
      .catch((err) => {
        notification.open({
          message: "Chatbox fail",
          description: err,
        });
      });
  };
  return (
    <>
      {contextHolder}
      <ChatboxComponent handleCallChatBox={handleCallChatBox} />
    </>
  );
};
