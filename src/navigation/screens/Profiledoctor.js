import React from 'react';
import { View, StyleSheet, Text,SafeAreaView,TouchableOpacity, Image } from 'react-native';
import test from '../../assets/illustration/logo.png'
import { Avatar } from '@rneui/themed';
import { AntDesign } from '@expo/vector-icons';


const Profiledoc = ({navigation}) => {
  return (
    <SafeAreaView style={styles.wrap}>
    <View>
     <View style={styles.wrap1}>
      <TouchableOpacity style={styles.arrow1} onPress={() => navigation.navigate('home')}>
      <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      <Image source={test}/>
      <Text style={styles.title}>Klinik drg.Adi Budiman</Text>
      </View>
      <View style={styles.wrap2}>
        <Text style={styles.teks1}>Profile Dokter</Text>
      </View>
        <View >
          <TouchableOpacity style={styles.wrap3}  onPress={() => navigation.navigate('profile1')}>
          <Avatar
        size={110}
        rounded
        containerStyle={{height:100,width:100}}
        source={{
          uri:'https://images.unsplash.com/photo-1643961299207-bbdac9c02c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
        }}
        />
        <Text style={styles.teksava}>Drg.Reza Budi</Text>
        <AntDesign name="right" size={24} color="#0F3F63" style={styles.arrow2}/>
        </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.wrap3}  onPress={() => alert("onPress")}>
          <Avatar
        size={110}
        rounded
        containerStyle={{height:100,width:100}}
        source={{
          uri:'https://images.unsplash.com/photo-1643961299207-bbdac9c02c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
        }}
        />
        <Text style={styles.teksava}>Drg.Reza Budi</Text>
        <AntDesign name="right" size={24} color="#0F3F63" style={styles.arrow2}/>
        </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.wrap3}  onPress={() => alert("onPress")}>
          <Avatar
        size={110}
        rounded
        containerStyle={{height:100,width:100}}
        source={{
          uri:'https://images.unsplash.com/photo-1643961299207-bbdac9c02c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
        }}
        />
        <Text style={styles.teksava}>Drg.Reza Budi</Text>
        <AntDesign name="right" size={24} color="#0F3F63" style={styles.arrow2}/>
        </TouchableOpacity>
        </View>
    </View>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  wrap:
  { backgroundColor: 'white', flex: 1, padding: 10
  },
  wrap1:
  { alignItems:'center', marginTop: 30, padding: 10 , backgroundColor: '#0F3F63'
  },
  wrap2:
  { marginTop: 37, marginLeft: 20, backgroundColor:'white'
  },
  wrap3:
  { marginTop: 27, marginLeft: 20, backgroundColor:'rgba(128,128,128, 0.40)', flexDirection:'row', display: 'flex', alignItems:'center'
  },
  arrow1:
  { marginRight: 340, paddingVertical: 5
  },
  arrow2:
  { marginLeft: 120, paddingVertical: 5
  },
  title: {
  fontSize: 24, fontWeight: '600', color:'white', marginTop: 5,
  },
  teks1: {
    fontSize: 20, fontWeight: '600', color:'#0F3F63',
    },
  teks2: {
    fontSize: 14, fontWeight: '600', color:'#0F3F63', marginTop: 5,
  },
  teksava: {
    flexDirection: "row", fontSize: 14, fontWeight: '600', color:'#0F3F63', alignItems:'center', marginLeft: 10,
  }

})
export default Profiledoc