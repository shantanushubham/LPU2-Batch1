import React from "react";

const ListItem = ({ currentItem }) => {
  return (
    <div>
      <h3>{currentItem.name}</h3> <span>{currentItem.price}</span>
    </div>
  );
};

export default ListItem;
