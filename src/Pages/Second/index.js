import * as React from "react";

import { Container, Text, Button, ButtonText } from "../style";
import { Span, Link } from "./style";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Second({ navigation }) {
  return (
    <Container>
      <Text>
        Primeiro você deve instalar;{"\n"}
        <Span>
          {"\n"}
          <FontAwesome5 name="node-js" size={40} color="#026e00" /> Node.js
        </Span>
        <Span style={{ color: "#5d6798" }}>
          {"\n"}
          <FontAwesome5 name="python" size={40} color="#5d6798" /> Python
        </Span>
        <Span style={{ color: "#F9A620" }}>
          {"\n"}
          <FontAwesome5 name="java" size={40} color="#F9A620" /> Java Dev. Kit
        </Span>
      </Text>

      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate("Third")}      >
        <Button>
          <ButtonText>Proximo passo</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    width: "100%",
    paddingTop: 100,
  },
});
