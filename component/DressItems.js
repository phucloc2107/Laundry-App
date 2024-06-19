import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Entypo,Ionicons, AntDesign, FontAwesome, Octicons, Feather} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "../redux/reducer/CartReducer";

const DressItems = ({ item, selectedOption }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

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

        {cart.some((c) => c.item.id == item.id) ? (
           <Pressable style={styles.buttonDecrement}>
           <Pressable
             onPress={() => {
               dispatch(decrementQuantity(item));
             }}
           >
             <Text style={styles.buttonDecrement_text}> - </Text>
           </Pressable>

           <Pressable>
             <Text style={styles.textNumber}>
               {cart.find((c) => c.item.id === item.id)?.item.quantity}
             </Text>
           </Pressable>

           <Pressable
             onPress={() => {
               dispatch(incrementQuantity(item));
             }}
           >
             <Text style={styles.buttonIncrement_text}> + </Text>
           </Pressable>
         </Pressable>
        ) : (
        <Pressable onPress={() => {dispatch(addToCart({item, category:selectedOption}))}}>
          <AntDesign name="pluscircleo" size={24} color='#89cff0' />
        </Pressable>
        )}
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
  },
  buttonDecrement:{
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 5,
  },
  buttonDecrement_text:{
    fontSize: 25,
    paddingHorizontal: 6,
  },
  textNumber:{
    color: "black",
    paddingHorizontal: 6,
    fontSize: 15,
  },
  buttonIncrement_text:{
    fontSize: 17,
    color: "black",
    paddingHorizontal: 6,
  }
});
