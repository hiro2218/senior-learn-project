
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

// Store the sample events in an array
const events = [
  { id: '1', title: 'Digital Marketing Workshop', status: 'published' },
  { id: '2', title: 'Photography Exhibition', status: 'draft' },
  { id: '3', title: 'Coffee Catchup', status: 'published' },
];

// Create the app screen
export default function App() {
  return (
    // Main container for the screen
    <View style={styles.container}>
      <Text style={styles.heading}>Event Manager</Text>

      {/* Display each event in the list */}
      <FlatList
        data={events}
        // Use each event's ID to identify it
        keyExtractor={(item) => item.id}
        // Decide how each event should look
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>

            {/* Use a different style for each status */}
            <Text
              style={
                item.status === 'published'
                  ? styles.published
                  : styles.draft
              }
            >
              Status: {item.status}
            </Text>
          </View>
        )}
      />

      {/* Set the phone's status bar style */}
      <StatusBar style="auto" />
    </View>
  );
}

// Set the styles for the screen elements
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  published: {
    color: 'green',
    marginTop: 5,
  },
  draft: {
    color: 'orange',
    marginTop: 5,
  },
});
