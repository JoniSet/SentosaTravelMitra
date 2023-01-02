import { View, Text, TouchableWithoutFeedback, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import ReactNativeModal from 'react-native-modal'
import {Icons} from '../../../components/Icons'

const DialogViewRekening = ({visible, onPress, bank, rekening, nama, onClick}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <ReactNativeModal isVisible={visible}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                <View style={styles.containerModal} >
                  <Text style={{fontSize: 16, color: '#1e1e1e', fontWeight: '500', textAlign: 'center'}}>Rekening</Text>
                  <View style={{height: 1, backgroundColor: '#DADADA', marginVertical: 20}} />
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.textTitle}>Nama Bank</Text>
                    <Icons.IcEditRekening onPress={onClick} height={20} width={20}/>
                  </View>
                  <Text style={styles.textValue}>{bank}</Text>
                  <Text style={styles.textTitle}>Nomor Rekening</Text>
                  <Text style={styles.textValue}>{rekening}</Text>
                  <Text style={styles.textTitle}>Nama Penerima</Text>
                  <Text style={styles.textValue}>{nama}</Text>
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
      paddingHorizontal: 20,
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

    textTitle: {
      fontSize: 14, 
      fontWeight: '500', 
      color: '#201f1f', 
      marginTop: 5, 
      marginHorizontal: 20
    },

    textValue: {
      fontSize: 18, 
      fontWeight: '400', 
      color: '#FD9812', 
      marginTop: 5, 
      marginHorizontal: 20
    }
  })  

export default DialogViewRekening