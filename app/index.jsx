import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

export default function App() {
    const [number, onChangeNumber] = React.useState('');
    const [tramlineWidth, setTramlineWidth] = useState(0);

    const substractTramlineWidth = () => {
        if(number == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = tramlineWidth - parseFloat(number)
            if(newTramlineWidth > 0)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Substracting tramline width: " + tramlineWidth)
        }
    }
    const addTramlineWidth = () => {
        if(number == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = tramlineWidth + parseFloat(number)
            if(newTramlineWidth < 100)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Adding tramline width: " + tramlineWidth)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Seeder width:
            </Text>

            <SafeAreaView>
                <TextInput 
                    style={styles.numberInputField}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder='0'
                    placeholderTextColor={'#555'}
                    keyboardType='numeric'
                />
            </SafeAreaView>

            <Text style={styles.label}>
                Tramline width:
            </Text>

            <View style={styles.containerSeederWidth}>
                <Pressable style={styles.smallButton} onPress={substractTramlineWidth}>
                    <Text style={styles.smallButtonText}>-</Text>
                </Pressable>
                <Text style={styles.seederWidthValue}>{tramlineWidth}</Text>
                <Pressable style={styles.smallButton} onPress={addTramlineWidth}>
                    <Text style={styles.smallButtonText}>+</Text>
                </Pressable>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}