import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.card}>
        <Text style={styles.kicker}>Shipwrecked Pools App</Text>
        <Text style={styles.title}>Sprint 01 Mobile Shell</Text>
        <Text style={styles.body}>
          This is a placeholder mobile shell for the single role-based app.
        </Text>
        <View style={styles.roles}>
          <Text style={styles.role}>Customer experience (planned)</Text>
          <Text style={styles.role}>Technician experience (planned)</Text>
          <Text style={styles.role}>Owner/Admin mobile views (planned)</Text>
        </View>
        <Text style={styles.notice}>No production features are implemented yet.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#07121F',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    borderRadius: 20,
    backgroundColor: '#10263B',
    borderWidth: 1,
    borderColor: '#2D4861',
    padding: 24,
    gap: 12,
  },
  kicker: {
    fontSize: 14,
    color: '#8AC4FF',
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: '700',
  },
  title: {
    fontSize: 28,
    color: '#F4F9FF',
    fontWeight: '700',
  },
  body: {
    fontSize: 16,
    color: '#CBDCED',
    lineHeight: 22,
  },
  roles: {
    gap: 6,
    marginTop: 6,
  },
  role: {
    fontSize: 15,
    color: '#E2EEF9',
  },
  notice: {
    marginTop: 10,
    fontSize: 13,
    color: '#8DB4D9',
  },
});
