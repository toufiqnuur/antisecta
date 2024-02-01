import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/routes/Home';
import Header from './src/components/Header';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f4f4f5'}}>
      <StatusBar barStyle="light-content" backgroundColor="#1d4ed8" />
      <Header />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default App;
