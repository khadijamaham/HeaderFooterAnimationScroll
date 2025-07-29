import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Feed from './componets/Feed';



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Ionicons name="menu-outline" size={30} color="#000" />
          <Text style={styles.headerText}>Feed</Text>
        </View>
        <Ionicons name="search-outline" size={30} color="#000" style={styles.headerRight} />
      </View>
      <View style={styles.content}>
       <Feed />
      </View>
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={30} color="#4B0082" />
        <Ionicons name="heart-outline" size={30} color="#4B0082" />
        <Ionicons name="chatbubble-outline" size={30} color="#4B0082" />
        <Ionicons name="person-outline" size={30} color="#4B0082" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 16, // Android shadow (higher value)
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  header: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 30,
    elevation: 1,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    paddingLeft: 10,
  },
});
