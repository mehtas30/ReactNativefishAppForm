import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "turquoise",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 34,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  button: {
    fontSize: 20,
    width: "10%",
    backgroundColor: "maroon",
    padding: 5,
    borderRadius: 10,
  },
});

export default GlobalStyles;
