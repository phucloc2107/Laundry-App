import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Pressable, KeyboardAvoidingView } from 'react-native';
import React, {useState} from 'react';
import {Entypo,Ionicons, AntDesign, FontAwesome, Octicons, Feather,MaterialIcons} from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth,db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';

const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async() => {
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const useCredential = createUserWithEmailAndPassword(auth,email,password).then((useCredential) => {
        const user = useCredential._tokenResponse.email;

        const myUserUid = auth.currentUser.uid;

        sendEmailVerification(auth.currentUser).then(() => {
          console.log('Email vertification sent to the user');
        });

        setDoc(doc(db,'users',`${myUserUid}`),{
          email:email,
          password:password
        });
      });

      setEmail(''),
      setPassword('')
      router.replace('/login')
    } catch (error) {
      console.log('Error', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.header_container}>
                <Image
                    style={styles.header_image}
                    source={require('../../assets/logo.jpg')}
                />
            </View>
            <Text style={styles.header_title}>Wash Wizard</Text>
        </View>

        <KeyboardAvoidingView>
            <View style={{alignItems:'center'}}>
                <Text style={styles.textLogin}>Register to your Account</Text>
            </View>

            <View>
                {/* Text in put of Email */}
                <View style={styles.loginForm}>
                    <MaterialIcons  style={{marginLeft:8}} name='email' size={24} color='white' />
                    <TextInput 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={[styles.loginForm_textInput, {fontSize: email ? 17 : 17}]}
                        placeholder='Enter your email'
                        placeholderTextColor={'white'}
                    />
                </View>
                {/* Text in put of Password */}
                <View style={styles.loginForm}>
                    <MaterialIcons  style={{marginLeft:8}} name='lock' size={24} color='white' />
                    <TextInput 
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={[styles.loginForm_textInput, {fontSize: password ? 17 : 17}]}
                        placeholder='Enter your password'
                        placeholderTextColor={'white'}
                    />
                </View>
            </View>

            <Pressable style={styles.loginForm_buttonLogin} onPress={handleRegister}>
                <Text style={styles.loginForm_buttonLogin_textLogin}>Register</Text>
            </Pressable>

            <Pressable style={styles.loginForm_buttonSignUp} onPress={()=> router.replace('/login')}>
                <Text style={styles.loginForm_buttonSignUpText}>Already have an account? </Text>
                <Text style={[styles.loginForm_buttonSignUpText, {color:'#0066b2'}]}>Sign in</Text>
            </Pressable>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center'
},
header:{
    height:200,
    backgroundColor:'#F4C535',
    width:'100%',
},
header_container:{
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
},
header_image:{
    width:200,
    height:50,
    resizeMode:'cover'
},
header_title:{
    marginTop:20,
    textAlign:'center',
    fontSize:20,
    fontWeight:'black',
    color:'white'
},
textLogin:{
    fontSize:17,
    fontWeight:'bold',
    marginTop:25,
    color:'#F4C535'
},
loginForm:{
    flexDirection:'row',
    alignItems:'center',
    gap:5,
    backgroundColor:'#F4C535',
    marginTop:30
},
loginForm_textInput:{
    color:'white',
    width:300,
    marginVertical:10,
    paddingRight:10
},
loginForm_buttonLogin:{
    width:200,
    backgroundColor:'#febe10',
    borderRadius:6,
    marginHorizontal:'auto',
    padding:15,
    marginTop:50
},
loginForm_buttonLogin_textLogin:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold',
    color:'white'
},
loginForm_buttonSignUp:{
    marginTop:12, 
    flexDirection:'row',
    justifyContent:'center'
},
loginForm_buttonSignUpText:{
    textAlign:'center',
    fontSize:15
}
})