import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allStudents: [],
  student: {
    name: "",
    age: "",
  },
};

export const stdentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudentName: (state, action) => {
      state.student.name = action.payload;
    },
    addStudentAge: (state, action) => {
      state.student.age = action.payload;
    },
  },
});

export const { addStudentName, addStudentAge } = stdentSlice.actions;

export default stdentSlice.reducer;
