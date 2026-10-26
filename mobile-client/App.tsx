import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

// Define the data fields for each class
interface ClassItem {
  id: number;
  title: string;
  description: string;
  instructorName: string;
  scheduledDateText: string;
  durationMinutes: number;
  status: string;
  isOnline: boolean;
  teamsMeetingLink?: string; // Optional field
  resources?: string; // Optional field
  locationAddress?: string; // Optional field
  capacity: number;
  enrolledCount: number;
}

export default function App() {
  // Store the list of classes received from the API
  const [classList, setClassList] = useState<ClassItem[]>([]);

  // Track whether the app is still loading data
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Load class data when the screen first opens
  useEffect(() => {
    loadClassesFromApi();
  }, []);

  // Get class data from the backend API
  const loadClassesFromApi = async () => {
    try {
      // Send a request to the .NET Web API
      const response = await fetch('http://192.168.0.51:5139/api/classes');

      // Report an error if the server request fails
      if (!response.ok) {
        throw new Error('Failed to fetch classes.');
      }

      // Convert the response into a list of classes
      const data: ClassItem[] = await response.json();

      // Save the classes so they appear on the screen
      setClassList(data);
    } catch (error) {
      // Show an error in the development console
      console.error('Error connecting to backend:', error);
    } finally {
      // Stop loading whether the request succeeds or fails
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display the screen heading */}
      <Text style={styles.heading}>SeniorLearn Classes</Text>

      {/* Show a loading indicator while fetching data */}
      {isLoading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0056b3" />
          <Text style={styles.loadingText}>Loading classes from server...</Text>
        </View>
      ) : (
        // Display the classes in a scrollable list
        <FlatList
          data={classList}
          // Use each class ID as its unique key
          keyExtractor={(item) => item.id.toString()}
          // Create a card for each class
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.instructor}>
                Instructor: {item.instructorName}
              </Text>
              <Text style={styles.description}>{item.description}</Text>

              {/* Display the class schedule and enrolment details */}
              <View style={styles.detailsBox}>
                <Text style={styles.detailText}>
                  📅 Date: {item.scheduledDateText}
                </Text>
                <Text style={styles.detailText}>
                  ⏱ Duration: {item.durationMinutes} mins
                </Text>
                <Text style={styles.detailText}>
                  👥 Enrolled: {item.enrolledCount} / {item.capacity}
                </Text>

                {/* Show an online meeting or a physical location */}
                {item.isOnline ? (
                  <Text style={styles.linkText}>💻 Online via MS Teams</Text>
                ) : (
                  <Text style={styles.locationText}>
                    📍 Location: {item.locationAddress}
                  </Text>
                )}
              </View>

              {/* Use different styles for scheduled classes and drafts */}
              <Text
                style={
                  item.status === 'Scheduled'
                    ? styles.published
                    : styles.draft
                }
              >
                Status: {item.status}
              </Text>
            </View>
          )}
        />
      )}

      {/* Adjust the status bar to match the app's appearance */}
      <StatusBar style="auto" />
    </View>
  );
}

// Define the appearance of the screen and its components
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
    color: '#0056b3',
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  instructor: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: '#444',
    marginBottom: 10,
  },
  detailsBox: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 8,
    marginBottom: 8,
  },
  detailText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 3,
  },
  locationText: {
    fontSize: 12,
    color: '#d9534f',
    fontWeight: '600',
    marginTop: 4,
  },
  linkText: {
    fontSize: 12,
    color: '#0275d8',
    fontWeight: '600',
    marginTop: 4,
  },
  published: {
    color: 'green',
    fontWeight: '600',
    marginTop: 5,
  },
  draft: {
    color: 'orange',
    fontWeight: '600',
    marginTop: 5,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
});
