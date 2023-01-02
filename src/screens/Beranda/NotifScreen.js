import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions } from 'react-native'

import { Icons } from '../../components/Icons'

const {tinggi, panjang}   = Dimensions.get('window');

export class NotifScreen extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  goBack(){
    const {navigation} = this.props;
    navigation.goBack();
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
          <Image source={Icons.BGGradient} style={styles.imgBg}/>
          {/* title bar */}
          <View style={styles.viewTitleBar}>
              <Icons.IcBackLight onPress={() => {this.goBack()}}/>
              <Text style={{flex: 1, textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: 18, marginRight: 25}}>Notifikasi</Text>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  imgBg: {
    height: '13%',
    width: panjang,
  }, 
  
  viewTitleBar: {
    flexDirection: 'row',
    height: 65,
    width: '100%',
    padding: 15, 
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    position: 'absolute',
    marginTop: 40
  },
})

export default NotifScreen
