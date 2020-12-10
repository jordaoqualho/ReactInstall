import * as React from "react";

import { Container, Text, Button, ButtonText } from "../style";
import { Span, Link, Code } from "./style";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function Second({ navigation }) {
  return (
    <Container>
      <Text>
        Agora você deverá instalar o<Span> React Native CLI</Span>
      </Text>
      <Link>1 - Abra o CMD ou PowerShell em modo administrador</Link>
      <Link>
        2 - Digite o seguinte comando: {"                                   "}
        <Code>npm install -g react-native-cli</Code>
      </Link>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate("Forth")}
      >
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
