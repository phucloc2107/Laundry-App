import { Pressable, ScrollView, StyleSheet, Text, View,Image } from "react-native";
import React, { useState } from "react";
import {Entypo,Ionicons, AntDesign, FontAwesome, Octicons, Feather} from "@expo/vector-icons";
import DressItems from '../../../component/DressItems';
import { useDispatch, useSelector } from "react-redux";

const select = () => {
  const menData = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/776/776623.png",
      name: "Pant Standard Pack",
      price: 75,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/2806/2806045.png",
      name: "Dhoti Standard Pack",
      price: 80,
    },

    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "Half T-Shirt Standard Pack",
      price: 60,
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/3531/3531849.png",
      name: "Shirt Standard Pack",
      price: 85,
    },
    {
      id: "8",
      image: "https://cdn-icons-png.flaticon.com/128/2405/2405604.png",
      name: "Men Shorts",
      price: 85,
    },
  ];
  const womenData = [
    {
      id: "10",
      image: "https://cdn-icons-png.flaticon.com/128/1348/1348247.png",
      name: "Women Jeans Pack",
      price: 75,
    },
    {
      id: "11",
      image: "https://cdn-icons-png.flaticon.com/128/6183/6183080.png",
      name: "Women Kurta",
      price: 80,
    },

    {
      id: "12",
      image: "https://cdn-icons-png.flaticon.com/128/5980/5980963.png",
      name: "Women Sweatshirt Pack",
      price: 60,
    },
    {
      id: "13",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Women Leggings Cloth",
      price: 85,
    },
    {
      id: "15",
      image: "https://cdn-icons-png.flaticon.com/128/8491/8491258.png",
      name: "Women Cloth Tops",
      price: 85,
    },
  ];
  const kidsData = [
    {
      id: "20",
      image: "https://cdn-icons-png.flaticon.com/128/6609/6609556.png",
      name: "Kids Dress",
      price: 75,
    },
    {
      id: "21",
      image: "https://cdn-icons-png.flaticon.com/128/1083/1083825.png",
      name: "Kids Frock Dress",
      price: 80,
    },

    {
      id: "22",
      image: "https://cdn-icons-png.flaticon.com/128/405/405130.png",
      name: "Kids T-Shirt Cloth",
      price: 60,
    },
    {
      id: "23",
      image: "https://cdn-icons-png.flaticon.com/128/5386/5386732.png",
      name: "Kids Sweater",
      price: 85,
    },
  ];
  const houseData = [
    {
      id: "30",
      image: "https://cdn-icons-png.flaticon.com/128/11543/11543825.png",
      name: "Home Apron",
      price: 75,
    },
    {
      id: "31",
      image: "https://cdn-icons-png.flaticon.com/128/5696/5696987.png",
      name: "Home Bath Towel",
      price: 80,
    },

    {
      id: "32",
      image: "https://cdn-icons-png.flaticon.com/128/1026/1026562.png",
      name: "Home Mats",
      price: 60,
    },
    {
      id: "33",
      image: "https://cdn-icons-png.flaticon.com/128/9096/9096915.png",
      name: "Home Pillow covers",
      price: 85,
    },
  ];
  const [option, setOption] = useState('Men');
  const [selectedOption, setSelectedOption] = useState('Wash + fold');
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart 
  ?.map((item) => item.item.price * item.item.quantity)
  .reduce((prev, curr) => prev + curr, 0);

  return (
    <>
    <ScrollView>
        <View style={styles.header}>
            <View style={styles.header_container}>
                <View style={styles.header_contain}>
                    <Pressable style={styles.header_iconBack}>
                        <Ionicons name="chevron-back-outline" size={24} color='black' />
                    </Pressable>
                    <Text style={{fontSize:17}}>Our Laundry list</Text>
                </View>

                <View style={styles.header_rightIcon}>
                    <Feather name="search" size={24} color='#0066b2' />
                    <Octicons name="three-bars" size={24} color='#0066b2' />
                </View>
            </View>
        </View>

      {/* menu button */}
        <View style={styles.menu}>
            <Pressable 
                onPress={() => setSelectedOption('Wash + fold')}
                style={[styles.washFold_button, {borderColor: selectedOption == 'Wash + fold' ? '#0066b2' : 'transparent'}]}
            >
                <Image 
                    source={require('../../../assets/washfold.png')}
                    style={styles.washFold_buttonImg}
                />
                <Text style={styles.washFold_buttonText}>Wash + fold</Text>
            </Pressable>

            <Pressable 
                onPress={() => setSelectedOption('Wash + Iron')}
                style={[styles.washFold_button, {borderColor: selectedOption == 'Wash + Iron' ? '#0066b2' : 'transparent'}]}
            >
                <Image 
                    source={require('../../../assets/washiron.png')}
                    style={styles.washFold_buttonImg}
                />
                <Text style={styles.washFold_buttonText}>Wash + Iron</Text>
            </Pressable>

            <Pressable 
                onPress={() => setSelectedOption('Steam Iron')}
                style={[styles.washFold_button, {borderColor: selectedOption == 'Steam Iron' ? '#0066b2' : 'transparent'}]}
            >
                <Image 
                    source={require('../../../assets/steamiron.png')}
                    style={styles.washFold_buttonImg}
                />
                <Text style={styles.washFold_buttonText}>Steam Iron</Text>
            </Pressable>

            <Pressable 
                onPress={() => setSelectedOption('Dry Clean')}
                style={[styles.washFold_button, {borderColor: selectedOption == 'Dry Clean' ? '#0066b2' : 'transparent'}]}
            >
                <Image 
                    source={require('../../../assets/dryclean.png')}
                    style={styles.washFold_buttonImg}
                />
                <Text style={styles.washFold_buttonText}>Dry Clean</Text>
            </Pressable>
        </View>

      {/* option button */}
        <View>
          <View style={styles.laundryType}>
            <Pressable 
              style={[styles.laundryType_button, {backgroundColor: option == 'Men' ? '#0066b2' : 'white'}]} 
              onPress={()=> setOption('Men')}
            >
              <Text style={[styles.laundryType_buttonText, {color:option == 'Men' ? 'white' : 'gray'}]}>Men</Text>
            </Pressable>

            <Pressable 
              style={[styles.laundryType_button, {backgroundColor: option == 'Women' ? '#0066b2' : 'white'}]}
              onPress={()=> setOption('Women')}
            >
              <Text style={[styles.laundryType_buttonText, {color:option == 'Women' ? 'white' : 'gray'}]}>Women</Text>
            </Pressable>

            <Pressable 
              style={[styles.laundryType_button, {backgroundColor: option == 'Kids' ? '#0066b2' : 'white'}]}
              onPress={()=> setOption('Kids')}
            >
              <Text style={[styles.laundryType_buttonText, {color:option == 'Kids' ? 'white' : 'gray'}]}>Kids</Text>
            </Pressable>

            <Pressable 
              style={[styles.laundryType_button, {backgroundColor: option == 'Houseold' ? '#0066b2' : 'white'}]}
              onPress={()=> setOption('Houseold')}
            >
              <Text style={[styles.laundryType_buttonText, {color:option == 'Houseold' ? 'white' : 'gray'}]}>Houseold</Text>
            </Pressable>
          </View>
        </View>

        {/* Men Option */}
        <View style={{marginHorizontal:10}}>
          {option == 'Men' && (
            <View>
              {menData?.map((item,index) => (
                <DressItems 
                  item={item}
                  selectedOption={selectedOption}
                  key={index}
                />
              ))}
            </View>
          )}
        </View>
        {/* Women Option */}
        <View style={{marginHorizontal:10}}>
          {option == 'Women' && (
            <View>
              {womenData?.map((item,index) => (
                <DressItems 
                 item={item}
                 selectedOption={selectedOption}
                 key={index}
                />
              ))}
            </View>
          )}
        </View>
        {/* Kids Option */}
        <View style={{marginHorizontal:10}}>
          {option == 'Kids' && (
            <View>
              {kidsData?.map((item,index) => (
                <DressItems 
                 item={item}
                 selectedOption={selectedOption}
                 key={index}
                />
              ))}
            </View>
          )}
        </View>
        {/* House Option */}
        <View style={{marginHorizontal:10}}>
          {option == 'Houseold' && (
            <View>
              {houseData?.map((item,index) => (
                <DressItems 
                 item={item}
                 selectedOption={selectedOption}
                 key={index}
                />
              ))}
            </View>
          )}
        </View>
    </ScrollView>
    
    {cart.length >  0 && (
      <Pressable style={styles.basketTotal_buttonContainer}>
        <View style={styles.basketTotal_container}>
          <View style={styles.basketTotal_icon}>
            <Ionicons name="basket-outline" size={24} color='black' />
          </View>

          <View style={{flex:1}}>
            <Text style={styles.basketTotal_title}>Basket Total $ {total}</Text>
            <Text style={[styles.basketTotal_title, {marginTop:3}]}>You have {cart.length} item saved in your basket</Text>
          </View>
          
          <Pressable style={styles.basketTotal_buttonView}>
            <Text>View</Text>
          </Pressable>
        </View>
      </Pressable>
    )}
    </>
  );
};

