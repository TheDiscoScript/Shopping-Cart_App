import React from "react";
import Item from "../Item";

const JeweleryItems = (props) => {
  return (
    <>
      {props.items
        .filter((item) => item.category === "jewelery")
        .map((filteredItem) => (
          <Item items={filteredItem} key={filteredItem.id} />
        ))}
    </>
  );
};

export default JeweleryItems;
