import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Entypo,Ionicons, AntDesign, FontAwesome, Octicons, Feather} from "@expo/vector-icons";

const DressItems = ({ item, selectedOption }) => {
  return (
    <View>
      <Pressable style={styles.buttonContainer}>
        <View>
          <Image 
            source={{uri: item?.image}}
            style={{width:40,height:40}}
          />
        </View>
        <View style={styles.buttonContain}>
          <Text style={styles.buttonContain_textName}>{item?.name}</Text>
          <Text style={styles.buttonContain_textPrice}>
            $ {selectedOption == 'Wash + Iron' ? item.price +20 
              : selectedOption == 'Steam Iron' ? item.price + 35
              : selectedOption == 'Dry Clean' ? item.price + 45
              : item.price}
          </Text>
        </View>
        <Pressable>
          <AntDesign name="pluscircleo" size={24} color='#89cff0' />
        </Pressable>
      </Pressable>
    </View>
  );
};

export default DressItems;

const styles = StyleSheet.create({
  buttonContainer:{
    padding:10,
    backgroundColor:"white",
    marginVertical:13,
    flexDirection:'row',
    gap:12,
    alignItems:'center'
  },
  buttonContain:{
    flex:1
  },
  buttonContain_textName:{
    fontSize:15,
    fontWeight:'500'
  },
  buttonContain_textPrice:{
    marginTop:3
  }
});
