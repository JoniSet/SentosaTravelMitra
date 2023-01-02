import { View, Text, Image, StyleSheet, useWindowDimensions, StatusBar, TextInput, SafeAreaView  } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import ButtonLogin from '../components/CustomButton/ButtonLogin';
import RegisterButton from '../components/CustomButton/RegisterButton';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../src/assets/images/logo_sentosa_travel.png';

import LinearGradient from 'react-native-linear-gradient';
// import { AuthContext } from '../context/AuthContext';
// import Spinner from 'react-native-loading-spinner-overlay';
import { Icons } from '../components/Icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [noWa, saveNowa]    = useState();
  const {height}            = useWindowDimensions();
  const navigation          = useNavigation();

  // const {isLoading, loginCoba}          = useContext(AuthContext);

  const onLoginPressed = () => {
    //   navigation.navigate('OTP')
    if(noWa < 1){
        console.error('Mohon isi form nomor Whatsapp');
    }
    else {
        // loginCoba(noWa, 'password', 'niuncd989849r02jfd09ewjfd0944hnc938j0')
        navigation.navigate('OTP', noWa);
        AsyncStorage.setItem('logedIn', JSON.stringify(1))
    }
  }

  const onRegisterPressed = () => {
      navigation.navigate('Registrasi')
  }

  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'light-content'} />
        <Image source={Icons.BGGradient} style={styles.imgBg}/>
        <View style={styles.parent} height={height}>  
            <View style={styles.container}>
            <Image source={Logo} style= {styles.logo} resizeMode= "contain" />
            <Text style={styles.textTebal}>Mitra Sentosa Travel</Text>
            <View style={styles.viewTextTitle}>
                <Text style={styles.textTitle}>Nomor Handphone(WhatsApp)</Text>
            </View>
            <TextInput 
                style={styles.input} 
                value={noWa}
                placeholder= 'Masukkan nomor whatsapp'
                onChangeText={text => saveNowa(text)}
                keyboardType= 'phone-pad'/>
                
            <ButtonLogin text={'LOGIN'} onPress= {onLoginPressed} />

            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20,
        width: '100%'   
    },

    imgBg: {
    height: 40,
    width: '100%',
    }, 

    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -50
    },

    logo: {
        width: '20%',
        maxWidth: 100,
        height: 100,
    },

    viewTextTitle: {
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        width: '100%',
        marginTop: 50
    },

    textTitle: {
        marginHorizontal: 5,
        color: '#201F1F',
        // fontWeight: 'bold'
    },

    input: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        height: 45,
        borderColor: '#DFDFDF',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginVertical: 10,
        borderRadius: 5
    },

    textTebal: {
        color: '#201F1F',
        fontWeight: '500',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 40
    },

    viewOr: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    
    garisAbu: {
        width: '40%',
        height: 1,
        backgroundColor: '#DADADA'
    },
})


export default Login