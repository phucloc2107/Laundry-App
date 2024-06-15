import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  Ionicons, AntDesign, FontAwesome, EvilIcons
} from "@expo/vector-icons";

const address = () => {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const handleNext = () => {
    setStep((prevStep) => {
      const nextStep = prevStep +1;
      console.log('next step ', nextStep);

      //check if next step is equal to 4
      if (nextStep == 5) {
        // Call the place order function
      }
      return nextStep;
    });
  };
  console.log(step);

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

      <View style={styles.mapContainer}>
        <ScrollView>
          {
            step == 1 && (
              <View>
                {/* Map over all the address */}
                <Pressable style={styles.map_iconButton}>
                  <AntDesign name="plus" size={24} color='black' />
                  <Pressable>
                    <Text style={{fontSize:16}}>Add address</Text>
                  </Pressable>
                </Pressable>

                {/* Map over the address */}
                <View>
                  <Pressable style={styles.map_addressInput}>
                    <View style={styles.map_addressInput_contain}>
                      <View style={styles.map_iconButton}>
                        <Ionicons name="location-outline" size={24} color='#0066b2' />
                        <Text style={{fontSize:17,fontWeight:'500'}}>Home</Text>
                      </View>
                      <FontAwesome name="flag" size={22} color='#0066b2' />
                    </View>

                    <Text style={styles.map_addressInput_textName}>
                      #21 Viet Nam in the world Viet Nam in the world Viet Nam in the world Viet Nam in the world {" "}
                    </Text>
                    <Text style={styles.map_addressInput_textTitle}>Ho Chi Minh city</Text>
                  </Pressable>
                </View>
              </View>
            )
          }

          {
            step == 2 && (
              <View>
                <View>
                  <EvilIcons name="location" size={24} color='black' />
                  <View>
                    <Text>Pick up slot</Text>
                  </View>
                </View>
              </View>
            )
          }
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <Pressable style={[styles.footer_button, {backgroundColor:'#d0d0d0'}]} onPress={handleBack} disabled={step===1}>
            <Text style={styles.footer_button_text}>Back</Text>
        </Pressable>

        <Pressable style={[styles.footer_button, {backgroundColor:'#0066b2'}]} onPress={handleNext}>
            <Text style={[styles.footer_button_text, {color:'white'}]}>{step == 4 ? 'Place Order' : 'Next'}</Text>
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
  },
  mapContainer:{
    backgroundColor:'#f0f8ff',
    flex:1,
    padding:10
  },
  map_iconButton:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  map_addressInput:{
    backgroundColor:'white',
    padding:10,
    marginVertical:10,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#0066b2'
  },
  map_addressInput_contain:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  map_addressInput_textName:{
    marginTop:10,
    fontSize:15,
    fontWeight:'500',
    width:'95%'
  },
  map_addressInput_textTitle:{
    marginTop:6,
    color:'gray',
    fontSize:15,
    fontWeight:'500'
  }
});
