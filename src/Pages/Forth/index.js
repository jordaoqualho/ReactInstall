import * as React from "react";

import { Container, Text, Button, ButtonText } from "../style";
import { Span, Link, Code } from "./style";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Second({ navigation }) {
  return (
    <Container>
      <Text>
        Por ultimo, basta instalar o<Span>{'\n'}EXPO CLI{'\n'}</Span>
      </Text>
      <Link>1 - Abra o CMD ou PowerShell em modo administrador</Link>
      <Link>
        2 - Digite o seguinte comando: {"                                   "}
        <Code>npm install -g expo-cli</Code>
      </Link>
      <Link>
        3 - Crie seu projeto com:
        <Code>{"\n"}expo init --template react-native-template-expo-basic</Code>
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButton: {
    width: "100%",
    paddingTop: 100,
  },
});
