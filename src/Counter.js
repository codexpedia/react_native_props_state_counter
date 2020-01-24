import React from 'react';
import { Button, StyleSheet, Text } from 'react-native';

// export default class Hello extends Component {
//     constructor(props){
//         super(props)
//     }
//     render() {
//         return(
//             <View>
//                 <Text h1>Hello {this.props.counter}!</Text>
//                 <Button onPress={this.props.handleOnClick} title='click me'/>
//             </View>
//         );
//     }
// }

export default function Counter(props) {
    return (
        <>
        <Text h1 style={styles.counter}>{props.counter}</Text>
        <Button onPress={props.handleOnClick} title='Add'/>
        </>
    );
}

const styles = StyleSheet.create({
    counter: {
        margin: 10,
        fontSize: 24,
    },
});
