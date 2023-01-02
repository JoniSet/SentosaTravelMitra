import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Dimensions, SafeAreaView, Image, ScrollView, FlatList } from 'react-native'

import Icon2, { Icons } from '../../components/Icons'

const {tinggi, panjang}   = Dimensions.get('window');

const dataKontak = [
    {
        id: '1',
        jenis: 'Telepon',
        nomor: '027-7865-231'
    },
    {
        id: '2',
        jenis: 'Jogja',
        nomor: '0851654646546'
    },
    {
        id: '3',
        jenis: 'Lombok',
        nomor: '0815456545678'
    },
    {
        id: '4',
        jenis: 'Jakarta',
        nomor: '0876541641656'
    },
];

const renderData = ({item, index}) =>{
    const type  = item.jenis == 'Telepon' ? Icons.IcTelepon : Icons.IcWa;
    return(
        <View style={styles.itemContainer}>
            {/* <Icons.IcTelepon height= '30' width= '30' /> */}
            <Icon2 type={type} name={'Wa'} style={{height: 50, width: 50}}/>
            <View style={{flexDirection: 'column', flex: 1, marginLeft: 15}}>
                <Text>{item.jenis}</Text>
                <Text>{item.nomor}</Text>
            </View>
            <Text style={styles.textHubungi}>Hubungi</Text>
        </View>
    )
}

export class LayananPelangganScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render() {
    const {navigation}      = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <Image source={Icons.BGGradient} style={styles.imgBg}/>
            {/* header */}
            <View style={styles.viewTitleBar}>
                <Icons.IcBackLight onPress={() => {navigation.goBack()}}/>
                <Text style={{flex: 1, textAlign: 'center', color: '#FFFFFF', fontWeight: '600', fontSize: 18, marginRight: 25}}>Layanan</Text>
            </View>
            <View style={styles.viewHeader}>
                <Image source={Icons.IcLayananCs} style={{height: 100, width: 100, resizeMode: 'contain'}} />
                <View style={styles.viewTextHeader}>
                    <Text style={{color: '#FFFFFF', fontWeight: '600', fontSize: 15, marginBottom: 5}}>Ada yang ingin di tanyakan? Silahkan hubungi kami</Text>
                    <Text style={{color: '#828282', fontWeight: '400', fontSize: 10}}>Customer service siap membantu 24 jam dalam menangani masalah anda</Text>
                </View>
            </View>
            <View style={{width: '100%', height: 10, backgroundColor: '#DADADA', marginVertical: 10}} />
                    
            <ScrollView style={{flex: 1,}} nestedScrollEnabled={true}>
                {/* KOntak */}
                <View style={styles.viewKontak}>
                    <Text style={styles.textHubungi}>Hubungi</Text>
                    <FlatList
                        data={dataKontak}
                        renderItem={renderData}
                        keyExtractor={(e, i) => i.toString()}
                        style= {{marginTop: 15}}
                        scrollEnabled= {false}/>
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create ({
  imgBg: {
    height: 170,
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
  viewHeader: {
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: -45
  },
  viewTextHeader: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', 
    marginBottom: 20,
    marginLeft: 10
  },

  viewKontak: {
    marginHorizontal: 30,
    marginVertical: 10
  },    

  textHubungi: {
    color: '#201F1F',
    fontWeight: '600',
    fontSize: 14
  },


  itemContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems:'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    marginBottom: 10,
    flexDirection: 'row'
  },
})

export default LayananPelangganScreen
