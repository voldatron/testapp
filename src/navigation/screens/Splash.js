import React,{useEffect} from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import test from '../../assets/illustration/logo.png'

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Awal');
    }, 3000)
  }, [] )
  return (
    <View style={styles.page}>
      <Image source={test}/>
      <Text style={styles.title}>Klinik drg.Adi Budiman</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  page: {
      backgroundColor: 'white', flex: 1, alignItems: 'center', justifyContent: 'center',
  },
  title: {
      fontSize: 20, fontWeight: '600', color:'#0F3F63', marginTop: 1,
  }
})
export default Splash