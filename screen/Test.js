import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const RegisterScreen = () => {
  return (
    <ScrollView>
      <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white' }}>Box1</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14, borderRadius:100, alignItems:'center',justifyContent:'center' }}>
            <Text style={{color:'white'}}>Box2</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14, borderRadius:8 }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14 }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14 }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14 }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'red', margin: 14 }}></View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
