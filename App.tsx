import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text } from "react-native";
import styled from "styled-components/native";
import { ApolloProvider } from "@apollo/client";
import { createApolloClient } from "./src/common/apollo-client";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const apolloClient = createApolloClient();

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Container>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </Container>
    </ApolloProvider>
  );
};

export default App;
