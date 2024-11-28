import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { RecipeContext } from "../stores/RecipeDataContext";
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from "react-native";

const AddRecipeScreen = () => {
  const { recipe, setRecipe, setRecipeLists } = useContext(RecipeContext);
  const navigation = useNavigation(); // Navigation hook
  const [instruction, setInstruction] = useState({
    id: 1,
    description: "",
  });
  const [ingredient, setIngredient] = useState({
    id: 1,
    description: "",
  });

  const handleRecipeName = (e) => {
    const newRecipeName = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, recipeName: newRecipeName }));
  };
  const handleRecipeImg = (e) => {
    const newImgUrl = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, imageUrl: newImgUrl }));
  };
  const handleShortDescription = (e) => {
    const newShortDescription = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, shortDescription: newShortDescription }));
  };
  const handleInstruction = (e) => {
    const newInstruction = e.nativeEvent.text;
    setInstruction((prevState) => ({ ...prevState, description: newInstruction }));
  };
  const handleIngredient = (e) => {
    const newIngredient = e.nativeEvent.text;
    setIngredient((prevState) => ({ ...prevState, description: newIngredient }));
  };
  const clickAddInstruction = () => {
    setRecipe((prevState) => ({
      ...prevState,
      instructions: prevState.instructions.concat(instruction),
    }));
    setInstruction({ id: instruction.id + 1, description: "" });
  };
  const clickAddIngredient = () => {
    setRecipe((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.concat(ingredient),
    }));
    setIngredient({ id: ingredient.id + 1, description: "" });
  };
  const clickSaveRecipe = () => {
    setRecipeLists((prevState) => [...prevState, recipe]);
    // Reset inputs
    setRecipe({
      recipeName: "",
      imageUrl: "",
      shortDescription: "",
      instructions: [],
      ingredients: [],
    });
    setInstruction({ id: 1, description: "" });
    setIngredient({ id: 1, description: "" });
    // Redirect to Home Screen
    navigation.navigate("Recipe Lists");
  };

  return (
    <ScrollView style={styles.container}>
      <Text>{JSON.stringify(recipe)}</Text>
      <Text>{JSON.stringify(instruction)}</Text>
      <Text>{JSON.stringify(ingredient)}</Text>
      <Text>Recipe Name:</Text>
      <TextInput style={styles.inputWrapper} value={recipe.recipeName} onChange={handleRecipeName} />

      <Text>Image URL:</Text>
      <TextInput style={styles.inputWrapper} value={recipe.imageUrl} onChange={handleRecipeImg} />

      <Text>Short Description:</Text>
      <TextInput style={styles.inputWrapper} value={recipe.shortDescription} onChange={handleShortDescription} />

      <Text>Instructions:</Text>
      <TextInput
        style={styles.inputWrapper}
        multiline
        value={instruction.description}
        onChange={handleInstruction}
      />
      <Button title="Add Instruction" onPress={clickAddInstruction} />

      <Text>Ingredients:</Text>
      <TextInput
        style={styles.inputWrapper}
        multiline
        value={ingredient.description}
        onChange={handleIngredient}
      />
      <Button title="Add Ingredient" onPress={clickAddIngredient} />

      <Button style={styles.buttonWrapper} title="Save Recipe" onPress={clickSaveRecipe} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputWrapper: {
    backgroundColor: "#f9f9f9",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonWrapper: {
    margin: 10,
  },
});

export default AddRecipeScreen;
