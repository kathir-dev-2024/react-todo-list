import React from "react";

const Lineitem = ({ item, handleclick, handledelete }) => {
  return (
    <li className="item" key={item.id}>
      <input
        type="checkbox"
        onChange={() => handleclick(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleclick(item.id)}
      >
        {item.item}
      </label>
      <button onClick={() => handledelete(item.id)}>delete</button>
    </li>
  );
};

export default Lineitem;
