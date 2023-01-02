import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default function ColorScreen({ route, navigation }) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();
  useEffect(() => {
    switch (route.name) {
      case 'Home': { setBgColor('#DADADA'); break; }
      case 'Jamaah': { setBgColor('#000000'); break; }
      case 'Profil': { setBgColor('#333333'); break; }
      default: setBgColor('#FFFFFF');
    }
  }, [])
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewRef.current.animate({ 0: { opacity: 0.5, }, 1: { opacity: 1 } });
    })
    return () => unsubscribe;
  }, [navigation])
  return (
    <View style={Styles.container}>
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={Styles.container}>
        <View style={{backgroundColor: bgColor, flex: 1}} />
      </Animatable.View>
    </View>
  )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    separator: {
        height: 0.3,
        width: '100%',
        backgroundColor: '#DADADA',
        opacity: 0.8,
    },
    boldText: {
        fontWeight: 'bold',
    },
    contentContainerStyle: {
        paddingBottom: 200,
    },
    contentContainerStyle2: {
        paddingBottom: 100,
    },
})