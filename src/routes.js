import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Main from "@pages/Main";
import Second from "@pages/Second";
import Third from "@pages/Third";
import Forth from "@pages/Forth";


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#E2E2E2",
              elevation: 0
            },                             
          }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#E2E2E2",
              elevation: 0
            },
            headerTintColor: "#FB3640",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Third"
          component={Third}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#E2E2E2",
              elevation: 0
            },
            headerTintColor: "#FB3640",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Forth"
          component={Forth}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#E2E2E2",
              elevation: 0
            },
            headerTintColor: "#FB3640",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
