import React from 'react';
import { Button } from 'react-native';
import Login from './src/Views/Login/Login';
import Feed from './src/Views/Feed/Feed';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import logout from './src/Services/logout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Login' 
          component={Login}
          options={{
            title: 'Login'
          }} 
        />
        <Stack.Screen 
          name='Feed' 
          component={Feed} 
          options={({route}) => ({
            title: route.params.name,
            headerRight: () => (
              <Button
                onPress={() => {logout()}}
                title="Log Out"
                color="#000"  
              />
            )
          })}           
        />
      </Stack.Navigator>
    </NavigationContainer>
 )
};

export default App;
