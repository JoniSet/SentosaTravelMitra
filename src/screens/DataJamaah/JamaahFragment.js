import { Text, View, Image, StyleSheet, Dimensions, StatusBar, ImageBackground, SafeAreaView, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'

import { Icons } from '../../components/Icons';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import {SelectList} from 'react-native-dropdown-select-list';
// import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const {tinggi, panjang}   = Dimensions.get('window');

const dataUmroh   = [
  {
    id: '002334',
    nama: 'Fulan',
    status: 'Terdaftar',
    paket: 'Paket Reguler'
  },
  {
    id: '002335',
    nama: 'Wahyu',
    status: 'Belum Daftar Paket',
    paket: ''
  },
];

const renderUmroh = ({item, index}) =>{  
  // const nav   = useNavigation();
  return(
    <TouchableOpacity onPress={() => {this.props.navigation.navigate('DetailJamaah')}}>
      <View style={styles.containerItem}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#242424', fontWeight: '600', fontSize: 15}}>{item.nama}</Text>
          <Text style={{
              color: '#FFFFFF', 
              fontSize: 11,
              borderRadius: 8, 
              backgroundColor: item.status === 'Terdaftar' ? '#02BE65' : '#EE9545', 
              paddingHorizontal: 10}}>
            {item.status}
          </Text>
        </View> 
        <View style={{height: 1, flex: 1, backgroundColor: '#DADADA', marginVertical: 5}}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#02BE65', fontSize: 12}}>{item.paket}</Text>
          <Text style={{color: '#525252', fontSize: 12}}>ID : {item.id}</Text>
        </View> 
      </View>      
    </TouchableOpacity>
  )
}

export class JamaahFragment extends Component {
  constructor(props){
    super(props);
    this.state = {
      cariJamaah: '',
      paket: 'Umroh',
      isVisible: false,
      suksesTambah: false,
      nama: '',
      nik: '',
      perjalanan: '',
      checkBox: false,
    }
  }
  render() {
    const btnTambahJamaah = () => {
      if(this.state.nama == ''){
        console.warn('Mohon isi nama!');
      }
      else if (this.state.nik == ''){
        console.warn('Mohon isi nik!');
      }
      else if(this.state.perjalanan == ''){
        console.warn('Mohon pilih perjalanan anda!');
      }
      else {
        this.setState({isVisible: false})
        this.setState({suksesTambah: true})
        this.setState({nama: ''})
        this.setState({nik: ''})
        this.setState({perjalanan: ''})
      }
    }

    const {navigation}  = this.props

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          {/* Header */}
          <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'} />
          <ImageBackground source={Icons.BGGradient} style={styles.imgBg} resizeMode= 'cover'>
            <Text style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>Data Jamaah</Text>
            <View style={styles.viewHeader}>
              <View style={styles.viewPencarian}>
                <Icons.IcPencarian height={30} width= {30} style={{margin: 5}} />
                <TextInput 
                  value={this.state.cariJamaah}
                  placeholder= 'Telusuri Jamaah'
                  onChangeText={text => this.setState({cariJamaah: text})}
                  keyboardType= 'name-phone-pad'/>
              </View>
              <Icons.IcHistory height={35} width= {35} style={{marginHorizontal: 10}}/>
              <Icons.IcTambahJamaah height={35} width= {35} onPress={() => this.setState({isVisible: true})}/>
            </View>
            {/* Tab View Page */}
            <View style={styles.viewTabPager}>
              <TouchableOpacity 
                style={styles.viewItemTab}
                onPress={() => this.setState({paket: 'Umroh'})}
              >
                <View >
                  <Text style={{color: this.state.paket === 'Umroh' ? '#FFFFFF' : '#A3A3A3', fontSize: 14, fontWeight: '500', textAlign: 'center'}}>Umroh</Text>
                  <View style={{height: 3, backgroundColor: this.state.paket === 'Umroh' ? '#FFBB38' : '#A3A3A3', marginTop: 10}}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.viewItemTab}
                onPress={() => this.setState({paket: 'Haji'})}
              >
                <View >
                  <Text style={{color: this.state.paket === 'Haji' ? '#FFFFFF' : '#A3A3A3', fontSize: 14, fontWeight: '500', textAlign: 'center'}}>Haji</Text>
                  <View style={{height: 3, backgroundColor: this.state.paket === 'Haji' ? '#FFBB38' : '#A3A3A3', marginTop: 10}}/>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>

          {/* List Jamaah */}
          <FlatList 
            data={dataUmroh}
            keyExtractor = {(e, i) => i.toString()}
            style={{
              marginHorizontal: 20,
              marginBottom: 10,
              marginTop: 10
            }}
            renderItem = {({item, index}) => (
              <TouchableOpacity 
                onPress={() => {
                  (item.status === 'Terdaftar' ? this.props.navigation.navigate('DetailJamaah') : console.warn('Jamaah belum mendaftar paket!'))}
                  }>
                <View style={styles.containerItem}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#242424', fontWeight: '600', fontSize: 15}}>{item.nama}</Text>
                    <Text style={{
                        color: '#FFFFFF', 
                        fontSize: 11,
                        borderRadius: 8, 
                        backgroundColor: item.status === 'Terdaftar' ? '#02BE65' : '#EE9545', 
                        paddingHorizontal: 10}}>
                      {item.status}
                    </Text>
                  </View> 
                  <View style={{height: 1, flex: 1, backgroundColor: '#DADADA', marginVertical: 5}}/>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{color: '#02BE65', fontSize: 12}}>{item.paket}</Text>
                    <Text style={{color: '#525252', fontSize: 12}}>ID : {item.id}</Text>
                  </View> 
                </View>      
              </TouchableOpacity>
            )}
          />
        </View>

        {/* popup tambah jamaah */}

        <TouchableWithoutFeedback onPress={() => this.setState({ isVisible: false })}>
          <Modal isVisible={this.state.isVisible}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.containerModal} >
                <Text style={{fontSize: 16, color: '#1e1e1e', fontWeight: '500', textAlign: 'center'}}>Tambah Jamaah</Text>
                <View style={{height: 1, backgroundColor: '#DADADA', marginVertical: 20}} />
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>Nama</Text>
                <TextInput 
                  style={styles.input} 
                  value={this.state.nama}
                  placeholder= 'Nama'
                  onChangeText={text => this.setState({nama: text})}
                  keyboardType= 'name-phone-pad'/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>NIK</Text>
                <TextInput 
                  style={styles.input} 
                  value={this.state.nik}
                  placeholder= 'Nomor Induk Kependudukan'
                  onChangeText={text => this.setState({nik: text})}
                  keyboardType= 'phone-pad'/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>Jenis Perjalanan</Text>
                {/* dropdown */}
                <View style={{marginHorizontal: 20, marginTop: 10}}>
                  <SelectList 
                    setSelected={(val) => this.setState({perjalanan: val})}
                    data={[
                      {key: '1', value: 'Umroh'},
                      {key: '2', value: 'Haji'}
                    ]}
                    boxStyles={{backgroundColor: '#F6F6F6', borderColor: '#DADADA', borderRadius: 7}}
                    placeholder= 'Pilih Jenis Perjalanan'
                  />
                </View>
                {/* chckbx */}
                <View style={styles.checkboxModal}>
                  <Icons.IcCeklis height={30} width= {30}/>
                  <Text style={{fontSize: 12, fontWeight: '300', color: '#828282', marginTop: 10, marginRight: 30}}>
                    Saya memastikan data yang saya masukan sudah sesuai
                  </Text>
                </View>
                {/* button */}
                <TouchableOpacity
                  style={[styles.buttonModal, {backgroundColor: '#FD9812'}]}
                  onPress={() => btnTambahJamaah()}
                >
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 15}}>TAMBAH</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>

        {/* notif sukses tambah */}
        <TouchableWithoutFeedback onPress={() => this.setState({ suksesTambah: false })}>
          <Modal isVisible={this.state.suksesTambah}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
              <View style={[styles.containerModal, {alignItems: 'center'}]} >
                <Icons.IcSuksesOval height={75} width={75} style={{marginTop: -65}}/>
                <Text style={{fontSize: 18, color: '#4A4848', fontWeight: '500', textAlign: 'center', marginHorizontal: 50, marginVertical: 30}}>
                  Calon Jamaah berhasil di tambahkan
                </Text>
                
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>

      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  imgBg: {
    width: panjang,
    alignItems: 'center',
    paddingTop: 50
  }, 
  viewHeader: {
    width: panjang,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  viewPencarian: {
    flex:1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center', 
    elevation: 5
  },
  input: {
      backgroundColor: 'transparent',
      height: 40,
      flex: 1,
  },
  viewTabPager: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewItemTab: {
    flex: 1,
    flexDirection: 'column',
    
  },


  // viewItem
  containerItem: {
    borderRadius: 8,
    borderColor: '#D3D3D3',
    borderWidth: 2,
    flexDirection: 'column',
    padding: 15,
    marginVertical: 8
  },

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

export default JamaahFragment