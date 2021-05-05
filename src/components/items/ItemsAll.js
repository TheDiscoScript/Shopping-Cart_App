import React from "react";
import Item from "../Item";

const AllItems = (props) => {
  return (
    <>
      {props.items.map((item) => (
        <Item items={item} key={item.id} />
      ))}
    </>
  );
};

export default AllItems;
