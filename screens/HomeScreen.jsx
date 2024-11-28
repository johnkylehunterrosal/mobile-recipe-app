import React, { useContext } from "react";
import { RecipeContext } from "../stores/RecipeDataContext";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import RecipeCard from "../components/RecipeCard";

const HomeScreen = () => {
  const { recipeLists } = useContext(RecipeContext);
  const pressViewCard = (recipe) => {
    console.debug(recipe.recipeName, "View")
  }
    if (!recipeLists || recipeLists.length === 0) {
        return (
          <View style={styles.centered}>
            <Text>No recipes available!</Text>
          </View>
        );
      }
  return (
    <ScrollView style={styles.container}>
      {recipeLists.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} onPress={() =>pressViewCard(recipe)}/>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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

export default HomeScreen;
