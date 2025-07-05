import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, TextInput, FlatList, View as RNView } from 'react-native';
import { Text, View } from './Themed';

const DARK = '#181818';
const PURPLE = '#A259FF';
const CARD_BG = '#23232b';
const AVATAR_BORDER = '#fff';
const GRAY = '#888';
const DIVIDER = '#29293a';

// Mock message data
const mockMessages = [
  {
    id: '1',
    name: 'Jane Doe',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    lastMessage: 'Hey! Are you coming to the event tomorrow?',
    time: '2:45 PM',
  },
  {
    id: '2',
    name: 'John Smith',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    lastMessage: "Let's catch up soon!",
    time: '1:10 PM',
  },
  {
    id: '3',
    name: 'Emily Clark',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    lastMessage: 'Thanks for the info!',
    time: 'Yesterday',
  },
];

export default function MessagesContentInfo() {
  const [search, setSearch] = useState('');
  const filteredMessages = mockMessages.filter(
    m => m.name.toLowerCase().includes(search.toLowerCase()) || m.lastMessage.toLowerCase().includes(search.toLowerCase())
  );
  const showEmpty = filteredMessages.length === 0;

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarWrap}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search messages..."
          placeholderTextColor={GRAY}
          value={search}
          onChangeText={setSearch}
        />
      </View>
      {/* Message List or Empty State */}
      {showEmpty ? (
        <View style={styles.centerContent}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/9068/9068679.png',
            }}
            style={styles.illustration}
          />
          <Text style={styles.title}>No Messages Yet</Text>
          <Text style={styles.subtitle}>
            Your conversations will appear here. Connect with others and start chatting!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start a Conversation</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredMessages}
          keyExtractor={item => item.id}
          style={styles.list}
          contentContainerStyle={{ paddingBottom: 30, paddingTop: 0 }}
          ItemSeparatorComponent={() => <RNView style={styles.divider} />}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.messageCard} activeOpacity={0.8}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              <View style={styles.messageInfo}>
                <View style={styles.rowBetween}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
                <Text style={styles.lastMessage} numberOfLines={1}>{item.lastMessage}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  searchBarWrap: {
    width: '100%',
    paddingHorizontal: 18,
    marginBottom: 18,
    marginTop: 18,
    alignItems: 'center',
  },
  searchBar: {
    backgroundColor: CARD_BG,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    color: PURPLE,
    fontSize: 16,
    borderWidth: 1.5,
    borderColor: PURPLE,
    marginBottom: 2,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 1,
    width: '100%',
    maxWidth: 500,
  },
  list: {
    width: '100%',
    paddingHorizontal: 8,
    flex: 1,
    alignSelf: 'center',
    maxWidth: 600,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CARD_BG,
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 16,
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  messageInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    color: PURPLE,
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0.1,
  },
  lastMessage: {
    color: '#bdbdbd',
    fontSize: 15,
    marginTop: 2,
    letterSpacing: 0.05,
  },
  time: {
    color: '#bdbdbd',
    fontSize: 13,
    marginLeft: 8,
  },
  divider: {
    height: 10,
    backgroundColor: 'transparent',
  },
  centerContent: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    maxWidth: 500,
    alignSelf: 'center',
  },
  illustration: {
    width: 110,
    height: 110,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    color: PURPLE,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    color: PURPLE,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 28,
  },
  button: {
    backgroundColor: PURPLE,
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
    shadowColor: PURPLE,
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  topBar: {
    width: '100%',
    maxWidth: 600,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 24,
    marginBottom: 2,
    alignSelf: 'center',
  },
  topBarTitle: {
    color: PURPLE,
    fontSize: 26,
    fontWeight: 'bold',
  },
  archiveBtn: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: PURPLE,
  },
  archiveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
