import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { auth, db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";

const add = () => {
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const userUid = auth?.currentUser?.uid;

  const addAddress = async () => {
    try {
      const addressCollectionRef = collection(
        db,
        "users",
        userUid,
        "userAddresses"
      );

      const addressDocRef = await addDoc(addressCollectionRef, {
        name: name,
        houseNo: houseNo,
        landmark: landmark,
        postalCode: postalCode,
      });

      console.log('address added', addressDocRef.id)
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text style={styles.header_title}>Add a new address</Text>

        <TextInput
          placeholder="Vietnamese"
          placeholderTextColor={"black"}
          style={styles.form_textInput}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.form_textName}>Full name</Text>

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="enter your name"
            placeholderTextColor={"black"}
            style={styles.form_textInput}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.form_textName}>Flat, house, Building</Text>

          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            placeholder=""
            placeholderTextColor={"black"}
            style={styles.form_textInput}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.form_textName}>Landmark</Text>

          <TextInput
            value={landmark}
            onChangeText={(text) => setLandmark(text)}
            placeholder="eg near hospital"
            placeholderTextColor={"black"}
            style={styles.form_textInput}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={styles.form_textName}>Pincode</Text>

          <TextInput
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            placeholder="Enter Pincode"
            placeholderTextColor={"black"}
            style={styles.form_textInput}
          />
        </View>

        <Pressable style={styles.form_button} onPress={addAddress}>
          <Text>Add Address</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default add;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header_title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  form_textInput: {
    padding: 10,
    borderColor: "#d0d0d0",
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 5,
  },
  form_textName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  form_button: {
    backgroundColor: "#F4C535",
    padding: 19,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
