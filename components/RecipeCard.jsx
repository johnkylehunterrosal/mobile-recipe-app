import React, { useState, useContext } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RecipeContext } from "../stores/RecipeDataContext";

const RecipeCard = ({ recipe, onPress }) => {
  const { favourites, setFavourites } = useContext(RecipeContext);
  const isFavorite = favourites.some((fav) => fav.id === recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavourites(favourites.filter((fav) => fav.id !== recipe.id));
    } else {
      setFavourites([...favourites, recipe]);
    }
  };
  return (
    <TouchableOpacity key={recipe.id} style={styles.recipeCard} onPress={onPress}>
      <View style={styles.header}>
        <Text style={styles.recipeTitle}>{recipe.recipeName}</Text>
        <TouchableOpacity onPress={toggleFavorite}>
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={24}
            color={isFavorite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </View>
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
  );
};

const styles = StyleSheet.create({
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: "bold",
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

export default RecipeCard;
