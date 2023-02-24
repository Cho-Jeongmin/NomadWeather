import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "teal" }}></View>
      <View style={{ flex: 5, backgroundColor: "orange" }}></View>
      <View style={{ flex: 1, backgroundColor: "tomato" }}></View>
    </View>
  );
}
