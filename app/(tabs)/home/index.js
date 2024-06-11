import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import {MaterialCommunityIcons, Entypo, Ionicons, Octicons} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View>
            <Image
              style={styles.logo}
              source={require("../../../assets/logo.jpg")}
            />
          </View>
          <Octicons name="three-bars" size={24} color="white" />
        </View>

        <View style={styles.headerBottom}>
          <View>
            <Text style={styles.greetingText}>Hello World!</Text>
            <Text style={styles.locationText}>Home | Vietnamese - 2107</Text>
          </View>

          <View style={styles.quickHelpContainer}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.quickHelpText}>QUICK HELP</Text>
          </View>
        </View>
      </View>

      <View style={styles.quickOrderContainer}>
        <View style={styles.quickOrderContent}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View>
            <Text style={styles.quickOrderTitle}>QUICK ORDER</Text>
            <Text style={styles.quickOrderDescription}>
              Book a pickup and a delivery option
            </Text>
            <Text>We will be at your doorstep on time</Text>

            <View style={styles.quickOrderActions}>
              <Pressable
                onPress={() => router.push("/home/address")}
                style={styles.bookNowButton}
              >
                <Text style={styles.bookNowText}>BOOK NOW</Text>
              </Pressable>
              <MaterialCommunityIcons name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardTitle}>
                Club <Text style={styles.cardTitleHighlight}>Ultimate</Text>
              </Text>
              <Text style={styles.cardDescription}>
                Put your laundry on Cruise Control
              </Text>
              <Text style={styles.cardDescription}>
                Subscribe and get the benefits
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Ionicons name="basket-outline" size={24} color="#034694" />
            <View>
              <Text style={styles.cardTitle}>
                Place Your <Text style={styles.cardTitleHighlight}>Order</Text>
              </Text>
              <Text style={styles.cardDescription}>
                select items from the catalogue below
              </Text>
              <Text style={styles.cardDescription}>
                and book your order. It's about time
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.priceContainer}>
        <View>
          <View style={styles.priceCard}>
            <View>
              <Text style={styles.priceTitle}>AFFORDABLE PRICES</Text>
              <Text style={styles.priceDescription}>Get our Price List</Text>
            </View>
            <Entypo name="triangle-right" size={18} color="#034694" />
          </View>
          <View style={[styles.priceCard, styles.priceCardMargin]}>
            <View>
              <Text style={styles.priceTitle}>AFFORDABLE PRICES</Text>
              <Text style={styles.priceDescription}>Get our Price List</Text>
            </View>
            <Entypo name="triangle-right" size={18} color="#034694" />
          </View>
        </View>

        <View style={styles.planCard}>
          <View>
            <Text style={styles.planTitle}>WHAT'S THE PLAN</Text>
            <Text style={styles.planSubtitle}>FOR THE PLANET</Text>
          </View>
          <Entypo name="triangle-right" size={18} color="#034694" />
        </View>
      </View>

      <View style={styles.nextAvailableContainer}>
        <View style={styles.nextAvailableContent}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Text>Next Available</Text>
        </View>
        <Text style={styles.nextAvailableText}>
          Order Within 15 mins to catch this pickUp Slot
        </Text>
        <Pressable style={styles.addItemsButton}>
          <Text>ADD ITEMS</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    padding: 12,
    height: 200,
    backgroundColor: "#F4C535",
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: "cover",
  },
  headerBottom: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  greetingText: {
    fontSize: 13,
    fontWeight: "bold",
  },
  locationText: {
    marginTop: 2,
    fontWeight: "bold",
    color: "white",
  },
  quickHelpContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  quickHelpText: {
    width: 60,
    fontSize: 12,
    color: "#0066b2",
    fontWeight: "600",
  },
  quickOrderContainer: {
    padding: 10,
    backgroundColor: "white",
    width: 340,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 10,
    position: "absolute",
    top: 150,
    left: "50%",
    transform: [{ translateX: -170 }],
  },
  quickOrderContent: {
    flexDirection: "row",
    gap: 10,
  },
  quickOrderTitle: {
    fontSize: 15,
    color: "#0066b2",
    fontWeight: "bold",
  },
  quickOrderDescription: {
    marginTop: 4,
  },
  quickOrderActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 7,
  },
  bookNowButton: {
    backgroundColor: "#F4C535",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
  },
  bookNowText: {
    fontSize: 13,
    fontWeight: "400",
  },
  cardContainer: {
    marginTop: 90,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  card: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  cardTitle: {
    color: "#FEBE10",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardTitleHighlight: {
    color: "#034694",
    fontSize: 15,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    fontWeight: "300",
    width: 130,
    marginTop: 10,
  },
  priceContainer: {
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  priceCard: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 10,
    borderRadius: 10,
  },
  priceCardMargin: {
    marginTop: 10,
  },
  priceTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#034694",
  },
  priceDescription: {
    marginTop: 4,
  },
  planCard: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  planTitle: {
    fontSize: 20,
    color: "#FEBE10",
    width: 100,
    fontWeight:'bold'
  },
  planSubtitle: {
    fontSize: 20,
    color: "#034694",
    width: 100,
    fontWeight: "bold",
  },
  nextAvailableContainer: {
    backgroundColor: "white",
    padding: 10,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 7,
  },
  nextAvailableContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  nextAvailableText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
    color: "#034694",
    width: 150,
  },
  addItemsButton: {
    borderColor: "#034694",
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.7,
    width: 130,
    marginTop: 8,
    borderRadius: 5,
  },
});