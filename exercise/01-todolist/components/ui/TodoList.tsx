import { StyleSheet, View } from "react-native";

import TodoItem from "./TodoItem";
import { Todo } from "@/types";

interface Props {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export default function TodoList({ todos, onToggleTodo, onDeleteTodo }: Props) {
  return (
    <View style={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  todoList: {
    marginTop: 8,
    paddingHorizontal: 10,
  },
});
