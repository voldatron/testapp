import React from 'react';
import {
  View, StyleSheet, StatusBar, Text,
} from 'react-native';
import { Avatar } from '@rneui/themed';

export default function Header({ name, profileUrl, userType }) {
    const RandomColor = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF);
        const color = `#${hex.toString(16)}`;
      
        return color;
      };
  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        {profileUrl ? (
          <Avatar
            source={{ uri: 'https://images.unsplash.com/photo-1643961298707-0a7787256b3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }}
            rounded
            containerStyle={{ justifyContent: 'center' }}
            size={49}
          />
        ) : (
          <Avatar
            rounded
            title='Ire'
            overlayContainerStyle={{ backgroundColor: RandomColor() }}
            titleStyle={{ color: '#fff' }}
            size={49}
          />
        )}
      </View>
      <View>
        <Text style={styles.headerTextName}>Nama User</Text>
        <Text>Role User</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: StatusBar.currentHeight,
    height: 70,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 20,
  },
  headerTextName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    marginVertical: 1,
  },
});