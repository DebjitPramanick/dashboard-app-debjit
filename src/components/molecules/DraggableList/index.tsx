import React, { useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  DraggableItemProps,
  DraggableListsProps,
  List,
  TodoItem,
  ListItem,
} from "./types";
import { useDrop } from "react-dnd";
import { MdAdd, MdClose } from "react-icons/md";
import { LIST_TYPES } from "~/constants";
import { useTheme } from "styled-components";
import * as Styles from "./index.styled";
import DraggableItem from "./components/DraggableItem";
import ListEditModal from "./components/ListEditModal";
import AddTaskModal from "./components/AddTaskModal";
import ThemeToggle from "~/components/atoms/ThemeToggle";
import SegmentedPie from "./components/SegmentedPie";

const DraggableLists: React.FC<DraggableListsProps> = ({
  initialLists,
  isDark,
  onThemeToggle,
}) => {
  const theme = useTheme();

  const [lists, setLists] = useState(initialLists);
  const [editingListId, setEditingListId] = useState<string | null>(null);
  const [addingTaskToListId, setAddingTaskToListId] = useState<string | null>(
    null
  );

  const moveItem = useCallback(
    (
      dragIndex: number,
      hoverIndex: number,
      sourceListId: string,
      targetListId: string
    ) => {
      setLists((prevLists) => {
        const newLists = JSON.parse(JSON.stringify(prevLists));
        const sourceList = newLists.find(
          (list: List) => list.id === sourceListId
        );
        const targetList = newLists.find(
          (list: List) => list.id === targetListId
        );

        if (!sourceList || !targetList) return prevLists;

        const [draggedItem] = sourceList.items.splice(dragIndex, 1);
        targetList.items.splice(hoverIndex, 0, draggedItem);

        return newLists;
      });
    },
    []
  );

  const EmptyListDropTarget = ({ listId }: { listId: string }) => {
    const [, drop] = useDrop({
      accept: "listItem",
      hover: (dragItem: { index: number; listId: string }) => {
        const items =
          lists.find((list: List) => list.id === listId)?.items || [];
        if (items.length === 0) {
          moveItem(dragItem.index, 0, dragItem.listId, listId);
          dragItem.index = 0;
          dragItem.listId = listId;
        }
      },
    });

    return <div ref={drop} style={{ minHeight: "100%" }} />;
  };

  const handleAddItem = (listId: string, text: string) => {
    if (!text.trim()) return;

    setLists((prevLists) => {
      const newLists = JSON.parse(JSON.stringify(prevLists));
      const targetList = newLists.find((list: List) => list.id === listId);

      if (!targetList) return prevLists;

      targetList.items.push({
        id: Date.now(), // Simple way to generate unique IDs
        text: text.trim(),
      });

      return newLists;
    });
  };

  const handleDeleteItem = (itemId: string, listId: string) => {
    setLists((prevLists) => {
      const newLists = JSON.parse(JSON.stringify(prevLists));
      const targetList = newLists.find((list: List) => list.id === listId);

      if (!targetList) return prevLists;

      targetList.items = targetList.items.filter(
        (item: DraggableItemProps) => item.id.toString() !== itemId
      );

      return newLists;
    });
  };

  const handleAddList = () => {
    const newListId = `list-${Date.now()}`;
    setLists((prevLists) => [
      ...prevLists,
      {
        id: newListId,
        title: "New List",
        type: LIST_TYPES.TODO,
        items: [],
      },
    ]);
  };

  const handleEditItem = (itemId: string, listId: string, newText: string) => {
    setLists((prevLists) => {
      const newLists = JSON.parse(JSON.stringify(prevLists));
      const targetList = newLists.find((list: List) => list.id === listId);

      if (!targetList) return prevLists;

      const targetItem = targetList.items.find(
        (item: DraggableItemProps) => item.id.toString() === itemId
      );

      if (targetItem) {
        targetItem.text = newText;
      }

      return newLists;
    });
  };

  const handleEditListTitle = (listId: string, newTitle: string) => {
    setLists((prevLists) => {
      const newLists = JSON.parse(JSON.stringify(prevLists));
      const targetList = newLists.find((list: List) => list.id === listId);

      if (targetList) {
        targetList.title = newTitle;
      }

      return newLists;
    });
  };

  const handleDeleteList = (listId: string) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  const calculateProgress = (listIndex: number, totalLists: number): number => {
    // For example, if we have 3 lists:
    // First list (index 0) = 0%
    // Middle list (index 1) = 50%
    // Last list (index 2) = 100%
    return (listIndex / (totalLists - 1)) * 100;
  };

  const handleTodoUpdate = (
    itemId: string,
    listId: string,
    todos: TodoItem[]
  ) => {
    setLists((prevLists) => {
      const newLists = JSON.parse(JSON.stringify(prevLists));
      const targetList = newLists.find((list: List) => list.id === listId);

      if (!targetList) return prevLists;

      const targetItem = targetList.items.find(
        (item: ListItem) => item.id.toString() === itemId
      );

      if (targetItem) {
        targetItem.todos = todos;
      }

      return newLists;
    });
  };

  const renderList = (list: List, index: number) => {
    const progress = calculateProgress(index, lists.length);

    return (
      <Styles.ListContainer key={list.id}>
        <Styles.ListTitleContainer>
          <Styles.ListTitleContent
            onDoubleClick={() => setEditingListId(list.id)}
          >
            <Styles.ListTitleProgress>
              <SegmentedPie percentage={progress} />
            </Styles.ListTitleProgress>
            <Styles.ListTitle>
              {list.title}
              <span
                style={{
                  color: theme.colors.textMuted,
                  marginLeft: theme.spacing.sm,
                }}
              >
                ({list.items.length})
              </span>
            </Styles.ListTitle>
          </Styles.ListTitleContent>
          <Styles.ListTitleActions>
            <Styles.AddTaskButton
              onClick={() => setAddingTaskToListId(list.id)}
              title="Add new task"
            >
              <MdAdd size={20} />
            </Styles.AddTaskButton>
            <Styles.DeleteListButton
              onClick={() => handleDeleteList(list.id)}
              title="Delete list"
            >
              <MdClose size={20} />
            </Styles.DeleteListButton>
          </Styles.ListTitleActions>
        </Styles.ListTitleContainer>
        <Styles.ItemsContainer>
          {list.items.length > 0 ? (
            list.items.map((item, itemIndex) => {
              return (
                <DraggableItem
                  key={item.id}
                  id={item.id.toString()}
                  text={item.text}
                  index={itemIndex}
                  listId={list.id}
                  moveItem={moveItem}
                  progress={progress}
                  onDelete={handleDeleteItem}
                  onEdit={handleEditItem}
                  todos={item.todos || []}
                  onTodoUpdate={handleTodoUpdate}
                />
              );
            })
          ) : (
            <EmptyListDropTarget listId={list.id} />
          )}
        </Styles.ItemsContainer>
        <ListEditModal
          isOpen={editingListId === list.id}
          onClose={() => setEditingListId(null)}
          onSave={(newTitle) => {
            handleEditListTitle(list.id, newTitle);
            setEditingListId(null);
          }}
          initialTitle={list.title}
        />
        <AddTaskModal
          isOpen={addingTaskToListId === list.id}
          onClose={() => setAddingTaskToListId(null)}
          onAdd={(text) => handleAddItem(list.id, text)}
          listTitle={list.title}
        />
      </Styles.ListContainer>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Styles.Container>
        <Styles.Header>
          <Styles.TitleContainer>
            <Styles.Title>Task Board</Styles.Title>
            <Styles.CreatedBy>Created by Debjit Pramanick</Styles.CreatedBy>
          </Styles.TitleContainer>
          <Styles.HeaderActions>
            <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
            <Styles.AddListButton onClick={handleAddList}>
              <MdAdd size={20} />
              Add new list
            </Styles.AddListButton>
          </Styles.HeaderActions>
        </Styles.Header>
        <Styles.ListsContainer>
          {lists.map((list, index) => renderList(list, index))}
        </Styles.ListsContainer>
      </Styles.Container>
    </DndProvider>
  );
};

export default DraggableLists;
