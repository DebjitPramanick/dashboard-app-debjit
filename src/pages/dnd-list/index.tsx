import { DraggableList } from "~/components/molecules";
import { LIST_TYPES } from "~/constants";

const initialLists = [
  {
    id: "list1",
    title: "To Do",
    type: LIST_TYPES.TODO,
    items: [
      {
        id: 1,
        text: "Implement user authentication system with OAuth 2.0 integration, including Google and GitHub login options, and add JWT token management for secure API requests",
        todos: [
          {
            id: "t1",
            text: "Set up OAuth 2.0 configuration for Google login",
            completed: false,
          },
          {
            id: "t2",
            text: "Implement GitHub OAuth integration and callback handling",
            completed: false,
          },
          {
            id: "t3",
            text: "Add JWT token generation and refresh token logic",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        text: "Design and develop responsive dashboard interface with real-time data visualization, including customizable widgets, interactive charts, and cross-browser compatibility",
        todos: [
          {
            id: "t4",
            text: "Create wireframes for dashboard layout and widget components",
            completed: false,
          },
          {
            id: "t5",
            text: "Implement D3.js charts for data visualization",
            completed: false,
          },
          {
            id: "t6",
            text: "Add drag-and-drop functionality for widget customization",
            completed: false,
          },
        ],
      },
      {
        id: 3,
        text: "Optimize application performance by implementing lazy loading, code splitting, and caching strategies, targeting a 90+ score on Google PageSpeed Insights",
        todos: [],
      },
      {
        id: 4,
        text: "Implement end-to-end testing suite using Cypress, including critical user flows, API mocking, and automated regression tests for the entire application workflow",
        todos: [
          {
            id: "t10",
            text: "Set up Cypress configuration and custom commands",
            completed: false,
          },
          {
            id: "t11",
            text: "Write tests for authentication and user management flows",
            completed: false,
          },
          {
            id: "t12",
            text: "Create fixtures and API mocks for test data",
            completed: false,
          },
          {
            id: "t13",
            text: "Set up CI/CD pipeline integration for automated testing",
            completed: false,
          },
        ],
      },
      {
        id: 5,
        text: "Develop real-time collaboration features using WebSocket, including shared document editing, presence indicators, and conflict resolution for concurrent user actions",
        todos: [],
      },
    ],
  },
  {
    id: "list2",
    title: "In Progress",
    type: LIST_TYPES.IN_PROGRESS,
    items: [],
  },
  {
    id: "list3",
    title: "Done",
    type: LIST_TYPES.DONE,
    items: [],
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
