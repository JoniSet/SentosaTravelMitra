import React, { Component } from 'react'
import { Text, View, StyleSheet, SafeAreaView, StatusBar, Image, Dimensions, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import Icon, { Icons } from '../../components/Icons'
const {tinggi, panjang}   = Dimensions.get('window');

export class DetailJamaah extends Component {
  constructor(props){
    super(props);
    this.state = {
      hideDataDiri: true,
      hideUmroh: true,
      hideTabungan: true,
    }
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.parent}>
          <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
          <Image source={Icons.BgStatusBar} style={styles.imgBg}/>
          {/* Title bar */}
          <View style={styles.viewTitleBar}>
              <Icons.IcBackDark onPress={() => {this.props.navigation.goBack()}}/>
              <Text style={styles.textTitleBar}>Detail Jamaah</Text>
          </View>
          {/* Body */}
          <ScrollView>
            <View style={styles.viewProfil}>
              <Image source={Icons.ImgHaji} resizeMode= 'contain' style={styles.DP}/>
              <Text style={styles.txtNama}>Fulan</Text>
            </View>

            {/* Data diri */}
            <TouchableOpacity onPress={() => {
              this.state.hideDataDiri ? this.setState({hideDataDiri: false}) : this.setState({hideDataDiri: true})}
            }>
              <View style={styles.viewDataDiri}>
                <Icons.IcDataDiri width={30} height={30} />
                <View style={{flex: 1, marginLeft: 15}}>
                  <Text style={{fontSize: 15, color: '#242424', fontWeight:'500'}}>Data Diri</Text>
                  <Text style={{fontSize: 11, color: '#9f9f9f'}}>Data diri calon jamaah</Text>
                </View>
                <Icons.IcDown width={18} height={18}  />
              </View>
            </TouchableOpacity>

            {/* Isi Data Diri */}
            {
              this.state.hideDataDiri === false ? (
                <View style={styles.isiDataDiri}>
                  <Text style={styles.txtTitle}>Nama</Text>
                  <Text style={styles.txtValue}>Fulan</Text>
                  <Text style={styles.txtTitle}>Jenis Kelamin</Text>
                  <Text style={styles.txtValue}>Perempuan</Text>
                  <Text style={styles.txtTitle}>Email</Text>
                  <Text style={styles.txtValue}>fulan@gmail.com</Text>
                  <Text style={styles.txtTitle}>Nomor Telepon</Text>
                  <Text style={styles.txtValue}>081234123456</Text>
                  <Text style={styles.txtTitle}>Alamat</Text>
                  <Text style={styles.txtValue}>Permata Pamulang, Bhakti Jaya, Tangerang Selatan</Text>
                </View>
              ) : null
            }


            {/* Data Umroh */}
            <TouchableOpacity onPress={() => {
              this.state.hideUmroh ? this.setState({hideUmroh: false}) : this.setState({hideUmroh: true})}
            }>
              <View style={styles.viewDataDiri}>
                <Icons.IcDataUmroh width={30} height={30} />
                <View style={{flex: 1, marginLeft: 15}}>
                  <Text style={{fontSize: 15, color: '#242424', fontWeight:'500'}}>Data Umroh</Text>
                  <Text style={{fontSize: 11, color: '#9f9f9f'}}>Lengkapi data Umroh</Text>
                </View>
                <Icons.IcDown width={18} height={18}  />
              </View>
            </TouchableOpacity>

            {/* Isi Umroh */}
            {
              this.state.hideUmroh === false ? (
                <View style={styles.isiDataDiri}>
                  <Text style={styles.txtTitle}>Surat Rekomendasi</Text>
                  <TouchableOpacity
                    style={{backgroundColor: '#29D88D', marginVertical: 20, borderRadius: 10, height: 50, justifyContent: 'center', alignItems: 'center', alignContent: 'center', flex: 1}}
                    onPress={() => {}}
                  >
                    <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 15}}>Surat telah dikirim</Text>
                  </TouchableOpacity>
                  <Text style={styles.txtTitle}>Foto Pasport</Text>
                  <Image source={Icons.ImgPasport}style={styles.imgFoto} resizeMode= 'cover'></Image>
                  <Text style={styles.txtTitle}>Foto Sertifikat Vaksin Meningitis</Text>
                  <Image source={Icons.ImgVaksin} style={styles.imgFoto} resizeMode= 'cover'></Image>
                </View>
              ) : null
            }
            
            {/* Data tabungan */}
            <TouchableOpacity onPress={() => {
              this.state.hideTabungan ? this.setState({hideTabungan: false}) : this.setState({hideTabungan: true})}
            }>
              <View style={styles.viewDataDiri}>
                <Icons.IcDataTabungan width={30} height={30} />
                <View style={{flex: 1, marginLeft: 15}}>
                  <Text style={{fontSize: 15, color: '#242424', fontWeight:'500'}}>Data tabungan</Text>
                  <Text style={{fontSize: 11, color: '#9f9f9f'}}>Data tabungan calon jamaah</Text>
                </View>
                <Icons.IcDown width={18} height={18}  />
              </View>
            </TouchableOpacity>

            {/* Isi Tabungan */}            
            {
              this.state.hideTabungan === false ? (
                <View style={styles.isiDataDiri}>
                  <Text style={styles.txtTitle}>Tabungan</Text>
                  <Text style={styles.txtValue}>Rp 0</Text>
                  <Text style={styles.txtTitle}>Target Tabungan</Text>
                  <Text style={styles.txtValue}>Rp 24.000.000</Text>
                </View>
              ) : null
            }
            
            {/* button */}
            <TouchableOpacity
              style={[styles.buttonModal, {backgroundColor: '#FD9812', marginBottom: 30}]}
              onPress={() => {}}
            >
              <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 15}}>SELESAIKAN PEMBAYARAN</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },

    imgBg: {
      height: 40,
      width: '100%',
    }, 

    viewTitleBar: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        padding: 15, 
        alignItems: 'center', 
        justifyContent: 'space-evenly',
    },

    textTitleBar: {
      flex: 1, 
      textAlign: 'center', 
      color: '#1E1E1E', 
      fontWeight: '600', 
      fontSize: 18, 
      marginRight: 25
    },

    viewProfil: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    },

    DP: {
      width: 150, 
      height: 150, 
      borderRadius: 150/2,
    },

    txtNama: {
      marginTop: 15,
      color: '#242424',
      fontWeight: '600',
      fontSize: 16,
      textTransform: 'uppercase'
    },

    viewDataDiri: {
      marginHorizontal: 30,
      borderRadius: 10,
      borderColor: '#DADADA',
      borderWidth: 2,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingStart: 10,
      paddingEnd: 20,
      marginTop: 15
    },

    isiDataDiri: {
      marginHorizontal: 30,
      flexDirection: 'column',
      padding: 10,
      marginBottom: 15,
    },

    buttonModal: {
      borderRadius: 10,
      height: 50,
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 20,
      marginHorizontal: 30
    },

    txtTitle: {
      color: '#201f1f',
      fontWeight: '600',
      fontSize: 16,
    },

    txtValue: {
      color: '#201f1f',
      fontWeight: '400',
      fontSize: 14,
      marginBottom: 10
    },

    imgFoto: {
      width: panjang,
      height: 200,
      marginVertical: 10,
      borderRadius: 10
    }

})

export default DetailJamaah
