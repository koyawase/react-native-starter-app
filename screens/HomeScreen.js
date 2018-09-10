import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';



class HomeScreen extends Component{

    static navigationOptions = {
        headerLeft: null,
        title: 'Home'
    }

    test;

    constructor(props){
        super(props);      
        test = "testing";  
        
        this.state = {
            name: this.props.navigation.state.params.name
        };

        Alert.alert(
            'Welcome!',
            'Welcome to SWEN 325 App,\nDear '+this.state.name+'!',
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
          )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.heading}>Welcome to SWEN 325 App!</Text>
                <Text>You must be: {this.state.name}!</Text>
            </View>
        );
    }
    
    
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    heading: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
    }
});