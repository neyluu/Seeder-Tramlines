import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

export default function App() {
    const [number, onChangeNumber] = React.useState('');
    const [tramlineWidth, setTramlineWidth] = useState(0);
    const [tramlineCounter, setTramlineCounter] = useState(1);
    const [maxTramlineCounter, setMaxTramlineCounter] = useState(tramlineWidth / number)

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

    const substractTramline = () => {
        const newTramlineCounter = tramlineCounter - 1
        if(newTramlineCounter > 0)
        {
            setTramlineCounter(newTramlineCounter)
        }
    }
    const addTramline = () => {
        const newTramlineCounter = tramlineCounter + 1
        setTramlineCounter(newTramlineCounter)
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

            <Pressable style={styles.calculateTramlines}>
                <Text style={styles.calculateTramlinesText}>Calculate tramlines!</Text>
            </Pressable>

            <Text style={styles.label}>Tramline:</Text>
            <Text style={styles.tramlineCounter}>{tramlineCounter} / {maxTramlineCounter}</Text>
            <Text style={styles.tramlineCounterInfo}>Without tramline!</Text>
            <View style={styles.containerSeederWidth}>
                <Pressable style={styles.smallButton} onPress={substractTramline}>
                    <Text style={styles.smallButtonText}>-</Text>
                </Pressable>
                <Pressable style={styles.smallButton} onPress={addTramline}>
                    <Text style={styles.smallButtonText}>+</Text>
                </Pressable>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}