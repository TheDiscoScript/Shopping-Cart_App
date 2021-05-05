import React from "react";
import Item from "../Item";

const ElectronicsItems = (props) => {
  return (
    <>
      {props.items
        .filter((item) => item.category === "electronics")
        .map((filteredItem) => (
          <Item items={filteredItem} key={filteredItem.id} />
        ))}
    </>
  );
};

export default ElectronicsItems;
