import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

class LoginScreen extends Component{

    static navigationOptions = {
        header: null
    }

    constructor(){
        super();
        this.state = {
            name: ''
        }
    }

    render(){
        const { navigate } = this.props.navigation

        return(
            <View>
                <Text 
                    style={{fontSize: 27}}>
                    What is your name?
                </Text>
                <TextInput
                    ref= {(el) => { this.username = el; }}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <View style={{margin:7}} />
                <Button title="Login" 
                    onPress={()=> navigate("Home", {name: this.state.username})}>
                </Button>     
            </View>
        );
    }

    _handlePress(event) {
        let username=this.state.username;
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