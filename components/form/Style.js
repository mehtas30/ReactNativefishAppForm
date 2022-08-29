import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
  },
  right: {
    width: "20%",
    marginLeft: "40%",
    justifyContent: "center",
  },
  left: {
    width: "20%",
    marginLeft: "10%",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    textAlign: "center",
    alignItems: "stretch",
    marginTop: 5,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 6,
  },
});

export default styles;
