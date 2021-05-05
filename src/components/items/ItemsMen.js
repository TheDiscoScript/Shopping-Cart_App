import React from "react";
import Item from "../Item";

const MenItems = (props) => {
  return (
    <>
      {props.items
        .filter((item) => item.category === "men's clothing")
        .map((filteredItem) => (
          <Item items={filteredItem} key={filteredItem.id} />
        ))}
    </>
  );
};

export default MenItems;
