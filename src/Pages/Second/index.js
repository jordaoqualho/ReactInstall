import * as React from "react";

import { Container, Text, Span, Button, ButtonText } from "./style";
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity, StyleSheet} from "react-native";

export default function Second({navigation}) {
  return (
    <Container>
      <Text>
        Primeiro você deve instalar o <FontAwesome5 name="node-js" size={40} color="#026e00" /><Span> Node.js!</Span>
      </Text>
      <TouchableOpacity style={styles.containerButton}>
        <Button>
          <ButtonText>Proximo passo</ButtonText>
        </Button>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  containerButton: { 
    width: '100%', 
    paddingTop: 100
  }
});
