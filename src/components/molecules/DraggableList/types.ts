// Interfaces
export interface DraggableItemProps {
  id: string;
  text: string;
  todos: TodoItem[];
  listId: string;
  index: number;
  moveItem: (
    dragIndex: number,
    hoverIndex: number,
    sourceListId: string,
    targetListId: string
  ) => void;
  progress?: number;
  onDelete?: (itemId: string, listId: string) => void;
  onEdit?: (itemId: string, listId: string, newText: string) => void;
  onTodoUpdate?: (itemId: string, listId: string, todos: TodoItem[]) => void;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface ListItem {
  id: number;
  text: string;
  todos: TodoItem[];
}

export interface List {
  id: string;
  title: string;
  type: string;
  items: ListItem[];
}

export interface DraggableListsProps {
  initialLists: List[];
  isDark: boolean;
  onThemeToggle: () => void;
}
