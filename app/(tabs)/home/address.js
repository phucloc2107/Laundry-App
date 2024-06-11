import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const address = () => {

  const handleBack = () => {

  }

  const handleNext = () => {
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </View>
        <Text style={styles.title}>Choose your address</Text>
        <View style={styles.headerIcon}>
            <Entypo name="cross" size={24} color='white' />
        </View>
      </View>

      <View style={styles.navContainer}>
        <Pressable style={styles.navButton}>
          <Ionicons name="chevron-back" size={24} color="white" />
        </Pressable>

        <Pressable style={styles.navIcon}>
          <Ionicons name="location" size={24} color="#0066b2" />
        </Pressable>

        <Pressable style={styles.navIcon}>
          <Entypo name="back-in-time" size={24} color="#0066b2" />
        </Pressable>

        <Pressable style={styles.navButton}>
          <Entypo name="chevron-right" size={24} color="white" />
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Pressable style={[styles.footer_button, {backgroundColor:'#d0d0d0'}]} onPress={handleBack}>
            <Text style={styles.footer_button_text}>Back</Text>
        </Pressable>

        <Pressable style={[styles.footer_button, {backgroundColor:'#0066b2'}]} onPress={handleNext}>
            <Text style={[styles.footer_button_text, {color:'white'}]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default address;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: "#F4C535",
    padding:10,
    flexDirection:'row',
    alignItems:'center',
    gap: 12,
  },
  headerIcon:{
    width:36,
    height:36,
    borderRadius:18,
    backgroundColor:'#A0A0A0',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    flex:1,
    fontSize:16,
    fontWeight:'500'
  },
  navContainer: {
    padding: 10,
    backgroundColor: "white",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  navButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#A0A0A0",
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  footer:{
    backgroundColor:'white',
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    gap:12,
    marginTop:'auto'
  },
  footer_button:{
    padding:15,
    borderRadius:10,
    flex:1
  },
  footer_button_text:{
    textAlign:'center',
    fontWeight:'500'
  }
});
