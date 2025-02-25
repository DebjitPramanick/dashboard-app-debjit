import React, { useEffect, useRef, useState } from "react";
import * as Styles from "../TaskEditModal/index.styled"; // Reuse the same styles

interface ListEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newTitle: string) => void;
  initialTitle: string;
}

const ListEditModal: React.FC<ListEditModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialTitle,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isOpen]);

  useEffect(() => {
    setTitle(initialTitle);
  }, [initialTitle]);

  const handleSave = () => {
    if (title.trim() !== initialTitle) {
      onSave(title.trim());
    }
    onClose();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    }
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Styles.Overlay isOpen={isOpen} onClick={onClose}>
      <Styles.ModalContent onClick={(e) => e.stopPropagation()}>
        <Styles.Title>Edit List Title</Styles.Title>
        <Styles.Input
          ref={inputRef}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter list title"
        />
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

export default ListEditModal;
