import "./App.css";
import "./Content.js";
import { useState, useEffect } from "react";
import Content from "./Content.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Additem from "./Additem.js";
import Search from "./Search.js";

function App() {
  const [items, setitems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );

  const [newitem, setnewitem] = useState("");
  const [search, setsearch] = useState("");

  const handleclick = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setitems(listitems);
    localStorage.setItem("todo-list", JSON.stringify(listitems));
  };

  const handledelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setitems(listitems);
    localStorage.setItem("todo-list", JSON.stringify(listitems));
  };

  const additem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const additem = { id, checked: false, item };
    const listitems = [...items, additem];
    setitems(listitems);
    localStorage.setItem("todo-list", JSON.stringify(listitems));
  };

  const handlesubmit = (e) => {
    if (!newitem) return;
    e.preventDefault();
    additem(newitem);
    setnewitem("");
  };

  useEffect(() => {
    localStorage.setItem("shoppinglist", JSON.stringify(items));
  }, [items]);

  return (
    <div className="App">
      <Header />
      <Additem
        newitem={newitem}
        setnewitem={setnewitem}
        handlesubmit={handlesubmit}
      />
      <Search search={search} setsearch={setsearch} />

      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
        handleclick={handleclick}
        handledelete={handledelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
