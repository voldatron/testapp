import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Avatar } from "@rneui/themed";
import { AntDesign } from '@expo/vector-icons';

const Profile1 = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <View style={styles.wrap1}>
      <TouchableOpacity style={styles.arrow1} onPress={() => navigation.navigate('home')}>
      <AntDesign name="left" size={24} color="white" />
      </TouchableOpacity>
      </View>
      <Avatar
        size={430}
        containerStyle={{height:430,width:430}}
        source={{
          uri:'https://images.unsplash.com/photo-1643961299207-bbdac9c02c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
        }}
        
        />
      <View>
      <Text style={styles.test1}>Drg.Adam Kharisma</Text>
      <Text style={styles.test2}>Pendidikan</Text>
      <Text style={styles.title}>Drg. Adam Kharisma adalah dokter gigi lulus dari Fakultas Kedokteran Gigi, Universitas Indonesia tahun 2009.
        Beliau aktif mengikuti berbagai pelatihan dan kongres tingkat nasional seperti East Jakarta Destistry (2016), 
        Hands-On: Important Role of Color Modifier to Mask Tertracycline Stained to Create Natural  Teeth with Direct Veener Restoration (2016), Current Clinical Practice Guidelines (2016), Hands On Keunggulan True Nano Komposit (2016).</Text>
      <Text style={styles.test2}>Jadwal praktek</Text>
      <Text style={styles.title}>Senin
      (15:00-17:00)
      Kamis
      (08:00-11:00)</Text>
      </View>
    </ScrollView>
   
  )
}
const styles = StyleSheet.create({
  page: {
      backgroundColor: '#0F3F63', flex: 1
  },
  test1: {
    fontSize: 25, fontWeight: '600', color:'white', marginTop: 1, textAlign:'center',
},
test2: {
  fontSize: 18, fontWeight: '600', color:'white', marginTop: 5,
},
arrow1:
  { marginRight: 340, paddingVertical: 5
  },
  wrap1:
  {  marginTop: 30, padding: 20, backgroundColor: '#0F3F63'
  },
  title: {
      fontSize: 14, fontWeight: '300', color:'white', marginTop: 1,
  }
})
export default Profile1