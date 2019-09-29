import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import Forecast from './Forecast'; 

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', 
                description: '-', 
                temp: 0, 
                humidity: 0
            }
        }
    }
    
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
            this.setState(
                {
                    forecast: {
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        humidity: json.main.humidity
                    }
                });
        })
        .catch((error) => {
            console.warn(error);
        });
    }
       
    componentDidMount = () => this.fetchData()


    render() {
    return (
    <View style={styles.container}>
    <ImageBackground source={require('../images/bg.jpeg')} style={styles.backdrop}>
    
    <Text style={{
        textAlign: "center",
        fontSize: 30,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.2)',
        opacity: 0.6
    }}>
        Zip code is {this.props.zipCode}.
    </Text>
    
    <Forecast {...this.state.forecast} />
    </ImageBackground>
    </View>
    );
    }
   }
   const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: { width: '100%', height: '100%'},
   });
