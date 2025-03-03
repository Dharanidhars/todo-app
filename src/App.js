import { useState } from 'react';
import './App.css';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AddItem from './components/AddItem/AddItem';
import SearchItem from './components/SearchItem/SearchItem';

function App() {
                                                    //for content
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || [] );     
  // const [items, setItems] = useState([]);     
  

  const [newItem,setNewItem] = useState('')                                         //for addForm


  // useEffect( ( )=> {
  //   JSON.parse(localStorage.getItem("todo_list"))
  // },[] )

  const addItem = (item) =>{
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewItem = {id,checked:false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("todo_list", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    // const deleteItems = items.filter( (item)=> item.id ===id ? null : item  )
    const deleteItems = items.filter((item) => item.id !== id);
    setItems(deleteItems);
    localStorage.setItem("todo_list", JSON.stringify(deleteItems));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!newItem) return
    console.log(newItem);
    // add
    addItem(newItem)
    setNewItem('')
  }

  const [search,setSearch] = useState('')
  

  return (
    <div className="App">
      <Header />
      <AddItem newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search}
        setSearch={setSearch}
      />
      <Content items={items.filter( item => ((item.item).toLowerCase()).includes(search.toLowerCase()) )}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
       />
      <Footer length={items.length} />
      
    </div>
  );
}

export default App;
