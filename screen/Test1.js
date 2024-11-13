import { View, Text, ScrollView, StyleSheet,Image } from 'react-native'
import React from 'react'

const Test1 = () => {
  return (
<ScrollView style={StyleSheet.conatiner}>
<View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

  <View style={{padding:12}}>
    <Image style={styles.image} source={{uri: 'https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg'}} />
   <Text>Text Image1</Text>
  </View>
  <View style={{padding:12}}>
    <Image style={styles.image} source={{uri: 'https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg'}} />
    <Text>Text Image2</Text>
  </View>
  <View style={{padding:12}}>
    <Image style={styles.image} source={{uri: 'https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg'}} />
    <Text>Text Image3</Text>
  </View>
  <View style={{padding:12}}>
    <Image style={styles.image} source={{uri: 'https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg'}} />
    <Text>Text Image4</Text>
  </View>
  <View style={{padding:12}}>
    <Image style={styles.image} source={{uri: 'https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg'}} />
    <Text>Text Image5</Text>
  </View>
 </View>
</ScrollView>
  )
}

export default Test1

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:100
    },
    image:{
        width:170,
        height:150,
        objectFit:'cover'
    }
})