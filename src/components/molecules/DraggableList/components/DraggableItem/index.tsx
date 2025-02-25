import { DraggableItemProps, TodoItem } from "../../types";
import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import SegmentedPie from "../SegmentedPie";
import { MdClose } from "react-icons/md";
import * as Styles from "./index.styled";
import TaskEditModal from "../TaskEditModal";
import TodoList from "../TodoList";

const ItemTypes = {
  LIST_ITEM: "listItem",
};

const DraggableItem: React.FC<DraggableItemProps> = ({
  id,
  text,
  listId,
  index,
  moveItem,
  progress = 0,
  onDelete,
  onEdit,
  todos = [],
  onTodoUpdate,
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.LIST_ITEM,
    item: () => ({ id, index, listId }),
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.LIST_ITEM,
    hover: (dragItem: { index: number; listId: string }, monitor) => {
      if (!monitor.isOver({ shallow: true })) return;

      if (dragItem.index === index && dragItem.listId === listId) {
        return;
      }

      moveItem(dragItem.index, index, dragItem.listId, listId);

      dragItem.index = index;
      dragItem.listId = listId;
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDoubleClick = () => {
    setIsModalOpen(true);
  };

  const handleEdit = (newText: string, newTodos: TodoItem[]) => {
    onEdit?.(id, listId, newText);
    onTodoUpdate?.(id, listId, newTodos);
  };

  return (
    <>
      <Styles.Item
        ref={(node) => drag(drop(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
        onDoubleClick={handleDoubleClick}
      >
        <Styles.Content>
          <div>
            <Styles.TaskTitle>{text}</Styles.TaskTitle>
            <TodoList
              todos={todos}
              onChange={(newTodos) => onTodoUpdate?.(id, listId, newTodos)}
              showAddInput={false}
            />
          </div>
          <Styles.ActionContainer>
            <Styles.ProgressContainer className="progress-indicator">
              <SegmentedPie percentage={progress} />
            </Styles.ProgressContainer>
            <Styles.DeleteButton
              className="delete-button"
              onClick={() => onDelete?.(id, listId)}
              title="Delete task"
            >
              <MdClose size={16} />
            </Styles.DeleteButton>
          </Styles.ActionContainer>
        </Styles.Content>
      </Styles.Item>
      <TaskEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleEdit}
        initialText={text}
        initialTodos={todos}
      />
    </>
  );
};

export default DraggableItem;
