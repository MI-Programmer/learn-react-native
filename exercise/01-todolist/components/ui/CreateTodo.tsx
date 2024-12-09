import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface Props {
  onCreateTodo: (text: string) => void;
}

export default function CreateTodo({ onCreateTodo }: Props) {
  const [text, setText] = useState<string>("");

  const handleCreateTodo = () => {
    onCreateTodo(text);
    setText("");
  };

  return (
    <View style={styles.createTodo}>
      <View>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Add a new task..."
          style={styles.inputTodo}
        />
        <Button onPress={handleCreateTodo} title="Create" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createTodo: {
    marginVertical: 14,
  },
  inputTodo: {
    marginBottom: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
  },
});