export default select;

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#F4C535',
        padding:12
    },
    header_container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header_contain:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    header_iconBack:{
        width:30,
        height:30,
        borderRadius:15,
        backgroundColor:'#a0a0a0',
        justifyContent:'center',
        alignItems:'center'
    },
    header_rightIcon:{
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    menu:{
        marginTop:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    washFold_button:{
        backgroundColor:'white',
        width:80,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        borderWidth:1
    },
    washFold_buttonImg:{
        width:40,
        height:40
    },
    washFold_buttonText:{
        textAlign:'center',
        fontSize:12,
        marginTop:5
    },
    laundryType:{
      marginVertical:20,
      flexDirection:'row',
      alignItems:'center',
      gap:10,
      justifyContent:'space-around'
    },
    laundryType_button:{
      padding:10,
      borderRadius:4
    },
    laundryType_buttonText:{
      fontSize:14,
      fontWeight:'500',
      textAlign:'center'
    },
    basketTotal_buttonContainer:{
      backgroundColor:'#e0e0e0',
      padding:10
    },
    basketTotal_container:{
      flexDirection:'row',
      alignItems:'center',
      gap:12
    },
    basketTotal_icon:{
      width:30,
      height:30,
      borderRadius:15,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
    },
    basketTotal_title:{
      fontSize:13,
      fontWeight:'500'
    },
    basketTotal_buttonView:{
      padding:10,
      backgroundColor:'white',
      borderRadius:4
    }
});
