import {StackNavigator} from 'react-native-navigation';
import React, { Component } from "react";
import home from '../home/index';
import login from '../login/index';
const RootStack = StackNavigator(
{

Home: { screen: home },
Login: { screen: login }


},
{ headerMode: "none" },
{ initialRouteName: "Home" }
);

export default class navigator extends React.Component {
render() {
	console.log("Nav Hello")
return <RootStack />;
}
}