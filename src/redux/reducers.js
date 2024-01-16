const username = (state = "", action) => {
  switch (action.type) {
    case "LOG_IN_USER":
      return action.value;

    case "LOG_OUT_USER":
      return "";

    default:
      return state;
  }
};

export default combineReducers({ username });
