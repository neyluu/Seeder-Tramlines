import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';

import styles from './styles';

export default function App() {
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.container}>
            <Text
                style={styles.label}
            >
                Seeder width:
            </Text>

            <SafeAreaView>
                <TextInput 
                    style={styles.numberInputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='0'
                    placeholderTextColor={'black'}
                    keyboardType='numeric'
                />
            </SafeAreaView>

            <Text
                style={styles.label}
            >
                Tramline width:
            </Text>

            <View style={styles.containerHorizontal}>
                <Button title="-" style={styles.smallButton}/>
                <Text>0</Text>
                <Button title="+"/>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   containerHorizontal: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 15,
//   },
//   label: {
//     fontSize: 30,
//     textAlign: 'center',
//     textAlignVertical: 'center',

//     width: 250,
//     height: 50,
//     marginBottom: 5,
//     backgroundColor: "#2c6b49",
   
//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: '#1e3b2c',
//   },
//   numberInputField: {
//     fontSize: 20,
//     color: 'black',

//     width: 250,
//     height: 50,
//     marginBottom: 30,
//     padding: 10,
//     backgroundColor: '#222',

//     borderRadius: 10,
//     borderWidth: 3,
//     borderColor: '#444',
//   }
// });
