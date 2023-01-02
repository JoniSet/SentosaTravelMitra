import { View, Text, StyleSheet, useWindowDimensions } from 'react-native'
import React, { useEffect, useReducer, useRef } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import BerandaFragment from './Beranda/BerandaFragment';
import JamaahFragment from './DataJamaah/JamaahFragment';
import ProfilFragment from './Profil/ProfilFragment';

import Icon, { Icons } from '../components/Icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Tab   = createBottomTabNavigator();

const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Home, icon: 'home', component: BerandaFragment },
  { route: 'Jamaah', label: 'Jamaah', type: Icons.Jamaah, icon: 'jamaah', component: JamaahFragment},
  { route: 'Profil', label: 'Profil', type: Icons.Profil, icon: 'profil', component: ProfilFragment}
];

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused       = accessibilityState.selected;
  const viewRef       = useRef(null);
  const textViewRef   = useRef(null);

  useEffect(() => {
    if (focused) { // 0.3: { scale: .7 }, 0.5: { scale: .3 }, 0.8: { scale: .7 },
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      // textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      // textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}>
        <View >
          <Animatable.View
            ref={viewRef}
            style={[StyleSheet.absoluteFillObject, { backgroundColor: '#FFFFFF', borderRadius: 20, opacity: 0.3 }]} />
            <View style={styles.btn}>
              <Icon type={item.type} name={item.icon} ></Icon>
              <Text style={styles.txtColor}>{focused ? item.label : ''}</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          position: 'absolute' ,
          height: 60,
          bottom: 20,
          left: 16,
          right: 16,
          borderRadius: 10,
          backgroundColor: '#198F5A'
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  txtColor:{
    color: '#FFFFFF',
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 15
  },
  viewAct: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
    borderRadius: 15
  }
})