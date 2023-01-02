import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Back from '../assets/images/ic_back_dark.svg';
import ButtonLogin from '../components/CustomButton/ButtonLogin';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

class OTP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOtp1: '',
      textOtp2: '',
      textOtp3: '',
      textOtp4: '',
      textOtp5: '',
      textOtp6: '',
      cd: 30,
      noWa: this.props.noWa,
      navigation: ''
    };
  }
  
  handleOtp1=(text)=>{
    this.setState({textOtp1:text});
  }
  handleOtp2=(text)=>{
    this.setState({textOtp2:text});
  }
  handleOtp3=(text)=>{
    this.setState({textOtp3:text});
  }
  handleOtp4=(text)=>{
    this.setState({textOtp4:text});
  }
  handleOtp5=(text)=>{
    this.setState({textOtp5:text});
  }
  handleOtp6=(text)=>{
    this.setState({textOtp6:text});
  }

  startTimer = () => {
    this.timer = setInterval(() => {this.tick()}, 1000)
  }

  tick = () => {
    let time  = this.state.cd;
    time -= 1;
    this.setState({cd: time});

    if(time <= 0 ){
      clearInterval(this.timer)
      time = '';
      this.setState({cd: time});
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() { 
    this.startTimer()
  }

    goBack() {
      const { navigation } = this.props;
      navigation.goBack();
    }

  render() {

    const {navigation}  = this.props;
   
    const onKirimPressed = () => {
      // this.state.navigation  = useNavigation();
      let otp   = this.state.textOtp1 + this.state.textOtp2 + this.state.textOtp3 + this.state.textOtp4 + this.state.textOtp5 + this.state.textOtp6;
      if (otp != '123456'){
        console.error('OTP Salah')
      }
      else{
        navigation.navigate('HomeScreen');
      }
    }

    const kirimUlangOtp = () => {
      if(this.state.cd < 1){
        this.startTimer(this.setState({cd: 30}))
      }
    }

    return (
      <View style={styles.container}>
        <View width= '100%' style={styles.back}>
            <Back 
                width='20' 
                height='18'
                onPress={() => this.goBack()}
            />
        </View>
        <View style={styles.parent}>
            <Text style={styles.txtTitle}>OTP Verification</Text>
            <Text style={styles.txtBody}>Kode OTP telah dikirimkan ke nomor Whatsapp {this.state.noWa}</Text>
            <Text style={styles.txtBody}>Pastikan Whatsapp Anda aktif untuk menerima kode OTP dari sistem</Text>
            <Text style={styles.textTebal}>Masukkan Kode OTP</Text>
            <View style= {styles.viewOtp}>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad'
                        maxLength={1}
                        ref={(input) => { this.otp1 = input; }} 
                        onChangeText={(text) => {
                            this.handleOtp1(text)
                            text && this.otp2.focus() 
                        }}
                        value={this.state.textOtp1}/>
                </View>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad' 
                        maxLength={1} 
                        ref={(input) => { this.otp2 = input; }} 
                        onChangeText={(text) => {
                            this.handleOtp2(text)
                            text ? this.otp3.focus() : this.otp1.focus()
                        }}
                        value={this.state.textOtp2}/>
                </View>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad' 
                        maxLength={1} 
                        ref={(input) => { this.otp3 = input; }} 
                        onChangeText={(text) => {
                            this.handleOtp3(text)
                            text ? this.otp4.focus() : this.otp2.focus()
                        }}
                        value={this.state.textOtp3}/>
                </View>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad' 
                        maxLength={1} 
                        ref={(input) => { this.otp4 = input; }} 
                        onChangeText={(text) => {
                            this.handleOtp4(text)
                            text ? this.otp5.focus() : this.otp3.focus()
                        }}
                        value={this.state.textOtp4}/>
                </View>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad' 
                        maxLength={1} 
                        ref={(input) => { this.otp5 = input; }} 
                        onChangeText={(text) => {
                            this.handleOtp5(text)
                            text ? this.otp6.focus() : this.otp4.focus()
                        }}
                        value={this.state.textOtp5}/>
                </View>
                <View style= {styles.inputOtp}>
                    <TextInput 
                        style={styles.txtOtp} 
                        keyboardType= 'phone-pad' 
                        maxLength={1} 
                        ref={(input) => { this.otp6 = input; }}
                        onChangeText={(text) => {
                          this.handleOtp6(text)
                            !text && this.otp5.focus()
                        }}
                        value={this.state.textOtp6}/>
                </View>
            </View>
            <View style={styles.gravityCenter}>
              <Text 
                style={styles.textTebal2}
                onPress= {kirimUlangOtp}
              >Kirim ulang kode OTP   {this.state.cd}
              </Text>                
            </View>
        </View>
        <ButtonLogin text={'KIRIM'} onPress= {onKirimPressed}/>
    </View>
    );
  }
}

const styles= StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
        height: '100%',
        width: '100%'
    },

    parent: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 100
    },

    txtTitle: {
        color: '#1E1E1E',
        fontWeight: '500',
        fontSize: 24
    },

    txtBody: {
        color: '#1E1E1E',
        fontWeight: '400',
        fontSize: 16,
        marginTop: 20,
        marginRight: '20%'
    },

    textTebal: {
        color: '#1E1E1E',
        fontWeight: '700',
        fontSize: 17,
        marginTop: 20
    },
    
    textTebal2: {
        color: '#1E1E1E',
        fontWeight: '600',
        fontSize: 16,
        marginTop: 20,
        textAlign: 'center'
    },

    gravityCenter: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    viewOtp: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginVertical: 20
    },

    txtOtp: {
        fontSize: 16,
        fontWeight: '500',
        color: '#1E1E1E',
        textAlign: 'center',
        paddingHorizontal: 15
    },

    inputOtp: {
        borderRadius: 5,
        backgroundColor: '#DFDFDF',
        elevation: 5,
    }
})

export default OTP;
