import { Button, Image, ScrollView, Text, TextInput } from 'react-native';
export default function TabLayout() {
  return (

    <ScrollView>
      
      
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' }}
        style={{ width: 50, height: 50, marginLeft: 30, marginTop: 30, marginBottom: 20 }}
      />
      <Text>Minhas Tarefas</Text>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, paddingLeft: 10 }}
      />
      <Button
      title='+'
      onPress={() => alert('Adicionar Tarefa')}
      />
    </ScrollView>
  )
}
