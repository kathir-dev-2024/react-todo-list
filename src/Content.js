import React from "react";
import Itemlist from "./Itemlist";
const Content = ({ items, handleclick, handledelete }) => {
  return (
    <main>
      {items.length ? (
        <Itemlist
          items={items}
          handleclick={handleclick}
          handledelete={handledelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>your list empty</p>
      )}
    </main>
  );
};

export default Content;
