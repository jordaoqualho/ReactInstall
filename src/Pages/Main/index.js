import * as React from 'react';

import { Container, Text, Span, Button } from './style';

export default function Home() {

  return (
    <Container>
      <Text>Como instalar <Span>React Native</Span> no seu Pc? </Text>
      <Button>
        <Text>Aprender</Text>
      </Button>
    </Container>
  );
}