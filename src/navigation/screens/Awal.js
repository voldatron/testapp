import React from 'react';
import { View, StyleSheet, Text, ImageBackground,TouchableOpacity,Image } from 'react-native';
import test from '../../assets/illustration/logo.png'
import bg from'../../assets/illustration/background.png';

const Awal = ({navigation}) => {
  return (
    <ImageBackground source={bg}  style={styles.imageBackground}>
    <View style={styles.innerContainer}>
    <View>
      <Image source={test}/>
      <Text style={styles.title}>Klinik drg.Adi Budiman</Text>
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.buttonpertama}>
        <Text style={styles.buttonteks}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
    
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(128,128,128, 0.40)',
    padding: 40,

    justifyContent: 'space-between',
  },
  title: {
      fontSize: 20, fontWeight: '600', color:'#0F3F63', marginTop: 1,
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
  }
})
export default Awal