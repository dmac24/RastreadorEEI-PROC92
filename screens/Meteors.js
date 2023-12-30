import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import axios from 'axios';

export default class MeteorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meteors: {},
        };
    }

    componentDidMount() {
        this.getMeteors()
    }

    getMeteors = () => {
        axios
            .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=1H0pGdQqpAkON8VNIt4sdl7la1H2LXFtwFLdnoL1")
            .then(response => {
                this.setState({ meteors: response.data.near_earth_objects })
                console.log(Object.keys(this.state.meteors));
            })
            .catch(error => {
                Alert.alert(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de meteoritos!</Text>
            </View>
        )
    }
}