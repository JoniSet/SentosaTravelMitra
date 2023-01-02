import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import React from 'react'
import Icon2, { Icons } from '../../components/Icons'
import ReactNativeModal from 'react-native-modal'

const DialogStatus = ({muncul, onPress, message, type}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
        <ReactNativeModal isVisible={muncul}>
            <View style={{flex: 1, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center'}}>
                <View style={[styles.containerModal, {alignItems: 'center'}]} >
                    {/* <Icons.IcSuksesOval height={75} width={75} style={{marginTop: -65}}/> */}
                    <Icon2 type={type} name={'status'} style={{height: 75, width: 75, marginTop: -65}}/>
                    <Text style={{fontSize: 18, color: '#4A4848', fontWeight: '500', textAlign: 'center', marginHorizontal: 50, marginVertical: 30}}>
                        {message}
                    </Text>            
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

export default DialogStatus