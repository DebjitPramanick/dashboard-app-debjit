import React, { useEffect, useRef, useState } from "react";
import { TodoItem } from "../../types";
import TodoList from "../TodoList";
import * as Styles from "./index.styled";

interface TaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newText: string, todos: TodoItem[]) => void;
  initialText: string;
  initialTodos: TodoItem[];
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialText,
  initialTodos,
}) => {
  const [text, setText] = useState(initialText);
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isOpen]);

  useEffect(() => {
    setText(initialText);
    setTodos(initialTodos);
  }, [initialText, initialTodos]);

  const handleSave = () => {
    if (text.trim()) {
      onSave(text.trim(), todos);
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      handleSave();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Styles.Overlay isOpen={isOpen} onClick={onClose}>
      <Styles.ModalContent onClick={(e) => e.stopPropagation()}>
        <Styles.Title>Edit Task</Styles.Title>
        <Styles.Input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter task title"
        />
        <Styles.TodoSection>
          <Styles.SubTitle>Todos</Styles.SubTitle>
          <TodoList todos={todos} onChange={setTodos} showAddInput={true} />
        </Styles.TodoSection>
        <Styles.ButtonGroup>
          <Styles.Button onClick={onClose}>Cancel</Styles.Button>
          <Styles.Button variant="primary" onClick={handleSave}>
            Save
          </Styles.Button>
        </Styles.ButtonGroup>
      </Styles.ModalContent>
    </Styles.Overlay>
  );
};

export default TaskEditModal;
