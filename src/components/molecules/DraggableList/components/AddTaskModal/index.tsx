import React, { useEffect, useRef, useState } from "react";
import * as Styles from "../TaskEditModal/index.styled";

interface AddTaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (text: string) => void;
  listTitle: string;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  listTitle,
}) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setText("");
    }
  }, [isOpen]);

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText("");
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Styles.Overlay isOpen={isOpen} onClick={onClose}>
      <Styles.ModalContent onClick={(e) => e.stopPropagation()}>
        <Styles.Title>Add Task to {listTitle}</Styles.Title>
        <Styles.Input
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter task title"
        />
        <Styles.ButtonGroup>
          <Styles.Button onClick={onClose}>Cancel</Styles.Button>
          <Styles.Button variant="primary" onClick={handleAdd}>
            Add
          </Styles.Button>
        </Styles.ButtonGroup>
      </Styles.ModalContent>
    </Styles.Overlay>
  );
};

export default AddTaskModal;
