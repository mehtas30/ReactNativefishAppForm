import { StatusBar } from "expo-status-bar";
import {
  Text,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  View,
} from "react-native";
import globalStyles from "./globalStyle";
import Form from "./components/form/Form.js";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <Text style={globalStyles.title}>Technician Form</Text>
          <Form />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
