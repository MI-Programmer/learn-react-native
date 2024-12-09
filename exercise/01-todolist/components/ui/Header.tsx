import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: "center",
  },
});

export default function Header() {
  return (
    <View>
      <Text style={styles.header}>Todo List App</Text>
    </View>
  );
}
