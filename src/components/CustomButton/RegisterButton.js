import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const RegisterButton = ({onPress}) => {
  return (
    <Pressable style= {styles.container} onPress= {onPress}>
      <Text style= {styles.text}>REGISTRASI</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create ({
    container: {
        borderWidth: 1,
        borderColor: '#02BE65',
        padding: 12,
        width: '100%',
        height: 50,
        marginTop: 30,
        borderRadius: 10,
        alignItems: 'center',
        alignContent: 'center',
    }, 

    text: {
        color: '#02BE65',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default RegisterButton