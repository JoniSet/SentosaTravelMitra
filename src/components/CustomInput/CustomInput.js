import { Text, View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({value, stateValue, placeholder, title, secureTextEntry, type}) => {
  return (
    <View style= {styles.container}>
        <Text style= {styles.textTitle}>{title}</Text>
        <View style= {styles.input}>
            <TextInput 
                value= {value}
                onChangetext= {stateValue}
                placeholder= {placeholder}
                secureTextEntry= {secureTextEntry}
                keyboardType= {type}
            />
        </View>
    </View>
  );
};

const styles = StyleSheet.create ({
    container: {
        width: '100%',
    },

    input: {
        backgroundColor: '#F6F6F6',
        width: '100%',
        height: 45,
        borderColor: '#DFDFDF',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginVertical: 10,
        borderRadius: 5
    },

    textTitle: {
        marginHorizontal: 5,
        color: '#201F1F',
        // fontWeight: 'bold'
    }
})

export default CustomInput
// import React from 'react';
// import { Text, View, TextInput, StyleSheet } from 'react-native';

// const componentName = ({value, stateValue, placeholder, title}) => (
//     <View style= {styles.container}>
//         <Text style= {styles.textTitle}>{title}</Text>
//         <View style= {styles.input}>
//             <TextInput 
//                 value= {value}
//                 onChangetext= {stateValue}
//                 placeholder= {placeholder}
//             />
//         </View>
//     </View>
// );

// const styles = StyleSheet.create ({
//     container: {
//         width: '100%',
//     },

//     input: {
//         backgroundColor: '#F6F6F6',
//         width: '100%',
//         height: 45,
//         borderColor: '#DFDFDF',
//         borderWidth: 1,
//         paddingHorizontal: 10,
//         paddingVertical: 3,
//         marginVertical: 10,
//         borderRadius: 5
//     },

//     textTitle: {
//         marginTop: 50,
//         marginHorizontal: 5,
//         color: '#201F1F',
//         // fontWeight: 'bold'
//     }
// })

// export default componentName;
