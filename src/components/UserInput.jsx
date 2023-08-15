import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudentName } from "../features/student/studentSlice";
import { createClientMessage } from "react-chatbot-kit";

const UserInput = (props) => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  useSelector((state) => state.student.student.name);
  dispatch(addStudentName(name));

  const handleFunction = (event) => {
    if (event.key === "Enter") {
      const botMessage = createClientMessage(name);
      props.setState((pre) => ({
        ...pre,
        messages: [...pre.messages, botMessage],
      }));
      props.actionProvider.handleAge();
    }
  };

  return (
    <div>
      UserInput
      <input
        type="text"
        placeholder="Enter Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={handleFunction}
      />
    </div>
  );
};

export default UserInput;
