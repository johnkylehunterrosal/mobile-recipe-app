import {useState} from 'react';
import {RecipeProvider} from "./stores/RecipeDataContext"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import MainLayout from './layout/MainLayout';
import 'react-native-gesture-handler';

const App = () => {
  const [recipeLists, setRecipeLists] = useState([])
  return (
    <>
      <StatusBar style="auto" />
      <RecipeProvider>
        <View style={styles.container}>
          <MainLayout recipeLists={recipeLists} setrecipeLists={setRecipeLists}/>
        </View>
      </RecipeProvider>
      
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding : 10,
  },
});

