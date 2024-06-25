import { Pressable, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import {Entypo,Ionicons, AntDesign, FontAwesome, Octicons, Feather} from "@expo/vector-icons";

const cart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart 
  ?.map((item) => item.item.price * item.item.quantity)
  .reduce((prev, curr) => prev + curr, 0);

  return (
    <ScrollView>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.header_title}>Basket Total</Text>

        <View>
          <Text style={styles.header_title}>$ {total}</Text>
          <Text style={styles.header_title}>for {cart.length} items</Text>
        </View>
      </View>

      <Text style={{padding:10}}>Cart Items</Text>

      {/* Cart items have selected */}
      <View style={{marginHorizontal:12}}>
        {cart?.map((item,index) => (
          <Pressable key={index} style={styles.cartItem_buttonContainer}>
            <View>
              <Image style={{width:40,height:40}} source={{uri:item?.item?.image}} />
            </View>

            <View style={{flex:1}}>
              <Text>{item?.item.name}</Text>
              <Text>{item?.item.price * item?.item.quantity}</Text>
            </View>

            <Pressable>
              <AntDesign name='pluscircleo' size={24} color='#89cff0' />
            </Pressable>
          </Pressable>
        ))}
      </View>

      {/* button check basket */}
      <View style={styles.buttonCheck_container}>
        <Pressable style={styles.buttonCheck_button}>
          <Text style={styles.buttonCheck_buttonName}>Empty Basket</Text>
        </Pressable>
        <Pressable style={[styles.buttonCheck_button, {backgroundColor:'#0066b2'}]}>
          <Text style={[styles.buttonCheck_buttonName, {color:'white'}]}>Checkout</Text>
        </Pressable>
      </View>
    </ScrollView>
  )
}

export default cart

const styles = StyleSheet.create({
  header:{
    backgroundColor:'#0066b2',
    padding:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header_title:{
    fontSize:16,
    fontWeight:'500',
    color:'white'
  },
  cartItem_buttonContainer:{
    padding:10,
    backgroundColor:'white',
    marginVertical:13,
    flexDirection:'row',
    gap:12,
    borderRadius:5
  },
  buttonCheck_container:{
    flexDirection:'row',
    padding:15,
    alignItems:'center',
    gap:12,
    marginTop:30
  },
  buttonCheck_button:{
    backgroundColor:'#d0d0d0',
    padding:15,
    borderRadius:10,
    flex:1
  },
  buttonCheck_buttonName:{
    textAlign:'center',
    fontWeight:'500'
  }
})