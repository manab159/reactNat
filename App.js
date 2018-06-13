/*import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppRegistry, Image, TextInput } from "react-native";
import { Button, Alert } from "react-native";
import {StackNavigator} from 'react-native-navigation';
export default class citycash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PhoneNumber: "",
      OTP: ""
    };  
  }
  
  check() {
    const { PhoneNumber, OTP } = this.state;
    //alert("PhoneNumber: " + PhoneNumber + " OTP: " + OTP);
    if(this.state.PhoneNumber=='123' && this.state.OTP=='123'){
      Alert.alert('Welcome to CityCash');
    }else{
      Alert.alert('Error Invalid UserName or Password')
    }
  }


class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}


class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}


  render() {
    let pic = {
      uri:
        "https://preview.ibb.co/npNdUd/Whats_App_Image_2018_06_12_at_12_50_25.jpg"
    };

    return (
      <View style={{ padding: 10 }}>
        <Image source={pic} style={{ width: 350, height: 110 }} />
        <Text
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          WELCOME TO CITYCASH
        </Text>
        <Text>PhoneNumber:</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Please Enter PhoneNumber"
          placeholderTextColor="#9a73ef"
          onChangeText={PhoneNumber =>
            this.setState({ PhoneNumber: PhoneNumber })}
        />
        <Text>OTP:</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Please Enter OTP"
          placeholderTextColor="#9a73ef"
          onChangeText={OTP => this.setState({ OTP: OTP })}
        />

        <Button onPress={() => this.check()} title="Submit" />

      </View>
    );
  }
}

// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Bananas);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});



*/



import navigator from './src/navigation/index';
export default class citycash extends Component {
  render(){
    return <navigator/>
  }
}