import React, { useEffect, useState } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { useDispatch } from "react-redux";
import { addStudentAge } from "../features/student/studentSlice";

const AgeSelector = (props) => {
  const [age, setAge] = useState();
  const dispatch = useDispatch();
  const array = [];
  for (let i = 18; i <= 40; i++) {
    array.push(i);
  }
  useEffect(() => {
    console.log(props);
  }, []);

  const handleChange = (e) => {
    const botMessage = createClientMessage(e.target.value);
    props.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    dispatch(addStudentAge(e.target.value));
    props.actionProvider.enrolledSuccess()
  };

  return (
    <div>
      <select
        className="py-2 px-2 pr-9 block w-full border-gray-200 rounded-md
             text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900
              dark:border-gray-700 dark:text-gray-400"
        value={age}
        onChange={handleChange}
      >
        <option>Open this select menu</option>
        {array.map((num, ind) => (
          <option key={ind}>{num}</option>
        ))}
      </select>
    </div>
  );
};

export default AgeSelector;
