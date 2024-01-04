import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
    {
      name: "Go To College",
      dueDate: "4/10/2023",
    },
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handelNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added"${itemName} : ${itemDueDate}`);
    setTodoItems([
      ...initialTodoItems,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log("Item Deleted");
    const newTodoItems = todoItems.filter((item) => item.name != todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handelNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems onDeleteClick={handleDeleteItem} todoItems={todoItems} />
    </center>
  );
}

export default App;
