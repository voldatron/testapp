import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({label, ...props}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style= {styles.input} {...props}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {borderWidth: 1, borderColor: 'black', borderRadius: 10, padding: 12, marginHorizontal: 20},
    label: {fontSize : 13, color: 'black', marginBottom: 6, marginHorizontal:20 },
})