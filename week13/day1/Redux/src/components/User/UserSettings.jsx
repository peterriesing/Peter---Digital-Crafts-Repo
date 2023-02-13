import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  incrementByAmount,
  decrementByAmount,
  reset,
} from "../../reducers/counterSlice";
import { changeUserName, changeUserSettings } from "../../reducers/userSlice";

const UserSettings = () => {
  const counter = useSelector((state) => state.counter.value);
  const userLoggedIn = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>User Settings</h1>
      <h3>the counter is at: {counter}</h3>
      <button onClick={() => dispatch(incrementCounter())}>+</button>
      <button onClick={() => dispatch(decrementCounter())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>Subtract 5</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <h3>Current User: {userLoggedIn.name}</h3>
      <button onClick={() => dispatch(changeUserName())}>
        Change user to Blob
      </button>
    </div>
  );
};

export default UserSettings;
