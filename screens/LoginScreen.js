import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

class LoginScreen extends Component{

    static navigationOptions = {
        header: null
    }

    render(){
        const { navigate } = this.props.navigation

        return(
            <View>
                <Text 
                    style={{fontSize: 27}}>
                    What is your name?
                </Text>
                <TextInput placeholder='Name: ' />
                <View style={{margin:7}} />
                <Button title="Login" 
                    onPress={()=> navigate("Home", {name: 'Waseem Koya'})}>
                </Button>     
            </View>
        );
    }

    login(){
        
    }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});