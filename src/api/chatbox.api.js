import { CallAPI } from "../configuration/axios/BaseAxios.config";
export const chatboxApi = (input) => {
  const url = "/chatbox/chatbot";
  return CallAPI.post(url, {
    input: input,
  });
};
