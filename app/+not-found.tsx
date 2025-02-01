import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function NotFound() {
  return (
    <>
    {/* <Stack.Screen options={{title:"Opps! Not Found"}}/> */}
    <View style={styles.container}>
    <Link href={'/'} style={styles.button}>Go back to Home screen!</Link>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#25292e',
        justifyContent:'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
      },
    button: {
        fontSize: 20,
        textDecorationLine:"underline",
        color:"#fff"
      }
})