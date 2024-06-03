import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabSecton } from "./store/slices/TabSlice";

const TabUI = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.TabSlice.tabSec);
  const handleClick = (params) => {
    dispatch(TabSecton(params));
  };
  return (
    <>
      <button onClick={() => handleClick(0)}>Tab 1</button>
      <button onClick={() => handleClick(1)}>Tab 2</button>

      {store === 0 && <p>Tab 1</p>}
      {store === 1 && <p>Tab 2</p>}
    </>
  );
};

export default TabUI;
