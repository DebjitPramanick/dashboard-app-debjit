import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";
import { TodoItem } from "../../types";
import * as Styles from "./index.styled";

interface TodoListProps {
  todos: TodoItem[];
  onChange: (todos: TodoItem[]) => void;
  showAddInput?: boolean;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onChange,
  showAddInput = false,
}) => {
  const [newTodoText, setNewTodoText] = useState("");

  const handleAddTodo = () => {
    if (!newTodoText.trim()) return;

    const newTodo: TodoItem = {
      id: Date.now().toString(),
      text: newTodoText.trim(),
      completed: false,
    };

    onChange([...todos, newTodo]);
    setNewTodoText("");
  };

  const handleToggleTodo = (todoId: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    onChange(updatedTodos);
  };

  const handleDeleteTodo = (todoId: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    onChange(updatedTodos);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Styles.Container>
      {showAddInput && (
        <Styles.AddTodoContainer>
          <Styles.Input
            value={newTodoText}
            onChange={(e) => setNewTodoText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Add a todo"
          />
          <Styles.AddButton onClick={handleAddTodo}>
            <MdAdd size={16} />
          </Styles.AddButton>
        </Styles.AddTodoContainer>
      )}
      <Styles.TodoList>
        {todos.map((todo) => (
          <Styles.TodoItem key={todo.id}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <Styles.HiddenCheckbox
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              <Styles.Checkbox checked={todo.completed} />
            </label>
            <Styles.TodoText completed={todo.completed}>
              {todo.text}
            </Styles.TodoText>
            {showAddInput && (
              <Styles.DeleteButton
                onClick={() => handleDeleteTodo(todo.id)}
                title="Delete todo"
              >
                <MdClose size={14} />
              </Styles.DeleteButton>
            )}
          </Styles.TodoItem>
        ))}
      </Styles.TodoList>
    </Styles.Container>
  );
};

export default TodoList;
