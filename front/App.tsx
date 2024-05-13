import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  SafeAreaView
} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text></Text>
        <Button title='버튼 이름' onPress={() => console.log("클릭!")}></Button>
        <TextInput />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    marginHorizontal: 10,
    marginVertical: 5
  }
});

export default App;
