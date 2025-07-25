import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to Bella Hair Salon</Text>
        <Text style={styles.subtitle}>
          Your beauty, our passion! Book your appointment today.
        </Text>
        <Text style={styles.sectionTitle}>Our Services</Text>
        <View style={styles.servicesList}>
          <Text style={styles.serviceItem}>• Haircut & Styling</Text>
          <Text style={styles.serviceItem}>• Coloring & Highlights</Text>
          <Text style={styles.serviceItem}>• Hair Treatments</Text>
          <Text style={styles.serviceItem}>• Bridal & Event Styling</Text>
          <Text style={styles.serviceItem}>• Kids’ Haircuts</Text>
        </View>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contact}>
          Phone: <Text style={styles.contactHighlight}>(123) 456-7890</Text>{'\n'}
          Address: <Text style={styles.contactHighlight}>123 Main St, Your City</Text>{'\n'}
          Email: <Text style={styles.contactHighlight}>contact@bellahairsalon.com</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f8f4fc',
    flexGrow: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 24,
    shadowColor: '#a17fe0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7c3aed',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#444',
    marginBottom: 18,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#a17fe0',
    marginBottom: 8,
    marginTop: 12,
  },
  servicesList: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  serviceItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  contact: {
    fontSize: 16,
    color: '#444',
    marginTop: 4,
    lineHeight: 22,
  },
  contactHighlight: {
    color: '#7c3aed',
    fontWeight: 'bold',
  },
});