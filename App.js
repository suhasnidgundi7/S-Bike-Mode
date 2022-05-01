import { Switch, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import systemSetting from 'react-native-system-setting';

const App = () => {
  const [switchValue, setSwitchValue] = useState(false);

  const toggleSwitch = (value) => {
    setSwitchValue(value)
    if (value == true) {
      console.log("Bike Mode Off")
    } else {
      console.log("Bike Mode On")
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.text}>
          {switchValue ? 'S Bike Mode On' : 'S Bike Mode Off'}
        </Text>
        <Switch
          style={styles.SwitchStyle}
          onValueChange={toggleSwitch}
          value = {switchValue}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems : 'center'
    },

    text: {
      fontSize: 30,
      fontWeight: 'bold'
    },

    SwitchStyle: {
      marginTop: 40,
    }
  }
);

export default App;