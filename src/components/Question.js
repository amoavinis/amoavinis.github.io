import { View, Text, StyleSheet } from "react-native";
import { questions } from "../config/questions";

export default function Question({questionId}) {

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
