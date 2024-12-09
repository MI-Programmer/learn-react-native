import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

import { Todo } from "@/types";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  todo: Todo;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export default function TodoItem({
  todo: { id, text, check },
  onToggleTodo,
  onDeleteTodo,
}: Props) {
  const handleToggleTodo = () => onToggleTodo(id);
  const handleDeleteTodo = () => onDeleteTodo(id);

  return (
    <View style={styles.todoItem}>
      <Text
        style={{
          ...styles.todoText,
          color: check ? "#4b5563" : "#000000",
          textDecorationLine: check ? "line-through" : "none",
        }}
        onPress={handleToggleTodo}
      >
        {text}
      </Text>

      <View style={styles.todoActions}>
        <Checkbox value={check} onValueChange={handleToggleTodo} />
        <Ionicons
          name="trash-outline"
          color="red"
          size={20}
          onPress={handleDeleteTodo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  todoText: {
    fontSize: 16,
    fontWeight: 500,
  },
  todoActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
