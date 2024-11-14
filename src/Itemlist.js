import React from "react";
import Lineitem from "./Lineitem";

const Itemlist = ({ items, handleclick, handledelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <Lineitem
          item={item}
          handleclick={handleclick}
          handledelete={handledelete}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default Itemlist;
