import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const ButtonLogin = ({onPress, text}) => {
  return (
    <Pressable width='100%' onPress= {onPress}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#FFBB38', '#F58634']} style={styles.container}>
        <Text style= {styles.textButton}>{text}</Text>
      </LinearGradient>
      
    </Pressable>
  )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#FFBB38',
        padding: 12,
        width: '100%',
        height: 50,
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 10,
        marginTop: 15
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default ButtonLogin