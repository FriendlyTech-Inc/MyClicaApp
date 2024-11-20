import React from "react";
import { View, StyleSheet } from "react-native";
import { WebViewContainer } from "../components/WebViewContainer";

export default function Home() {
  return (
    <View style={styles.container}>
      <WebViewContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});