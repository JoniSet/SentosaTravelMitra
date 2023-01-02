import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TextInput, Dimensions, StatusBar, SafeAreaView, FlatList, TouchableOpacity, TouchableWithoutFeedback  } from 'react-native'

import { Icons } from '../../components/Icons'
import Modal from 'react-native-modal'
import DialogStatus from './DialogStatus'

const {tinggi, panjang}   = Dimensions.get('window');

const data = [
  {
    id: '1',
    nama: 'Fulana Bulan',
    tanggal: '20-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'PROSES'
  },
  {
    id: '2',
    nama: 'Fulana Bulan',
    tanggal: '21-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'SUKSES'
  },
  {
    id: '3',
    nama: 'Fulana Bulan',
    tanggal: '22-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'GAGAL'
  },
  {
    id: '4',
    nama: 'Fulana Bulan',
    tanggal: '23-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'SUKSES'
  },
  {
    id: '5',
    nama: 'Fulana Bulan',
    tanggal: '24-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'GAGAL'
  },
  {
    id: '6',
    nama: 'Fulana Bulan',
    tanggal: '25-12-2022',
    bank: 'BCA',
    rekening: '000012345678', 
    jumlah: 'Rp 100.000',
    status: 'SUKSES'
  },
]

const renderData = ({item, index}) => {
  return (
    <View style={styles.itemContainer}>
      <View style={{height: 1, backgroundColor: '#DADADA', marginTop: 20, width: panjang}} />
      <View style={{flexDirection: 'row', marginTop: -22}}>
        <View style={{flexDirection: 'column', flex: 1,}}>
          <Text style={{color: '#777777', fontSize: 11, fontWeight: '400'}}>{item.tanggal}</Text>
          <Text style={{color: '#333333', fontSize: 12, fontWeight: '500', marginTop: 8}}>{item.nama}</Text>
          <Text style={{color: '#777777', fontSize: 11, fontWeight: '400'}}>{item.bank} {item.rekening}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={{color: item.status === 'SUKSES' ? '#00CE7B': item.status === 'GAGAL' ? '#FF0000': '#FD9812', 
          fontSize: 12, fontWeight: '500'}}>
            {item.status}
          </Text>
          <Text style={{color: '#FD9812', fontSize: 14, fontWeight: '600', marginTop: 8}}>{item.jumlah}</Text>
        </View>
      </View>
    </View>
  )
}

