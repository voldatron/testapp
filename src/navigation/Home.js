import React from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity, Image
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/atoms/header'
import antrian from '../assets/illustration/antrian.png';
import tabel from'../assets/illustration/tabel.png';
import dokterlist from'../assets/illustration/dentist.png';
import dentist from'../assets/illustration/patient.png';


const Stack = createStackNavigator();
const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      {/* */}
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('antrian')} style={styles.antrian}>
        <Image source={antrian}/> 
        <Text>Buat Janji</Text>
        </TouchableOpacity>
        <View>
        <TouchableOpacity onPress={() => navigation.navigate('antrian')} style={styles.antrian}>
        <Image source={antrian}/> 
        <Text>Batal Janji</Text>
        </TouchableOpacity>
        </View>
      
         {/* Doctor lists */}
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('tabel')} style={styles.antrian}>
        <Image source={tabel}/> 
        <Text>Tabel Antrian</Text>
        </TouchableOpacity>
         </View>

         {/* Doctor lists */}
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('profiledoc')} style={styles.antrian}>
        <Image source={dokterlist}/> 
        <Text>List Dokter</Text>
        </TouchableOpacity>
         </View>

         {/* Doctor Role */}
         <View>
          <Text>-----------------------Dokter-----------------------</Text>
         </View>
         <View>
         <TouchableOpacity onPress={() => navigation.navigate('antrian')} style={styles.antrian}>
        <Image source={dentist}/> 
        <Text>Rekam medis</Text>
        </TouchableOpacity>
         </View>

        </View>
        </ScrollView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  textSecondary: {
    fontSize: 12,
    color: 'gray',
  },
  activeCase: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    lineHeight: 20,
    borderColor: 'gray',
  },
  boxCase: {
    marginVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  doctorTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallText: {
    fontSize: 12,
  },
  headingText: {
    fontSize: 16,
  },
  antrian: { 
    marginTop : 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});


export default Home;