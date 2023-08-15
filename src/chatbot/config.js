import { createChatBotMessage } from "react-chatbot-kit";
import GotitButton from "../components/GotitButton";
import UserInput from "../components/UserInput";
import AgeSelector from "../components/AgeSelector";
const botMessage = "Student Info System";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to ${botMessage}`, {
      widget: "gotItButton",
    }),
  ],
  widgets: [
    {
      widgetName: "gotItButton",
      widgetFunc: (props) => <GotitButton {...props} />,
    },
    {
      widgetName: "userNameInput",
      widgetFunc: (props) => <UserInput {...props} />,
    },
    {
      widgetName: "userAgeSelector",
      widgetFunc: (props) => <AgeSelector {...props} />,
    },
  ],
};

export default config;
