import { Text, View, Image, StyleSheet, TextInput, Dimensions, StatusBar, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import Modal from 'react-native-modal';
import { SelectList } from 'react-native-dropdown-select-list';
import Clipboard from '@react-native-clipboard/clipboard';

import { Icons } from '../../components/Icons'
import DialogStatus from './Component/DialogStatus';
import DialogRekening from './Component/DialogRekening';
import DialogViewRekening from './Component/DialogViewRekening';
import DialogEditRekening from './Component/DialogEditRekening';


const {tinggi, panjang}   = Dimensions.get('window');

export class ProfilFragment extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      viewRekening: false,
      editRekening: false,
      suksesTambah: false,
      nama_bank: '',
      no_rek: '',
      nama_penerima: '',
      status_rek: 'on',
      nama_user: '',
      email: '',
      kode_referal: '55123'
    }
  }

  render() {
    const {navigation}  = this.props;
    const btnSimpanRekenig = () => {
      if(this.state.nama_bank == ''){
        console.warn('Mohon isi nama bank anda!');
      }
      else if (this.state.no_rek == ''){
        console.warn('Mohon isi nomor rekening anda!');
      }
      else if(this.state.nama_penerima == ''){
        console.warn('Mohon isi nama penerima!');
      }
      else {
        this.setState({isVisible: false})
        this.setState({suksesTambah: true})
        this.setState({nama_bank: ''})
        this.setState({no_rek: ''})
        this.setState({nama_penerima: ''})
      }
    }

    const edtRekening = () => {
      this.setState({viewRekening: false})
      this.setState({editRekening: true})
    }

    return (
      <SafeAreaView style= {{flex: 1}}>
        <View style= {{flex: 1, backgroundColor: '#FFFFFF'}}>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
          <Image source={Icons.BGGradient} style={styles.imgBg}/>
          <View style={styles.viewHeader}> 
            <Icons.IcNotif height='50' onPress={() => {navigation.navigate('NotifScreen')}}/> 
          </View>

          <View style={styles.viewContent}>
            <Image source={Icons.LogoMitra} style={{height: 100, resizeMode: 'contain'}} />
            <View style={{flexDirection: 'column', justifyContent: 'center', marginLeft: 10, flex: 1}}>
              <Text style={{color: '#201F1F', fontSize: 22, fontWeight: '600'}}>Fulan</Text>
              <Text style={{color: '#201F1F', fontWeight: '400', fontSize: 14, marginTop: 5}}>085123456123</Text>
              <Text style={{color: '#828282', fontSize: 11, marginTop: 5}}>Kode Referal</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 20}}>
                <Text style={{color: '#FD9812', fontSize:14, fontWeight: '600', fontStyle: 'italic'}}>{this.state.kode_referal}</Text>
                <Icons.IcCopy onPress={() => {
                  Clipboard.setString(this.state.kode_referal)
                  console.warn('Kode referal berhasil di salin')
                  }}/>
              </View>
            </View>
          </View>

          <View style={styles.viewContent2}>
            {/* Layanan Pelanggan */}
            <TouchableOpacity onPress={() => {navigation.navigate('LayananPelangganScreen')}}>
              <View style={{flexDirection: 'row'}}>
                <Icons.IcPusatBantuan style= {{height: 60}} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, flex: 1}}>
                  <Text style={{color: '#201F1F', fontSize:16, fontWeight: '400'}}>Layanan Sentosa Travel</Text>
                  <Icons.IcKanan />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{marginLeft: 40, marginVertical: 12, height: 1, backgroundColor: '#DADADA', flexDirection: 'row'}} />

            {/* Rekening */}
            <TouchableOpacity  onPress={() => {
                this.state.status_rek == 'off' ? this.setState({isVisible: true}) : this.setState({viewRekening: true})
                // this.setState({viewRekening: true})
              }}>
              <View style={{flexDirection: 'row'}}>
                <Icons.IcRekening style= {{height: 60}} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, flex: 1}}>
                  <Text style={{color: '#201F1F', fontSize:16, fontWeight: '400'}}>Rekening</Text>
                  <Icons.IcKanan />
                </View>
              </View>
            </TouchableOpacity >
            
            <View style={{marginLeft: 40, marginVertical: 12, height: 1, backgroundColor: '#DADADA', flexDirection: 'row'}} />

            {/* Syarat dan ketentuan */}
            <TouchableOpacity onPress={() => {navigation.navigate('FAQScreen')}}>
              <View style={{flexDirection: 'row'}}>
                <Icons.IcFaq style= {{height: 60}} />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, flex: 1}}>
                  <Text style={{color: '#201F1F', fontSize:16, fontWeight: '400'}}>Syarat dan Ketentuan</Text>
                  <Icons.IcKanan />
                </View>
              </View>
            </TouchableOpacity>

            <View style={{marginLeft: 40, marginVertical: 12, height: 1, backgroundColor: '#DADADA', flexDirection: 'row'}} />

            <View style={{flexDirection: 'row'}}>
              <Icons.IcLogout style= {{height: 60}} />
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, flex: 1}}>
                <Text style={{color: '#201F1F', fontSize:16, fontWeight: '400'}}>Keluar</Text>
              </View>
            </View>

          </View>
        </View>

         {/* popup tambah jamaah */}
         <DialogRekening 
          visible={this.state.isVisible}
          onPress= {() => this.setState({ isVisible: false })}
          bank= {this.state.nama_bank}
          setBank= {text => this.setState({nama_bank: text})}
          rekening= {this.state.no_rek}
          set_rek= {text => this.setState({no_rek: text})}
          nama= {this.state.nama_penerima}
          setNama= {text => this.setState({nama_penerima: text})}
          onClick= {() => btnSimpanRekenig()}
         />
         
         <DialogViewRekening 
          visible={this.state.viewRekening}
          onPress= {() => this.setState({ viewRekening: false })}
          bank= {'BCA'}
          rekening= {'1234456'}
          nama= {'Fulana'}
          onClick= {() => edtRekening()}
         />

         <DialogEditRekening 
          visible={this.state.editRekening}
          onPress= {() => this.setState({ editRekening: false })}
          bank= {this.state.nama_bank}
          setBank= {text => this.setState({nama_bank: text})}
          rekening= {this.state.no_rek}
          set_rek= {text => this.setState({no_rek: text})}
          nama= {this.state.nama_penerima}
          setNama= {text => this.setState({nama_penerima: text})}
          onClick= {() => btnSimpanRekenig()}
         />

        {/* notif sukses tambah */}
        <DialogStatus 
          muncul= {this.state.suksesTambah}
          onPress= {() => this.setState({ suksesTambah: false })}
        />
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create ({
  imgBg: {
    height: 200,
    width: panjang,
  }, 
  viewHeader: {
    height: '20%',
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    marginTop: 60,
    paddingEnd: 30
  },
  viewContentHeader: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginTop: -25
  },
  logoMitra: {
    height: 65
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
    marginHorizontal: 30,
    marginTop: -75,
    width: panjang,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  viewContent2: {
    flexDirection: 'column',
    marginHorizontal: 30,
    marginTop: 50,
    alignContent: 'flex-start'
  },

  //modal
  containerModal: {
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    width: '100%',
  },

  input: {
      backgroundColor: '#F6F6F6',
      height: 45,
      borderColor: '#DFDFDF',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 3,
      marginTop: 5,
      borderRadius: 5,
      marginHorizontal: 20
  },

  checkboxModal:{
    marginHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },

  buttonModal: {
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    margin: 20
  },
})  

export default ProfilFragment