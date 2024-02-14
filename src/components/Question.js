import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { questions } from "../config/questions";

export default function Question() {
  const [questionId, setQuestionId] = useState(0);

  useEffect(() => {
    let url = window.location.href;
    let split = url.split("/");
    setQuestionId(split[split.length - 1]);
  }, []);

  function getQuestion() {
    return questions[questionId] || "No question";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>{getQuestion()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 24,
    color: "white",
  },
});
