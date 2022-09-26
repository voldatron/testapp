import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Image } from 'react-native';
import test from '../../assets/illustration/logo.png'
import {  Input } from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={styles.wrap}>
     <View style={styles.wrap1}>
     <Image source={test}/>
      <Text style={styles.title}>Klinik drg.Adi Budiman</Text>
      </View>
      <View style={styles.wrap2}>
        <Text style={styles.teks1}>Login</Text>
        <Text style={styles.teks2}>Harap login untuk lanjut</Text>
      </View>
      <View style={styles.wrap4}>
        <Input label='Email Adress'/>
        <Input label='Password' secureTextEntry={true} />
      </View>
      <View style={styles.wrap3}>
      <TouchableOpacity onPress={() => navigation.navigate('home')} style={styles.buttonpertama}>
        <Text style={styles.buttonteks}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('daftar')}>
      <Text style={styles.textt}>Daftar Sekarang</Text>
      </TouchableOpacity>
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  wrap:
  { backgroundColor: 'white', flex:1
  },
  wrap1:
  { alignItems:'center', marginTop: 30,
  },
  wrap2:
  { marginTop: 57, marginLeft: 40,
  },
  wrap3:
  { marginTop: 30, marginHorizontal: 60.
  },
  wrap4:
  { marginTop: 30
  },
  title: {
  fontSize: 24, fontWeight: '600', color:'#0F3F63', marginTop: 5,
  },
  teks1: {
    fontSize: 20, fontWeight: '600', color:'#0F3F63',
    },
  teks2: {
    fontSize: 14, fontWeight: '600', color:'#0F3F63', marginTop: 5,
  },
  buttonpertama: {
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#0F3F63',
    marginVertical: 20,
  },
  buttonteks: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  textt: {
    fontSize: 14,
    color: 'black',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 5,
  },

})
export default Login