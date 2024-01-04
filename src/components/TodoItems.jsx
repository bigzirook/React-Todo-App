import React from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, key) => (
        <TodoItem
          onDeleteClick={onDeleteClick}
          key={key}
          todoName={item.name}
          todoDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default TodoItems;
