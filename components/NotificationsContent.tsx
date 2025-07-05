import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View } from './Themed';

const DARK = '#181818';
const PURPLE = '#A259FF';

export default function NotificationsContentInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <View style={styles.iconCircle}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/9068/9068679.png',
            }}
            style={styles.bellIcon}
          />
        </View>
        <Text style={styles.title}>Nothing yet, but stay tuned</Text>
        <Text style={styles.subtitle}>
          You'll get group updates, event reminders, {'\n'}and new recommendations here.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  centerContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#232323',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  bellIcon: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  title: {
    color: PURPLE,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    color: PURPLE,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
  },
});
