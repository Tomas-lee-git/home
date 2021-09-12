import Welcome from "./components/Welcome.vue";
import Todo from "./components/Todo";

const routes = [
  { name: "todo", path: "/todo", component: Todo },
  { name: "welcome", path: "*", component: Welcome },
];

export default routes;
