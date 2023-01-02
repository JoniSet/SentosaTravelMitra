import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, StatusBar } from 'react-native';
import { StackActions } from '@react-navigation/native';
import BG from '../../src/assets/images/bg_splash_gradient.png';
import Logo from '../../src/assets/images/logo_mitra_sentosa_travel.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogedIn: '0'
    };
  }

  componentDidMount(){
    this._retriveData();
  }

  _retriveData = async () => {
    try{
      const data = await AsyncStorage.getItem('logedIn')
      this.setState({isLogedIn: data})
      
      if(this.state.isLogedIn == 1){
        console.log(this.state.isLogedIn);
      }
      else {
        console.log('gak lofin');
      }
      setTimeout(() => {
        this.props.navigation.dispatch(data == 1 ? StackActions.replace('HomeScreen') : StackActions.replace('Login'))
      }, 3000); 
    }
    catch(e){

    }
  }

  render() {
    return (
      <View style= {styles.parent}>
        <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
        <ImageBackground 
            source={BG}
            style={{width: '100%', height: '100%', flex:1, alignItems: 'center', justifyContent: 'center'}} 
        >
          <Image source={Logo} style= {styles.logo} resizeMode= "contain"/>
        </ImageBackground>
        
      </View>
    );
  }
  
}


const styles = StyleSheet.create({
  parent: {
    flex: 1,
    
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  logo: {
      width: '40%',
      height: '50%'
  },

  textTebal: {
      color: '#201F1F',
      fontWeight: '500',
      fontSize: 18,
      marginTop: 5
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
});

export default SplashScreen;
