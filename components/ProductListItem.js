import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity,} from "react-native";

import { Ionicons, FontAwesome } from "@expo/vector-icons";

class ProductListItem extends React.PureComponent {
  
  render() {
    let {
      id,
      image,
      title,
      navigation,
      price,
      rating,
    } = this.props;
    return (
      <View
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate("Detail", { id });
        }}
      >
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
          />
          <View style={{ flex: 1, justifyContent: "flex-start" }}>
            <View style={styles.infoContainer}>
              <Text
                style={[styles.title, { flexShrink: 1, overflow: "hidden" }]}
              >
                {title}
              </Text>

              <Ionicons
                name={wish ? "md-heart" : "md-heart-outline"}
                size={32}
                color= "red" 
                style={{ marginRight: 10 }}
                hitSlop={{ top: 40, left: 40, right: 40, bottom: 40 }}
                onPress={() => onWishTapped(id)}
              />
            </View>
            <View style={styles.rating}>
              <Text style={{ color: "#fff", marginRight: 4 }}>{rating || "NA"}</Text>
              <Ionicons name="md-star" size={12} color="#fff" /> 
            </View>
            <View style={styles.price}>
              <FontAwesome name="rupee" size={16} color="#000" />
              <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}>
                {price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "grey",
    marginRight: 15,
    marginLeft: 15,
    height: 150
  },
  image: {
    width: 120,
    height: 120
  },
  title: {
    color: "black",
    marginRight: 8,
    marginLeft: 8,
    fontSize: 12
  },
  infoContainer: {
    flexDirection: "row",
    paddingTop: 20,
    justifyContent:'space-between'
  },
  rating: {
    borderRadius: 5,
    backgroundColor: "green",  
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginLeft: 10
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 10,
    marginLeft: 10
  }
});
export default ProductListItem;
