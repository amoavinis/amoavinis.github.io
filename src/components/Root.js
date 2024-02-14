import { View, Text, StyleSheet } from "react-native";

export default function Root() {
  return (
    <View style={styles.container}>
      <Text style={styles.contentText}>
        Αν βρίσκεσαι εδώ Μαρία μου, τότε μάλλον πρέπει να γυρίσεις στην
        προηγούμενη οθόνη.
      </Text>
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
