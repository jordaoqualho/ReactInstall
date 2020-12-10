import * as React from "react";

import { Container, Text, Button, ButtonText } from "../style";
import { Span } from "./style";
import { TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <Container>
      <Text>
        Como instalar
        <Span>
        {' '}<FontAwesome5 name="react" size={40} color="#68C2F3" />React Native
        </Span>
        {'       '}no seu Pc?
      </Text>
      <TouchableOpacity
        style={styles.containerButton}
        onPress={() => navigation.navigate("Second")}
      >
        <Button>
          <ButtonText>Bora ver!</ButtonText>
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
