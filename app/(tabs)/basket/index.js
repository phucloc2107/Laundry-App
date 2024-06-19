import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useSelector } from 'react-redux';

const index = () => {
  const  router = useRouter();
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.header_title}>Basket Total</Text>
        <View>
          <Text style={styles.header_title_item}>Rs 0</Text>
          <Text style={styles.header_title_item}>FOR 0 ITEMS</Text>
        </View>
      </View>

      <View style={styles.basket}>
        <Text style={styles.basket_title}>YOUR BASKET IS EMPTY</Text>
      </View>

      <Pressable style={styles.orderButton} onPress={() => router.push('/basket/select')}>
        <Text style={styles.orderButton_textName}>Place an Order</Text>
      </Pressable>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  header:{
    padding:10,
    backgroundColor:'#0066b2',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  header_title:{
    fontSize:16,
    fontWeight:'500',
    color:'white'
  },
  header_title_item:{
    color:'white',
    fontSize:17
  },
  basket:{
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    borderRadius:7,
    marginTop:20,
    marginHorizontal:10,
    height:200
  },
  basket_title:{
    fontSize:15,
    fontWeight:'600'
  },
  orderButton:{
    marginTop:50,
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    width:200,
    marginHorizontal:'auto',
    borderRadius:4,
    backgroundColor:'#0066b2'
  },
  orderButton_textName:{
    textAlign:'center',
    color:'white'
  }
})