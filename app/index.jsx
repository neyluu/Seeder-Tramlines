import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

export default function App() {
    const [seederWidth, onChangeNumber] = React.useState('');
    const [tramlineWidth, setTramlineWidth] = useState(0);
    const [tramlineCounter, setTramlineCounter] = useState(1);
    const [tramlinesCount, setTramlinesCount] = useState(tramlineWidth / seederWidth)
    const [tramlineOnNumber, setTramlineOnNumber] = useState(1)
    const [tramlineInfo, setTramlineInfo] = useState("Without tramline!")

    const substractTramlineWidth = () => {
        if(seederWidth == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = tramlineWidth - parseFloat(seederWidth)
            if(newTramlineWidth > 0)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Substracting tramline width: " + tramlineWidth)
        }
    }
    const addTramlineWidth = () => {
        if(seederWidth == '')
        {
            console.log("Seeder Width is empty!")
        }
        else
        {
            const newTramlineWidth = tramlineWidth + parseFloat(seederWidth)
            if(newTramlineWidth < 100)
            {
                setTramlineWidth(newTramlineWidth)
            }
            console.log("Adding tramline width: " + tramlineWidth)
        }
    }

    const calculateTramlines = () => {
        const localSeederWidth = parseFloat(seederWidth);
        const localTramlineWidth = parseFloat(tramlineWidth);
    
        if (!isNaN(localSeederWidth) && localSeederWidth > 0 && localTramlineWidth > 0) {
            const localTramlinesCount = parseInt(localTramlineWidth / localSeederWidth);
            setTramlinesCount(localTramlinesCount);
    
            let newTramlineOnNumber = 1;
            if (localTramlinesCount % 2 === 0) {
                newTramlineOnNumber = Math.ceil(localTramlinesCount / 2) + 1;
            } else {
                newTramlineOnNumber = Math.ceil(localTramlinesCount / 2);
            }
    
            setTramlineOnNumber(newTramlineOnNumber);
            console.log("Max tramlines: " + localTramlinesCount);
            console.log("ON: " + newTramlineOnNumber);
        } else {
            console.log("Invalid seeder width or tramline width.");
        }
    }

    const substractTramline = () => {
        const newTramlineCounter = tramlineCounter - 1;
        if (newTramlineCounter > 0) {
            setTramlineCounter(newTramlineCounter);
        }
    
        checkForTramline(newTramlineCounter > 0 ? newTramlineCounter : tramlineCounter);
    };
    
    const addTramline = () => {
        const newTramlineCounter = tramlineCounter + 1;
        if (newTramlineCounter <= tramlinesCount) {
            setTramlineCounter(newTramlineCounter);
        } else {
            setTramlineCounter(1);
        }
    
        checkForTramline(newTramlineCounter <= tramlinesCount ? newTramlineCounter : 1);
    };
    
    const checkForTramline = (counter) => {
        if (counter === tramlineOnNumber) {
            console.log("TRAMLINE ON!" + counter)
            setTramlineInfo("TRAMLINE ON!")
        } else {
            console.log("TRAMLINE OFF!" + counter)
            setTramlineInfo("Without tramline!")
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
                    value={seederWidth}
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

            <Pressable style={styles.calculateTramlines} onPress={calculateTramlines}>
                <Text style={styles.calculateTramlinesText}>Calculate tramlines!</Text>
            </Pressable>

            
            <View style={styles.tramlineCounterContainer}>
                <Text style={styles.label}>Tramline:</Text>
                <Text style={styles.tramlineCounter}>{tramlineCounter} / {tramlinesCount}</Text>
                <Text style={styles.tramlineCounterInfo}>
                    {tramlineInfo}
                </Text>
                <View style={styles.containerSeederWidth}>
                    <Pressable style={styles.smallButton} onPress={substractTramline}>
                        <Text style={styles.smallButtonText}>-</Text>
                    </Pressable>
                    <Pressable style={styles.smallButton} onPress={addTramline}>
                        <Text style={styles.smallButtonText}>+</Text>
                    </Pressable>
                </View>
            </View>

            {/* <StatusBar style="auto" /> */}
        </View>
    );
}