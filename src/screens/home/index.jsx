import React from "react";
import { View, Text, FlatList } from "react-native";

import { SEARCH_DATA } from "../../constants/data/searchData";
import { HomeItem } from "../../components/index";
import { styles } from "./styles";

const Home = () => {
  const onRemove = () => {
    console.log("Remove");
  };

  const renderItem = ({ item }) => <HomeItem item={item} onRemove={onRemove} />;
  const keyExtractor = (item) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        data={SEARCH_DATA}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.list}
      />
    </View>
  );
};

export default Home;
