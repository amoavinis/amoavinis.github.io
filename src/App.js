import React, { useEffect, useState } from "react";
import Root from "./components/Root";
import Question from "./components/Question";
import { View, Text, StyleSheet } from "react-native";

export default function App() {
  const [questionId, setQuestionId] = useState("");

  useEffect(() => {
    let url = window.location.href;
    let split = url.split("?q=");

    let qId = split.length > 1 ? split[1] : null;
    setQuestionId(qId);
  }, []);

  return (
    <View style={{ height: "100vh" }}>
      <React.StrictMode>
        <View style={styles.container}>
          <Text style={styles.title}>ΤΟ ΜΕΓΑΛΟ ΜΟΥ ΠΡΟΤΖΕΚΤ</Text>
          <View style={styles.content}>
          { questionId ? <Question questionId={questionId}/> : <Root />}
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
