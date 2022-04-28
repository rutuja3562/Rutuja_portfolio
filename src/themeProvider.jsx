import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const initialState = { darkMode: true };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHTMODE":
      return { darkMode: true };
        //  return { darkMode: false };
    case "DARKMODE":
      return { darkMode: false };
      //  return { darkMode: true };
    default:
      return state;
  }
};

export function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider
      value={{ state: true || state, dispatch: dispatch }}
      // value={{ state: false || state, dispatch: dispatch }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
