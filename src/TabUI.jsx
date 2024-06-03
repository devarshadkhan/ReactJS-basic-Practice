import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabSecton } from "./store/slices/TabSlice";
import { TabPanel } from "./utils/MockData";

const TabUI = () => {
  const dispatch = useDispatch();
  const store = useSelector((e) => e.TabSlice.tabSec);
  const handleClick = (params) => {
    dispatch(TabSecton(params));
  };
  return (
    <>
      {TabPanel.map((item) => {
        return (
          <>
            <button onClick={() => handleClick(item.id)}>{item.label}</button>
            <p>{store === item.id && item.content}</p>
          </>
        );
      })}
    </>
  );
};

export default TabUI;
