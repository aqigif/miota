import React from 'react';
import codePush from "@revopush/react-native-code-push";
import {StatusBar, StyleSheet, Text, useColorScheme, View} from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text style={{fontSize: 20}}>Miota</Text>
      <Text>Delivering OTA personally</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default codePush(App);
