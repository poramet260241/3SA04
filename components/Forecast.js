import React from 'react';
import { Text, View} from 'react-native';
export default class Forecast extends React.Component {
    render() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.2)'
            }}>
                <Text style = {{fontSize: 50, color:'white', opacity: 0.6 }}>{this.props.main}</Text>
                <Text style = {{fontSize: 30, color:'white', opacity: 0.6 }}>{this.props.description}</Text>
                <Text style = {{fontSize: 30, color:'white', opacity: 0.6 }}>Temperature {this.props.temp} °C</Text>
                <Text style = {{fontSize: 30, color:'white', opacity: 0.6 }}>Humidity {this.props.humidity} %</Text>
            </View>
        );
    }
}