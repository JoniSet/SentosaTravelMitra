import { View, Text, TouchableWithoutFeedback, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import {Icons} from '../../../components/Icons'

const DialogRekening = ({visible, onPress, bank, setBank, rekening, set_rek, nama, setNama, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <ReactNativeModal isVisible={visible}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.containerModal} >
                <Text style={{fontSize: 16, color: '#1e1e1e', fontWeight: '500', textAlign: 'center'}}>Tambah Rekening</Text>
                <View style={{height: 1, backgroundColor: '#DADADA', marginVertical: 20}} />
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>Nama Bank</Text>
                <TextInput 
                    style={styles.input} 
                    value={bank}
                    placeholder= 'Nama Bank'
                    onChangeText={setBank}
                    keyboardType= 'name-phone-pad'/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>Nomor Rekening</Text>
                <TextInput 
                    style={styles.input} 
                    value={rekening}
                    placeholder= 'Nomor Rekening'
                    onChangeText={set_rek}
                    keyboardType= 'phone-pad'/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5, marginHorizontal: 20}}>Nama Penerima</Text>
                <TextInput 
                    style={styles.input} 
                    value={nama}
                    placeholder= 'Nama Penerima'
                    onChangeText={setNama}
                    keyboardType= 'name-phone-pad'/>
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
                    onPress={onClick}
                >
                    <Text style={{color: '#FFFFFF', fontWeight: '700', fontSize: 15}}>SIMPAN</Text>
                </TouchableOpacity>
                </View>
            </View>
        </ReactNativeModal>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create ({  
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

export default DialogRekening