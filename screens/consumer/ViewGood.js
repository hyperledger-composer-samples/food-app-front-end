import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import NavBar from './../../components/NavBar'


export default class ViewGood extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar/>
        <Text>View Good </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
