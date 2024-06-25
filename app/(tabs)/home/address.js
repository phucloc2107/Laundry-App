import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Entypo,
  Ionicons, AntDesign, FontAwesome, EvilIcons
} from "@expo/vector-icons";
import moment from "moment";
import { useRouter } from "expo-router";

const address = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [currentDate, setCurrentDate] = useState(moment());
  const [deliveryDate, setDeliveryDate] = useState(moment());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(moment());

  const pickupTimeOptions = [
    {startTime: '6:30 AM', endTime: '9:00 AM'},
    {startTime: '9:00 AM', endTime: '11:30 AM'},
    {startTime: '5:00 PM', endTime: '7:30 PM'},
    {startTime: '7:30 PM', endTime: '10:00 PM'},
  ]

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

  const getNext6Days = () => {
    const nextDays = [];
    for (let i = 0; i < 5; i++) {
      const nextDate = moment(currentDate).add(i, 'days');

      nextDays.push(nextDate);
    }
    return nextDays;
  };
  const renderDateButtons = () => {
    const next6Days = getNext6Days();

    return next6Days?.map((date,index) =>(
      <TouchableOpacity 
      style={[styles.map_pickUp_selectButton,
        {
          backgroundColor:date.isSame(selectedDate,'day') ? '#0066b2' : 'white',
          borderColor: date.isSame(selectedDate,'day') ? 'transparent' :'#0066b2',
          borderWidth: date.isSame(selectedDate,'day') ? 0 : 1
        }
      ]} 
      onPress={() => setSelectedDate(date)}>
        <Text style={[
          styles.map_pickUp_selectButton_days, 
          {color: date.isSame(selectedDate, 'day') ? 'white' : 'black'}
          ]}>
            {date?.format('D')}
        </Text>
        <Text style={[
          styles.map_pickUp_selectButton_days, 
          {marginTop:3,color: date.isSame(selectedDate, 'day') ? 'white' : 'black'}
          ]}>
            {date?.format('ddd')}
        </Text>
      </TouchableOpacity>
    ))
  };

  const  renderPickUpTimeOptions = () => {
    if (selectedDate) {
      const isCurrentDate = selectedDate.isSame(currentDate, 'day');

      const currentTime = moment();

      return pickupTimeOptions.map((option, index) => {
        console.log(option);
        const startTime = moment(selectedDate.format('YYYY-MM-DD') + " " + option.startTime, 'YYYY-MM-DD LT');

        // Check if the time slot is past the current time
        const isTimeslotPast = isCurrentDate && startTime.isBefore(currentDate);

        return(
          <TouchableOpacity 
          onPress={() => {
            if (!isTimeslotPast) {
              setSelectedTime(option);
            }
          }}
          style={[styles.map_pickUpTimeOption_button,
            {
              opacity: isTimeslotPast ? 0.5 : 1,
              textDecorationLine: isTimeslotPast ? 'line-through' : 'none',
              backgroundColor: selectedTime && selectedTime.startTime === option.startTime && selectedTime.endTime === option.endTime ? '#0066b2' : 'white'
            }
            ]}>
            <Text style={{ 
              textAlign:'center', 
              color: selectedTime && selectedTime.startTime === option.startTime && selectedTime.endTime === option.endTime ? 'white' : 'black'
            }}>
              {`${option.startTime} - ${option.endTime}`}
            </Text>
          </TouchableOpacity>
        )
      })
    }
  }

  const getNextDays = () => {
    const nextDays = [];
    let startDate = moment().add(1, "days");

    if (moment(selectedDate).isSameOrBefore(moment().add(2, "days"), "day")) {
      startDate = moment(selectedDate).add(2, "days");
    }

    for (let i = 0; i < 5; i++) {
      const nextDate = moment(startDate).add(i, "days");
      nextDays.push(nextDate);
    }

    return nextDays;
  };

  const renderButton = () => {
    const next6Days = getNextDays();

    return next6Days.map((date,index) => (
      <TouchableOpacity 
        key={index}
        onPress={() => setDeliveryDate(date)}
        style={[styles.map_pickUp_selectButton,
        {
          backgroundColor:date.isSame(deliveryDate,'day') ? '#0066b2' : 'white',
          borderColor: date.isSame(deliveryDate,'day') ? 'transparent' :'#0066b2',
          borderWidth: date.isSame(deliveryDate,'day') ? 0 : 1
        }
      ]} 
      >
        <Text style={{marginTop:3,textAlign:'center',fontSize:13,color: date.isSame(deliveryDate, 'day') ? 'white' : 'black'}}>{date?.format("D")}</Text>
        <Text style={{marginTop:3,textAlign:'center',fontSize:13,color: date.isSame(deliveryDate, 'day') ? 'white' : 'black'}}>{date?.format("ddd")}</Text>
      </TouchableOpacity>
    ))
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

      <View style={styles.mapContainer}>
        <ScrollView>
          {/* address screen */}
          {
            step == 1 && (
              <View>
                {/* Map over all the address */}
                <Pressable style={styles.map_iconButton}>
                  <AntDesign name="plus" size={24} color='black' />
                  <Pressable onPress={() => router.push("/home/add")}>
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

          {/* Pick up screen */}
          {
            step == 2 && (
              <View style={styles.map_pickUp}>
                <View>
                  <EvilIcons name="location" size={24} color='black' />
                  <View style={styles.map_pickUp_contain}>
                    <Text style={{fontSize:16}}>Pick up slot</Text>
                    <Text style={styles.map_pickUp_dayTitle}>{currentDate.format('MMMM YYYY')}</Text>
                  </View>
                </View>

                {/* Pick up day option */}
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  {renderDateButtons()}
                </View>
                {/* Pick up time option */}
                <Text style={{marginHorizontal:10}}>Pickup Time Options</Text>
                <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                  {renderPickUpTimeOptions()}
                </View>
              </View>
            )
          }

          {/* Edit pick up screen */}{
            step == 3 && (
              <>  
                <View style={styles.map_edit}>
                  <View style={styles.map_edit_header}>
                    <View style={styles.map_edit_headerContainer}>
                      <EvilIcons name="location" size={24} color='black' />
                      <Text>Pick up slot</Text>
                    </View>
                    <AntDesign name="edit" size={24} color='black' />
                  </View>

                  <View style={styles.map_edit_contain}>
                    <View style={styles.map_edit_daySelected}>
                      <Text style={styles.map_edit_daySelectedTitle}>{selectedDate.format('D')}</Text>
                      <Text style={[styles.map_edit_daySelectedTitle, {marginTop:3}]}>{selectedDate.format('ddd')}</Text>
                    </View>

                    <View style={styles.map_edit_timeSelected}>
                      <Text style={styles.map_edit_timeSelectedTitle}>{`${selectedTime.startTime} - ${selectedTime.endTime}`}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.map_edit_footer}>
                  <View style={styles.map_edit_footerContain}>
                        {renderButton()}
                  </View>

                  <Text style={{marginHorizontal:10}}>Pickup Time Options</Text>
                  <View style={styles.map_edit_footerContain}>{renderPickUpTimeOptions()}</View>
                </View>
              </>
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
  },
  map_pickUp:{
    marginTop:10,
    backgroundColor:'white',
    padding:10,
    borderRadius:10
  },
  map_pickUp_contain:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  map_pickUp_dayTitle:{
    marginTop:4,
    fontWeight:'500',
    fontSize:16
  },
  map_pickUp_selectButton:{
    padding:10,
    margin:10,
    borderRadius:6,
    width:50,
   // backgroundColor:date.isSame(selectedDate,'day') ? '#0066b2' : 'white',
   // borderColor: date.isSame(selectedDate,'day') ? 'transparent' :'#0066b2',
   // borderWidth: date.isSame(selectedDate,'day') ? 0 : 1
  },
  map_pickUp_selectButton_days:{
    textAlign:'center',
    fontSize:13,
    // color: date.isSame(selectedDate,'day') ? 'white : 'black'
  },
  map_pickUpTimeOption_button:{
    padding:10,
    margin:10,
    borderRadius:5
  },
  map_edit:{
    backgroundColor:'white',
    marginTop:10,
    padding:10,
    borderRadius:10,
  },
  map_edit_header:{
    flexDirection:'row',
    alignItems:'center',
    gap:10,
    justifyContent:'space-between'
  },
  map_edit_headerContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10
  },
  map_edit_contain:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  map_edit_daySelected:{
    padding:10,
    margin:10,
    borderRadius:6,
    width:50,
    backgroundColor:'#0066b2'
  },
  map_edit_daySelectedTitle:{
    textAlign:'center',
    color:'white',
    fontSize:13
  },
  map_edit_timeSelected:{
    padding:10,
    borderRadius:5,
    backgroundColor:'#0066b2'
  },
  map_edit_timeSelectedTitle:{
    textAlign:'center',
    color:'white'
  },
  map_edit_footer:{
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
  },
  map_edit_footerContain:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
