import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { RecipeContext } from "../stores/RecipeDataContext";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native";

const AddRecipeScreen = () => {
  const { recipe, setRecipe, setRecipeLists } = useContext(RecipeContext);
  const navigation = useNavigation();
  const [instruction, setInstruction] = useState({
    id: 1,
    description: "",
  });
  const [ingredient, setIngredient] = useState({
    id: 1,
    description: "",
  });
  const [errors, setErrors] = useState({}); // Validation errors

  const validateInputs = () => {
    let newErrors = {};
    if (!recipe.recipeName) newErrors.recipeName = "Recipe Name is required.";
    if (!recipe.imageUrl) newErrors.imageUrl = "Image URL is required.";
    if (!recipe.shortDescription) newErrors.shortDescription = "Short Description is required.";
    if (recipe.instructions.length === 0) newErrors.instructions = "At least one instruction is required.";
    if (recipe.ingredients.length === 0) newErrors.ingredients = "At least one ingredient is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleRecipeName = (e) => {
    const newRecipeName = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, recipeName: newRecipeName }));
    if (newRecipeName) setErrors((prev) => ({ ...prev, recipeName: null }));
  };

  const handleRecipeImg = (e) => {
    const newImgUrl = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, imageUrl: newImgUrl }));
    if (newImgUrl) setErrors((prev) => ({ ...prev, imageUrl: null }));
  };

  const handleShortDescription = (e) => {
    const newShortDescription = e.nativeEvent.text;
    setRecipe((prevState) => ({ ...prevState, shortDescription: newShortDescription }));
    if (newShortDescription) setErrors((prev) => ({ ...prev, shortDescription: null }));
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
    if (!instruction.description.trim()) {
      Alert.alert("Validation Error", "Instruction cannot be empty.");
      return;
    }
    setRecipe((prevState) => ({
      ...prevState,
      instructions: prevState.instructions.concat(instruction),
    }));
    setInstruction({ id: instruction.id + 1, description: "" });
    setErrors((prev) => ({ ...prev, instructions: null }));
  };

  const clickAddIngredient = () => {
    if (!ingredient.description.trim()) {
      Alert.alert("Validation Error", "Ingredient cannot be empty.");
      return;
    }
    setRecipe((prevState) => ({
      ...prevState,
      ingredients: prevState.ingredients.concat(ingredient),
    }));
    setIngredient({ id: ingredient.id + 1, description: "" });
    setErrors((prev) => ({ ...prev, ingredients: null }));
  };

  const clickSaveRecipe = () => {
    if (!validateInputs()) return;
    setRecipeLists((prevState) => [...prevState, recipe]);
    setRecipe({
      recipeName: "",
      imageUrl: "",
      shortDescription: "",
      instructions: [],
      ingredients: [],
    });
    setInstruction({ id: 1, description: "" });
    setIngredient({ id: 1, description: "" });
    navigation.navigate("Recipe Lists");
  };

  return (
    <ScrollView style={styles.container}>
      <Text>Recipe Name:</Text>
      <TextInput
        style={styles.inputWrapper}
        value={recipe.recipeName}
        onChange={handleRecipeName}
      />
      {errors.recipeName && <Text style={styles.errorText}>{errors.recipeName}</Text>}

      <Text>Image URL:</Text>
      <TextInput
        style={styles.inputWrapper}
        value={recipe.imageUrl}
        onChange={handleRecipeImg}
      />
      {errors.imageUrl && <Text style={styles.errorText}>{errors.imageUrl}</Text>}

      <Text>Short Description:</Text>
      <TextInput
        style={styles.inputWrapper}
        value={recipe.shortDescription}
        onChange={handleShortDescription}
      />
      {errors.shortDescription && <Text style={styles.errorText}>{errors.shortDescription}</Text>}

      <Text>Instructions:</Text>
      <TextInput
        style={styles.inputWrapper}
        multiline
        value={instruction.description}
        onChange={handleInstruction}
      />
      <TouchableOpacity style={styles.buttonPink} onPress={clickAddInstruction}>
        <Text style={styles.buttonText}>Add Instruction</Text>
      </TouchableOpacity>
      {errors.instructions && <Text style={styles.errorText}>{errors.instructions}</Text>}

      <Text>Ingredients:</Text>
      <TextInput
        style={styles.inputWrapper}
        multiline
        value={ingredient.description}
        onChange={handleIngredient}
      />
      <TouchableOpacity style={styles.buttonPink} onPress={clickAddIngredient}>
        <Text style={styles.buttonText}>Add Ingredient</Text>
      </TouchableOpacity>
      {errors.ingredients && <Text style={styles.errorText}>{errors.ingredients}</Text>}

      <TouchableOpacity style={styles.buttonPink} onPress={clickSaveRecipe}>
        <Text style={styles.buttonText}>Save Recipe</Text>
      </TouchableOpacity>
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
  buttonPink: {
    backgroundColor: "#ff69b4",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    fontSize: 14,
  },
});

export default AddRecipeScreen;