export class KomisiScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      dialogSukses: false,
      dialogGagal: false,
      nominal: '',
      nominal1: false,
      nominal2: false,
      nominal3: false,
      nominal4: false,
      nominal5: false,
      nominal6: false,
      no_rek: ''
    }
  }

  nominal1Handle = () => {
    this.setState({nominal1: true});
    this.setState({nominal2: false});
    this.setState({nominal3: false});
    this.setState({nominal4: false});
    this.setState({nominal5: false});
    this.setState({nominal6: false});
    console.log(this.state.nominal1)
  }

  nominal2Handle = () => {
    this.setState({nominal2: true});
    this.setState({nominal1: false});
    this.setState({nominal3: false});
    this.setState({nominal4: false});
    this.setState({nominal5: false});
    this.setState({nominal6: false});
    console.log(this.state.nominal1)
  }

  nominal3Handle = () => {
    this.setState({nominal3: true});
    this.setState({nominal2: false});
    this.setState({nominal1: false});
    this.setState({nominal4: false});
    this.setState({nominal5: false});
    this.setState({nominal6: false});
  }

  nominal4Handle = () => {
    this.setState({nominal4: true});
    this.setState({nominal2: false});
    this.setState({nominal3: false});
    this.setState({nominal1: false});
    this.setState({nominal5: false});
    this.setState({nominal6: false});
  }

  nominal5Handle = () => {
    this.setState({nominal5: true});
    this.setState({nominal2: false});
    this.setState({nominal3: false});
    this.setState({nominal1: false});
    this.setState({nominal4: false});
    this.setState({nominal6: false});
  }

  nominal6Handle = () => {
    this.setState({nominal6: true});
    this.setState({nominal2: false});
    this.setState({nominal3: false});
    this.setState({nominal1: false});
    this.setState({nominal4: false});
    this.setState({nominal5: false});
  }
  
  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const {navigation}  = this.props;

    const btnTarikSaldo = () => {
      if(this.state.nominal < 50000){
        console.warn('Minimal penarikan adalah Rp 50.000')
      }
      else {
        this.setState({isVisible: false})
        this.setState({dialogSukses: true})
        this.setState({nominal: ''})
      }
      
    }

    return (
      <SafeAreaView style= {{flex: 1}}>
        <View style= {{flex: 1}}>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
          <Image source={Icons.BGGradient} style={styles.imgBg}/>
          {/* header */}
          <View style={styles.viewTitleBar}>
              <Icons.IcBackLight onPress={() => {this.goBack()}}/>
              <Text style={{flex: 1, textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: 18, marginRight: 25}}>Komisi</Text>
          </View>
          {/* banner */}
          <View style={styles.viewBanner}>
              <Image source={Icons.BgRangking} resizeMode= 'stretch' style={{width: panjang}}/>
              <View style={{position: 'absolute', flex:1, flexDirection: 'row', padding: 25, justifyContent: 'space-between', alignItems: 'flex-end'}}>
                  <View style={{flexDirection: 'column', flex: 1}}>
                      <Text style={{color: '#FFFFFF', fontSize: 16, fontWeight: '600'}}>Fulana Bulan</Text>
                      <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 30, marginVertical: 10}}>Rp 1.000.000</Text>
                      <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 14}}>25 Desember 2022</Text>
                  </View>                                        
              </View>
          </View>
          {/* titleContent */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{marginHorizontal: 30, marginVertical: 20, fontSize: 14, fontWeight: '500', color: '#1e1e1e'}}>Riwayat</Text>
              <View style={{flexDirection: 'row'}} >
                <Icons.IcAgendaHijau style={{marginVertical: 22, marginRight: 5}}/>
                <Text style={{marginRight: 30, marginVertical: 20, fontSize: 14, color: '#00CE7B'}}>25 Desember 2022</Text>
              </View>
          </View>
          <View style={{height:1, backgroundColor:'#DADADA', marginHorizontal: 30, marginBottom: 15}} />
          {/* List Riwayat */}
          <FlatList 
            data={data}
            keyExtractor={(e, i) => i.toString()}
            renderItem={renderData}
            style={{
                marginHorizontal: 30,
            }}
            contentContainerStyle={{paddingBottom: 100}}
            showsVerticalScrollIndicator= {false}
          />
          <View style={styles.viewButton}>
            <TouchableOpacity 
              style={styles.buttonTarikSaldo}
              onPress={() => this.setState({isVisible: true})}
            >
              <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 17}}>Tarik Saldo Komisi</Text>
            </TouchableOpacity>   
          </View>
          
        </View>
        
        <TouchableWithoutFeedback onPress={() => this.setState({ isVisible: false })}>
          <Modal isVisible={this.state.isVisible}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
              <View style={styles.containerModal} >
                <Text style={{fontSize: 16, color: '#333333', fontWeight: '500'}}>Masukkan jumlah nominal</Text>
                <TextInput 
                  style={styles.input} 
                  value={this.state.nominal}
                  placeholder= 'Rp '
                  onChangeText={text => this.setState({nominal: text})}
                  keyboardType= 'phone-pad'/>

                <View style={[styles.buttonModal, {backgroundColor: '#29D88D', alignItems: 'flex-start', paddingStart: 20, marginBottom: 10}]}>
                  <Text style={{color: '#FFFFFF', fontWeight: '500', fontSize: 15}}>Minimal penarikan Rp 50.000</Text>
                </View>

                <View style={styles.viewDaftarNominal}>
                  {/* nominal 50.000 */}
                  <TouchableOpacity 
                    style={[styles.viewNominal, {end: 5, marginStart: 5}]}
                    onPress={() => 
                      {
                        this.setState({nominal: '50000'})
                        this.nominal1Handle()
                      }
                    }
                  >
                    <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>50.000</Text>
                  </TouchableOpacity>
                  {/* nominal 100.000 */}
                  <TouchableOpacity 
                    style={[styles.viewNominal, {end: 5, marginStart: 5}]}
                    onPress={() => 
                      {this.setState({nominal: '100000'})
                      this.nominal2Handle()}
                    }
                  >
                    <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>100.000</Text>
                  </TouchableOpacity>
                  {/* nominal 200.000 */}
                  <TouchableOpacity 
                    style={styles.viewNominal}
                    onPress={() => this.setState({nominal: '200000'})}
                  >
                    <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>200.000</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.viewDaftarNominal}>
                  {/* nominal 500.000 */}
                  <TouchableOpacity 
                    style={[styles.viewNominal, {end: 5, marginStart: 5}]}
                    onPress={() => this.setState({nominal: '500000'})}
                  >
                    <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>500.000</Text>
                </TouchableOpacity>
                {/* nominal 1.000.000 */}
                <TouchableOpacity 
                  style={[styles.viewNominal, {end: 5, marginStart: 5}]}
                  onPress={() => this.setState({nominal: '1000000'})}
                >
                  <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>1.000.000</Text>
                </TouchableOpacity>
                {/* nominal 2.000.000 */}
                <TouchableOpacity 
                  style={styles.viewNominal}
                  onPress={() => this.setState({nominal: '2000000'})}
                >
                  <Text style={{color: '#29D88D', fontWeight: '500', fontSize: 12}}>2.000.000</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={[styles.buttonModal, {backgroundColor: '#FD9812'}]}
                  onPress={() => btnTarikSaldo()}
                >
                  <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 15}}>TARIK SALDO</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>

        <DialogStatus
          muncul={this.state.dialogSukses}
          onPress={() => this.setState({dialogSukses: false})}
          message= {this.state.no_rek === '' ? 'Anda belum mengisi form rekening pada halaman profil' : 'Penarikan saldo telah berhasil dilakukan'}
          type= {this.state.no_rek === '' ? Icons.IcSuksesOval : Icons.IcErrorOval}
        />
        
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  imgBg: {
    height: '21%',
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
  viewBanner: {
      marginHorizontal: 30, 
      marginTop: -70, 
      height: 150, 
  },

  itemContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#DADADA',
    marginBottom: 10,
  },

  buttonTarikSaldo: {
    backgroundColor: '#29D88D',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    marginHorizontal: 40,
    marginVertical: 20
  },

  viewButton: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    
  }, 


  containerModal: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    padding: 20,
    width: '100%'
  },

  buttonModal: {
    borderRadius: 7,
    height: 50,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 20
  },

  input: {
      backgroundColor: '#F6F6F6',
      width: '100%',
      height: 45,
      borderColor: '#DFDFDF',
      borderWidth: 1,
      paddingHorizontal: 10,
      paddingVertical: 3,
      marginTop: 10,
      borderRadius: 5
  },

  viewDaftarNominal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 

  viewNominal: {
    borderRadius: 5,
    borderWidth: 1, 
    borderColor: '#29D88D',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 10
  }
})

export default KomisiScreen
