import React from 'react';
import { TextInput, View, Text } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
 const { inputStyle, containerStyle, labelStyle } = styles;

return (
  <View style={containerStyle}>
    <Text style={labelStyle}>{label}</Text>
    <TextInput
    secureTextEntry={secureTextEntry}
    placeholder={placeholder}
    style={inputStyle}
     value={value}
     onChangeText={onChangeText}
    />
  </View>
  );
};
  const styles = {
     inputStyle: {
       color: '#000',
       fontSize: 18,
       lineHeight: 23,
       paddingLeft: 5,
       paddingRight: 5,
       paddingHorizontal: 10,
       flex: 2.20
     },
     labelStyle: {
       paddingLeft: 20,
       fontSize: 18,
       fontWeiht: 300,
       flex: 0.80
     },
     containerStyle: {
       height: 40,
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center'
     }
  };

export { Input };
