import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    )
  }
}

export default App