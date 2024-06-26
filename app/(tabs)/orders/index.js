import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, doc, getDocs, query } from "firebase/firestore";
import { auth, db } from "../../../firebase";
import {
  Entypo,
  Ionicons,
  AntDesign,
  FontAwesome,
  Octicons,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const index = () => {
  const userUid = auth?.currentUser?.uid;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const ordersCollectionRef = collection(db, "users", userUid, "orders");

        const ordersQuery = query(ordersCollectionRef);

        const querySnapshot = await getDocs(ordersQuery);

        const fetchedOrders = [];

        querySnapshot.forEach((doc) => {
          fetchedOrders.push({ id: doc.id, ...doc.data() });
        });

        setOrders(fetchedOrders);
      } catch (error) {
        console.log("error", error);
      }

      fetchOrders();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.header_logo}
            source={require("../../../assets/logo.jpg")}
          />
        </View>
        <Octicons name="three-bars" size={24} color="white" />
      </View>

      <View style={styles.header_title}>
        <View style={styles.header_title_iconBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <Text>My Orders</Text>
      </View>

      <View>
        {orders?.map((item, index) => (
          <Pressable key={index} style={styles.order_button}>
            <View style={styles.order_button_container}>
              <View>
                <Text style={styles.order_textName}>Order Details</Text>
                <Text style={styles.order_itemText}>{item?.id}</Text>
              </View>
            </View>

            <View>
              <Text style={styles.order_button_paymentText}>Payment</Text>
              <Text style={[styles.order_button_paymentText, { marginTop: 4 }]}>
                Cash on delivery
              </Text>
            </View>

            <View style={styles.order_button_address}>
              <View>
                <Text style={styles.order_button_addressText}>
                  {item?.address.houseNo} {item?.address.landmark}
                </Text>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.order_button_address_pickupText}>
                    PICK UP
                  </Text>
                  <Text style={styles.order_button_address_pickupItem}>
                    {item?.pickuptime}
                  </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={styles.order_button_address_pickupText}>
                    DELIVERY
                  </Text>
                  <Text style={styles.order_button_address_pickupItem}>
                    {item?.deliveryTime}
                  </Text>
                </View>
                <View style={{ marginBottom: 20 }} />
              </View>

              <View style={{ alignItems: "center" }}>
                <View style={styles.iconOption}>
                  <MaterialCommunityIcons
                    name="note-outline"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={styles.iconOption_textName}>Order Summary</Text>
              </View>

              <View style={styles.iconOption}>
                <FontAwesome name="folder-open-o" size={24} color="black" />
              </View>
              <Text style={styles.iconOption_textName}>FeedBack</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    height: 200,
    backgroundColor: "#F4C535",
  },
  header_logo: {
    width: 200,
    height: 50,
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  header_title: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  header_title_iconBack: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#c0c0c0",
    justifyContent: "center",
    alignItems: "center",
  },
  order_textName: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  order_itemText: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
    marginTop: 3,
  },
  order_button: {
    marginVertical: 12,
    backgroundColor: "white",
    borderRadius: 7,
  },
  order_button_container: {
    backgroundColor: "#0066b2",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  order_button_paymentText: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  order_button_address: {
    backgroundColor: "white",
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  order_button_addressText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    color: "gray",
    width: 200,
  },
  order_button_address_pickupText: {
    fontSize: 13,
    fontWeight: "400",
  },
  order_button_address_pickupItem: {
    fontSize: 15,
    marginTop: 4,
  },
  iconOption: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F0F8FF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  iconOption_textName: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "500",
  },
});
