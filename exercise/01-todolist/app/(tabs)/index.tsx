import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Header from "@/components/ui/Header";
import TodoList from "@/components/ui/TodoList";
import CreateTodo from "@/components/ui/CreateTodo";
import { Todo } from "@/types";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const createTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), check: false, text },
    ]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, check: !todo.check } : todo
      )
    );
  };
  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Header />
        <CreateTodo onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 14,
  },
  box: {
    backgroundColor: "#f8fafc",
    width: "100%",
    borderWidth: 1,
    borderRadius: 16,
    elevation: 1.5,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
