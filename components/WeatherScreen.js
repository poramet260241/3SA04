export default class WeatherScreen extends React.Component {
 static navigationOptions = ({navigation}) => {
 return {
 headerTitle: (<Text>Weather</Text>),
 }
 }
 render() {
 return (
 <Weather zipCode="90110"/>
 );
 }
 }