import React from "react";
import { FlatList, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { styles } from "./styles";
import { CategoryItem } from "../../components/index";
import { selectCategory } from "../../store/actions";

const Search = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.data);
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate("Products", {
      categoryName: item.name,
      categoryColor: item.color,
    });
  };

  const renderItem = ({ item }) => {
    return <CategoryItem item={item} onSelected={onSelected} />;
  };
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>BUSCAR EN EL MAPA</Text>
      </TouchableOpacity>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};

export default Search;
