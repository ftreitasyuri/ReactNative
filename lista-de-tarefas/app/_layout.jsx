import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';
export default function TabLayout() {
  return (

    <ScrollView style={style.mainContainer}>


      <View style={style.textContainer}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png' }}
          style={style.image}
        />
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>
      <View style={style.rowContainer}>
        <TextInput
          style={style.inputTask}
        />
        <Pressable
          onPress={() => Alert.alert('Task added!')}
          style={style.button}
        >
          <Text style={style.buttonText}>+</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

const style = StyleSheet.create({
  mainContainer: {
    // flex: 1,
    backgroundColor: colors.secondary,
    padding: 20,
    paddingTop: 50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,

  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%', // Add this to ensure it takes full width
    padding: 20,
    maxWidth: 220, // Adjust as needed for your layout
    
    // margin: 20,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  title:{
    border: 1,
    padding: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
    // flexShrink: 1,
    // flexWrap: 'wrap', // Allow text to wrap
    // maxWidth: 220,    // Adjust as needed for your layout
  },

  inputTask: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,

    margin: 20,
    flexGrow: 1
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },

})