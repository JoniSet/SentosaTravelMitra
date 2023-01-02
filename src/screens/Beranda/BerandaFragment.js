import { Text, View, StyleSheet, ImageBackground, StatusBar, Image, useWindowDimensions, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Icon, {Icons} from '../../components/Icons'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const {tinggi, panjang}   = Dimensions.get('window');

export class BerandaFragment extends Component {
  constructor(props){
    super(props);
    this.state = {
      
    }
  }

  render() {
    const {navigation}  = this.props;
    return (
      <View style= {{flex: 1, backgroundColor: '#FFFFFF'}}>
        <StatusBar translucent={true} backgroundColor={'transparent'}/>
        <Image source={Icons.BGGradient} style={styles.imgBg}/>
        {/* header */}
        <View style={styles.viewHeader}> 
          <View style={styles.viewContentHeader}>
            <View style={{flexDirection: 'row'}}>
              <Image source={Icons.LogoMitra} style={styles.logoMitra} resizeMode='contain' />
              <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>Mitra</Text>
                <Text style={styles.textTitle}>Sentosa Travel</Text>
              </View>
            </View>
            <View>
              <Icons.IcNotif height='50' onPress={() => {navigation.navigate('NotifScreen')}}/>
            </View>
          </View>
        </View>
        {/* Dasboard */}
        <View style={styles.viewContent}>
          <Text style={{color: '#1E1E1E', fontWeight:'500', fontSize: 18,}}>Dashboard</Text>
          <Text style={{color: '#2A523F', fontWeight:'700', fontSize: 22, marginTop: 30}}>Halo</Text>
          <Text style={{color: '#2A523F', fontWeight:'700', fontSize: 22,}}>Fulan Bulan Fulan</Text>
          {/* Komisi */}
          <TouchableOpacity onPress={() => {navigation.navigate('KomisiScreen')}}>
            <View style={styles.viewKomisi}>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#FFFFFF', fontSize: 14,}}>September 2022</Text>
                <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 24, marginTop: 15}}>Rp 1.000.000</Text>
                <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Komisi Anda</Text>
              </View>                                               
              <Icons.IcKomisi height= '100' style={{marginHorizontal: 20}}/>
            </View>
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
            {/* Peforma */}
            <TouchableOpacity onPress={() => {navigation.navigate('RangkingScreen')}} style={{flex: 1}}>
              <View style={styles.viewPeforma}>
                <View style={{flexDirection: 'column',}}>
                  <Text style={{color: '#FFFFFF', fontSize: 12,}}>Peforma Mitra</Text>
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 20}}>3/26</Text>
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 12}}>Rangking Anda</Text>
                </View>
                <Icons.IcPeforma height= '50' style={{marginHorizontal: 5}}/>
              </View>
            </TouchableOpacity>
            
            {/* Jamaah */}
            <TouchableOpacity onPress={() => console.warn('Jamaah')} style={{flex: 1}}>
              <View style={styles.viewJamaah}>
                <View style={{flexDirection: 'column'}}>
                  <Text style={{color: '#FFFFFF', fontSize: 12,}}>Jamaah</Text>
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 20}}>100</Text>
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 12}}>Total Jamaah</Text>
                </View>
                <Icons.IcToalJamaah height= '50' style={{marginHorizontal: 5}}/>
              </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  imgBg: {
    height: 225,
    width: panjang,
  }, 
  viewHeader: {
    height: 250,
    width: '100%',
    position: 'absolute',
    justifyContent: 'center'
  },
  viewContentHeader: {
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: -25,
    justifyContent: 'space-between',
  },
  logoMitra: {
    height: 55
  },
  viewTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
  }, 
  textTitle: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'left'
  },


  viewContent: {
    marginHorizontal: 20,
    marginTop: -60,
    width: panjang,
    padding: 20,
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    borderRadius: 15,
    elevation: 10
  },
  viewKomisi: {
    backgroundColor: '#FD9812',
    borderRadius: 10,
    width: '100%',
    padding: 20,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewPeforma: {
    backgroundColor: '#198F5A',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    end: 5,
    marginStart: 5
  },
  viewJamaah: {
    backgroundColor: '#198F5A',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    start: 5, 
    marginRight: 5
  }
})

export default BerandaFragment