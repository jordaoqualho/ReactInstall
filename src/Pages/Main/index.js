import * as React from "react";

import { Container, Text, Span, Button, ButtonText } from "./style";
import { TouchableOpacity, StyleSheet} from "react-native";

export default function Home({navigation}) {
  return (
    <Container>
      <Text>
        Como instalar <Span>React Native</Span> no seu Pc?{" "}
      </Text>
      <TouchableOpacity style={styles.containerButton} onPress={()=> navigation.navigate('Second')}>
        <Button>
          <ButtonText>Aprender</ButtonText>
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
