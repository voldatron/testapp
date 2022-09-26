import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';


export default function DoctorProfileCard({
  profileUrl, name, job, showStar = true,
}) {
    const RandomColor = () => {
        const hex = Math.floor(Math.random() * 0xFFFFFF);
        const color = `#${hex.toString(16)}`;
      
        return color;
      };
  return (
    <View style={styles.profileContainer}>
      <View style={styles.profileBody}>
        <View style={styles.avatarContainer}>
          {profileUrl ? (
            <Avatar
              size={50}
              rounded
              source={{ uri: '' }}
            />
          ) : (
            <Avatar
              size={50}
              rounded
              title={name[0]}
              overlayContainerStyle={{ backgroundColor: RandomColor() }}
              titleStyle={{ color: '#fff' }}
            />
          )}
        </View>
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.smallTextGray}>{job}</Text>
        </View>
      </View>
      {showStar ? (
        <View style={styles.starContainer}>
          <Ionicons name="star" size={17} color="#cbde00" />
          <Ionicons name="star" size={17} color="#cbde00" />
          <Ionicons name="star" size={17} color="#cbde00" />
          <Ionicons name="star" size={17} color="#cbde00" />
          <Ionicons name="star" size={17} color="#cbde00" />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    paddingVertical: 1,
  },
  profileBody: {
    flexDirection: 'row',
  },
  avatarContainer: {
    marginRight: 20,
  },
  starContainer: {
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  smallTextGray: {
    color: 'gray',
    fontSize: 10,
    fontWeight: '400',
  },
});
