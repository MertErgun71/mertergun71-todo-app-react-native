import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: "bold",
    color: "lightgreen",
  },
  disc: {
    fontSize: 18,
    marginTop: 15,
  },
  textbox: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    marginTop: 20,
    padding: 5,
  },
  taskButton: {
    paddingVertical: 15,
    paddingHorizontal: 22,
    backgroundColor: "lightgreen",
    width: 102,
    borderRadius: 7,
    marginTop: 10,
  },
});
