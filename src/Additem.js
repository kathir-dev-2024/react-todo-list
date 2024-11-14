import React from 'react'
import { useRef } from 'react';

const Additem = ({newitem,setnewitem,handlesubmit}) => {
  const inputRef=useRef()
  return (
    <form action="" className="searchForm" onSubmit={handlesubmit}>
      <label htmlFor="">Enter the item to add</label>
      <input
        type="text"
        required
        ref={inputRef}
        autoFocus
        placeholder='enter the item to add'
        value={newitem}
        onChange={(e) => setnewitem(e.target.value)}
    
      />
      <button onClick={()=>inputRef.current.focus()}>+</button>
    </form>
  );
}

export default Additem