import React from "react";
import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleGotItButton = () => {
    const botMessage = createClientMessage("got it", {});
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    handleName();
  };
  const handleName = () => {
    const botMessage = createChatBotMessage("Enter Your Name", {
      widget: "userNameInput",
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleAge = () => {
    const botMessage = createChatBotMessage("Select Your Age", {
      widget: "userAgeSelector",
      delay: 1000,
    });
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const enrolledSuccess = () => {
    const botMessage = createChatBotMessage("Thank You");
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleGotItButton,
            handleName,
            handleAge,
            enrolledSuccess
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
