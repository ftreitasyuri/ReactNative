import { ScrollView, View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function TabLayout() {
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Minhas Tarefas</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicionar nova tarefa"
        />
        <Button title="+" onPress={() => {}} />
      </View>
      <View style={styles.list}>
        <View style={styles.item}>
          <Text style={styles.itemText}>Comprar pão</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Estudar React Native</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemText}>Fazer exercícios</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f6f6f6',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 10,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    color:'#444',
  },
});