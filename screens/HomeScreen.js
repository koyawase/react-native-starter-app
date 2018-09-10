import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';



class HomeScreen extends Component{

    static navigationOptions = {
        headerLeft: null
    }

    test;

    constructor(props){
        super(props);      
        test = "testing";  
        
        this.state = {
            name: this.props.navigation.state.params.name
        };
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Text>{this.state.name}</Text>
            </View>
        );
    }

    
}

export default HomeScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});