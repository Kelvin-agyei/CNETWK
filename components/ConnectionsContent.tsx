import React from 'react';
import { StyleSheet, Image, View as RNView, ScrollView } from 'react-native';
import { Text, View } from './Themed';

const PURPLE = '#A259FF';
const BLACK = '#000';

export default function ConnectionsContentInfo() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: BLACK }} contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        {/* Top Card */}
        <View style={styles.topCard}>
          <RNView style={styles.avatarRow}>
            <Image source={require('../assets/images/icon.png')} style={styles.avatar} />
            <Image source={require('../assets/images/adaptive-icon.png')} style={styles.avatarSmall} />
            <Image source={require('../assets/images/favicon.png')} style={styles.avatarSmall} />
            <Image source={require('../assets/images/splash-icon.png')} style={styles.avatarSmall} />
          </RNView>
          <Text style={styles.title}>Meet new{"\n"}connections at{"\n"}your next event</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Explore events</Text>
          </View>
        </View>

        {/* Divider Dot */}
        <View style={styles.dot} />

        {/* Illustration */}
        <Image source={require('../assets/images/CNETWK.png')} style={styles.illustration} resizeMode="contain" />

        {/* No Connections Message */}
        <Text style={styles.noConnectionsTitle}>You don't have any connections yet</Text>
        <Text style={styles.noConnectionsSubtitle}>After connections are made they will appear here</Text>

        {/* How to make a connection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How to make a connection</Text>
          <View style={styles.stepRow}><Text style={styles.stepNum}>1</Text><Text style={styles.stepText}>Attend an event</Text></View>
          <View style={styles.stepRow}><Text style={styles.stepNum}>2</Text><Text style={styles.stepText}>Open the Meetup app</Text></View>
          <View style={styles.stepRow}><Text style={styles.stepNum}>3</Text><Text style={styles.stepText}>Choose connections up to 24 hours after the event</Text></View>
        </View>

        {/* Learn how connections work */}
        <View style={styles.learnBox}>
          <Text style={styles.learnTitle}>Learn how connections work</Text>
          <View style={styles.learnCard}>
            <Image source={require('../assets/images/adaptive-icon.png')} style={styles.learnIcon} />
            <View style={{ flex: 1 }}>
              <Text style={styles.learnCardTitle}>What are connections?</Text>
              <Text style={styles.learnCardText}>People you've met at Meetup events who you'd like to stay in touch with.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  topCard: {
    backgroundColor: '#EAF6F6',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    marginBottom: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  avatarSmall: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  title: {
    color: PURPLE,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  button: {
    backgroundColor: PURPLE,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 30,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: PURPLE,
    marginVertical: 16,
  },
  illustration: {
    width: 300,
    height: 120,
    marginBottom: 16,
  },
  noConnectionsTitle: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'center',
  },
  noConnectionsSubtitle: {
    color: PURPLE,
    fontSize: 14,
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  stepNum: {
    color: PURPLE,
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 28,
    height: 28,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 10,
  },
  stepText: {
    color: PURPLE,
    fontSize: 15,
    flex: 1,
    flexWrap: 'wrap',
  },
  learnBox: {
    width: '100%',
    marginBottom: 30,
  },
  learnTitle: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  learnCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 14,
  },
  learnIcon: {
    width: 48,
    height: 48,
    marginRight: 14,
    borderRadius: 8,
  },
  learnCardTitle: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  learnCardText: {
    color: PURPLE,
    fontSize: 13,
  },
});

// This component fetches and displays a list of posts from a placeholder API