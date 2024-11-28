
import {Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const RecipeCard = ({recipe, onPress}) => {
    
  return (
    <TouchableOpacity key={recipe.id} style={styles.recipeCard} onPress={onPress}>
        <Text style={styles.recipeTitle}>{recipe.recipeName}</Text>
        <Image source={{ uri: recipe.imageUrl }} style={styles.recipeImage} />
        <Text style={styles.description}>{recipe.shortDescription}</Text>

        <Text style={styles.sectionHeader}>Instructions:</Text>
        {recipe.instructions?.map((instruction) => (
        <Text key={instruction.id} style={styles.instruction}>
            {instruction.description}
        </Text>
        ))}
        <Text style={styles.sectionHeader}>Ingredients:</Text>
        {recipe.ingredients?.map((ingredient) => (
        <Text key={ingredient.id} style={styles.ingredient}>
            {ingredient.description}
        </Text>
        ))}
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    centered: {
      flex: 1,
      justifyContent: "center",
      alignrecipes: "center",
    },
    recipeCard: {
      marginBottom: 16,
      padding: 16,
      borderRadius: 8,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 3 },
      elevation: 2,
    },
    recipeTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 8,
    },
    recipeImage: {
      width: "100%",
      height: 200,
      borderRadius: 8,
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 12,
      color: "#666",
    },
    sectionHeader: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 12,
      marginBottom: 6,
    },
    instruction: {
      fontSize: 14,
      color: "#333",
      marginBottom: 4,
    },
    ingredient: {
      fontSize: 14,
      color: "#555",
      marginBottom: 4,
    },
  });

export default RecipeCard