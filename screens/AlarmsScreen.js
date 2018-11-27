import React from 'react';
import { Platform } from 'react-native';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';


export default class AlarmsScreen extends React.Component {
    alarms = [
        {
            name: 'Alarm1',
            date: new Date(),
        },
        {
            name: 'Alarm2',
            date: new Date('12/12/2009')
        }
    ];
    // list of alarms here
    constructor(props) { 
        // TO DO : Pass date from outside
        super(props);

    }

    static navigationOptions = {
        title: 'Available Alarms'
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.alarms}
                    renderItem={
                        ({item}) => 
                        <Text onPress = {() => this.props.navigation.navigate('Alarm', {date: item.date})}>
                        {item.name} - {item.date.toString()}
                        </Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#fff',
    },
});

