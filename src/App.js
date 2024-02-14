import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Root from "./components/Root";
import Question from "./components/Question";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={{ height: "100vh" }}>
      <React.StrictMode>
        <View style={styles.container}>
          <Text style={styles.title}>ΤΟ ΜΕΓΑΛΟ ΜΟΥ ΠΡΟΤΖΕΚΤ</Text>
          <View style={styles.content}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Root />} />
                <Route path="*" element={<Question />} />
              </Routes>
            </BrowserRouter>
          </View>
        </View>
        <View style={{ height: "10%" }}></View>
      </React.StrictMode>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#af7ac5",
    padding: 10,
  },
  title: {
    height: "10%",
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    width: "100%",
    height: "80%",
  },
});
