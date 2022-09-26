import React from 'react';
import { View, StyleSheet, Text,TouchableOpacity, Image } from 'react-native';
import test from '../../assets/illustration/logo.png'
import {  Input } from '../../components'

const Daftar = () => {
  return (
    <View style={styles.wrap}>
     <View style={styles.wrap1}>
     <Image source={test}/>
      <Text style={styles.title}>Klinik drg.Adi Budiman</Text>
      </View>
      <View style={styles.wrap2}>
        <Text style={styles.teks1}>Daftar Akun</Text>
      </View>
      <View style={styles.wrap4}>
        <Input label='Email Adress'/>
        <Input label='Password'/>
        <Input label='Nama Lengkap'/>
        <Input label='Jenis Kelamin'/>
      </View>
      <View style={styles.wrap3}>
      <TouchableOpacity onPress={() => alert('Hello, world!')} style={styles.buttonpertama}>
        <Text style={styles.buttonteks}>Sign Up</Text>
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
  { marginTop: 17, marginLeft: 20,
  },
  wrap3:
  { marginTop: 20, marginHorizontal: 60.
  },
  wrap4:
  { marginTop: 10
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

})
export default Daftar