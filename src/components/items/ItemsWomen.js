import React from "react";
import Item from "../Item";

const WomenItems = (props) => {
  return (
    <>
      {props.items
        .filter((item) => item.category === "women's clothing")
        .map((filteredItem) => (
          <Item items={filteredItem} key={filteredItem.id} />
        ))}
    </>
  );
};

export default WomenItems;
