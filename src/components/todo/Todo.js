import React, { useState, useEffect } from "react";


const getLocalData = () => {
  const lists = localStorage.getItem('addDataTodo');
  if(lists) {
    return JSON.parse(lists)
  }else {
    return []
  }
}

const Todo = () => {
  const [todos, setTodos] = useState("");
  const [items, setItems] = useState(getLocalData());
  const [editItem, setEditItem] = useState('');
  const [toggle, setToggle] = useState(false)

  const addItems = () => {
    if (!todos) {
      alert("Plz Enter a Todos");
    } else {


  const newItems = {
        id: new Date().getTime().toString(),
        name: todos
      }

      

      setItems([...items, newItems]);
      setTodos("");
    }
  };

  const deleteItem = (id) => {
    const deletedItem = items.filter(item => {
      return item.id !== id;
    })
    setItems(deletedItem);
    setTodos(id);
    setToggle(false)
  }

  const editItem = (id) => {
    const editItem = items.find(item => {
      return item.id === id
    })
    console.log(editItem);
  }

  useEffect(() => {
    localStorage.setItem('addDataTodo', JSON.stringify(items))

  }, [items])

  return (
    <>
      <h2>Todo App</h2>
      <div>
        <input
          type='text'
          placeholder='Enter Todo'
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button onClick={addItems}>Add</button>
      </div>
      <div>
        {items.map((item) => {
          return (
          <h3 key={item.id} >
              {item.name}
              <button onClick={() => editItem(item.id)} >Edit</button>
              <button onClick={() => deleteItem(item.id)} >Delete</button>
          </h3>
          )
        })}
      </div>
      <div>
        <button>Clear All</button>
      </div>
    </>
  );
};

export default Todo;
