import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions, StatusBar, ImageBackground, FlatList } from 'react-native'
import React, { Component } from 'react'

import { Icons } from '../../components/Icons';


const {tinggi, panjang}   = Dimensions.get('window');
const data  = [
    {
        ranking: '1',
        nama: 'Maulida',
        total_jamaah: '100'
    },
    {
        ranking: '1',
        nama: 'Dika',
        total_jamaah: '90'
    },
    {
        ranking: '1',
        nama: 'Fulan',
        total_jamaah: '80'
    },
    {
        ranking: '1',
        nama: 'Desi',
        total_jamaah: '70'
    },
    {
        ranking: '1',
        nama: 'Hardi',
        total_jamaah: '60'
    },
    {
        ranking: '1',
        nama: 'Firda',
        total_jamaah: '50'
    },
]

const renderItem = ({item, index}) => {
    return(
        <View key={index} style={styles.itemContainer}>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.titleItem}>Ranking</Text>
                <Text style={styles.valueItem}>{item.ranking}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.titleItem}>Nama</Text>
                <Text style={styles.valueItem}>{item.nama}</Text>
            </View>
            <View style={{flexDirection:'column'}}>
                <Text style={styles.titleItem}>Total Jamaah</Text>
                <Text style={styles.valueItem}>{item.total_jamaah}</Text>
            </View>
        </View>
    )
}

export class RangkingScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  goBack(){
    const {navigation}  = this.props;
    navigation.goBack();
  }

  render() {
    return (
        <View style={styles.container}>            
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <Image source={Icons.BgStatusBar} style= {{width: '100%', height: 40, resizeMode: 'cover'}} />
            {/* Title bar */}
            <View style={styles.viewTitleBar}>
                <Icons.IcBackDark onPress={() => {this.goBack()}}/>
                <Text style={{flex: 1, textAlign: 'center', color: '#1E1E1E', fontWeight: '600', fontSize: 18, marginRight: 25}}>Ranking Mitra</Text>
            </View>
            {/* garis batas */}
            <View style={{height: 1, width: panjang, backgroundColor: '#DADADA'}}/>
            {/* Content */}
            <View style={styles.viewBanner}>
                <Image source={Icons.BgRangking} resizeMode= 'stretch' style={{width: panjang}}/>
                <View style={{position: 'absolute', flex:1, flexDirection: 'row', padding: 25, justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <View style={{flexDirection: 'column', flex: 1}}>
                        <Text style={{color: '#FFFFFF', fontSize: 12,}}>25 Desember 2022</Text>
                        <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 30, marginTop: 15}}>3/26</Text>
                        <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 16}}>Fulana bulan</Text>
                    </View>                                               
                    <Icons.IcPeforma height='70%' width= '20%'/>
                </View>
            </View>
            {/* List Rangking */}
            <Text style={{marginHorizontal: 30, marginVertical: 20, fontSize: 14, fontWeight: '500', color: '#1e1e1e'}}>List Ranking</Text>

            <FlatList
                data={data}
                keyExtractor={(e, i) => i.toString()}
                renderItem={renderItem}
                style={{
                    marginHorizontal: 30,
                    marginBottom: 10,
                }}
            />
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width: panjang
    },

    viewTitleBar: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        padding: 15, 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },

    viewBanner: {
        marginHorizontal: 30, 
        marginTop: 20, 
        height: 150, 
    },

    imagePiala: {
        height: 150,
        width: 200,
        alignItems: 'flex-end'
    },


    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DADADA',
        marginBottom: 15,
        justifyContent: 'space-between',
        alignContent: 'flex-start'
    },

    titleItem: {
        color: '#828282',
        marginBottom: 8,
        fontWeight: '400',
        fontSize: 12
    },

    valueItem: {
        color: '#201f1f',
        fontWeight: '500',
        fontSize: 14
    }
})

export default RangkingScreen