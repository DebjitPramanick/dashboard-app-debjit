import { DraggableList } from "~/components/molecules";
import { LIST_TYPES } from "~/constants";

const initialLists = [
  {
    id: "list1",
    title: "To Do",
    type: LIST_TYPES.TODO,
    items: [
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
      { id: 3, text: "Task 3" },
    ],
  },
  {
    id: "list2",
    title: "In Progress",
    type: LIST_TYPES.IN_PROGRESS,
    items: [
      { id: 4, text: "Task 4" },
      { id: 5, text: "Task 5" },
    ],
  },
  {
    id: "list3",
    title: "Done",
    type: LIST_TYPES.DONE,
    items: [
      { id: 6, text: "Task 6" },
      { id: 7, text: "Task 7" },
    ],
  },
];

const DNDListPage = ({
  isDark,
  onThemeToggle,
}: {
  isDark: boolean;
  onThemeToggle: () => void;
}) => {
  return (
    <div>
      <DraggableList
        initialLists={initialLists}
        isDark={isDark}
        onThemeToggle={onThemeToggle}
      />
    </div>
  );
};

export default DNDListPage;
