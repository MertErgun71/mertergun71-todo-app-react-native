import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { appStyles as styles } from "./AppStyles";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      <Text style={styles.title}>TODO App</Text>
      <Text style={styles.disc}>
        Enter your task in the text box to add new task.
      </Text>

      <TextInput style={styles.textbox} placeholder="Write your task." />
      <TouchableOpacity style={{ width: 0 }}>
        <Text style={styles.taskButton}>Add Task</Text>
      </TouchableOpacity>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
