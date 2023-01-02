import React, { Component } from 'react'
import { Dimensions, SafeAreaView, StatusBar, Text, View, Image, StyleSheet, ScrollView } from 'react-native'

import { Icons } from '../../components/Icons'

const {tinggi, panjang}   = Dimensions.get('window');

export class FAQScreen extends Component {
  render() {
    const {navigation}      = this.props
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
            <Image source={Icons.BgStatusBar} style= {{width: '100%', height: 40, resizeMode: 'cover'}} />
            {/* Title bar */}
            <View style={styles.viewTitleBar}>
                <Icons.IcBackDark onPress={() => {navigation.goBack()}}/>
                <Text style={styles.TextTitleBar}>Syarat & Ketentuan</Text>
            </View>

            <ScrollView>
                <Text style={styles.TextJudul}>SYARAT DAN KETENTUAN LAYANAN PROGRAM HAJI & UMROH BUANA SENTOSA UTAMA</Text>
                <Text style={styles.TextHal}>A. Definisi</Text>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>1. </Text> 
                    <Text style={styles.textIsi}>Buana sentosa utama merupakan perusahaan yang terfokus pada layanan travel Haji & Umroh.</Text> 
                </View>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>2. </Text> 
                    <Text style={styles.textIsi}>Bank Mandiri Syariah adalah merupakan penyedia layanan perbankan yang resmi di awasi oleh otoritas jasa keuangan (OJK) indonesia.</Text> 
                </View>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>3. </Text> 
                    <Text style={styles.textIsi}>Produk Haji & Umroh adalah produk dari Buana Sentosa Utama yang di maksud adalah dalam produk ini semua aspek dari perencanaan keuangan, proses realisasi rencana keuangan hingga pada pelayanan perjalanan umroh yang menyeluruh.</Text> 
                </View>

                <Text style={styles.TextHal}>B. Ketentuan Program Perencananaan Dan Umrah Dan Haji</Text>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>1. </Text> 
                    <Text style={styles.textIsi}>Buana sentosa utama merupakan perusahaan yang terfokus pada layanan travel Haji & Umroh.</Text> 
                </View>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>2. </Text> 
                    <Text style={styles.textIsi}>Bank Mandiri Syariah adalah merupakan penyedia layanan perbankan yang resmi di awasi oleh otoritas jasa keuangan (OJK) indonesia.</Text> 
                </View>
                <View style={styles.viewIsi}>
                    <Text style={styles.textIsi}>3. </Text> 
                    <Text style={styles.textIsi}>Produk Haji & Umroh adalah produk dari Buana Sentosa Utama yang di maksud adalah dalam produk ini semua aspek dari perencanaan keuangan, proses realisasi rencana keuangan hingga pada pelayanan perjalanan umroh yang menyeluruh.</Text> 
                </View>
            </ScrollView>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    viewTitleBar: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        padding: 15, 
        alignItems: 'center', 
        justifyContent: 'space-evenly'
    },
    TextTitleBar: {
        flex: 1, 
        textAlign: 'center', 
        color: '#1E1E1E', 
        fontWeight: '600', 
        fontSize: 18, 
        marginRight: 25
    },
    TextJudul: {
        textAlign: 'center', 
        color: '#201f1f', 
        fontWeight: '700', 
        fontSize: 16, 
        marginHorizontal: 30,
        marginVertical: 10
    },
    TextHal: {
        color: '#201f1f', 
        fontWeight: '700', 
        fontSize: 16, 
        marginHorizontal: 30,
        marginVertical: 10
    },
    viewIsi: {
        flexDirection: 'row',
        marginLeft: 40,
        marginRight: 20
    },
    textIsi: {
        color: '#201f1f', 
        fontWeight: '400', 
        fontSize: 14, 
    }
})

export default FAQScreen
