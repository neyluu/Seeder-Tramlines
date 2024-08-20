import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from 'react';

import styles from './styles';

export default function App() {
    const [seederWidth, onChangeNumber] = React.useState(''); //Entered seeder width
    const [tramlineWidth, setTramlineWidth] = useState(0);  //Entered tramline width
    const [tramlineCounter, setTramlineCounter] = useState(1); //Current tramline number
    const [tramlinesCount, setTramlinesCount] = useState(tramlineWidth / seederWidth) //Total tramlines count
    const [tramlineOnNumber, setTramlineOnNumber] = useState(1) //Number of tramline when it should be ON
    const [tramlineInfo, setTramlineInfo] = useState("Without tramline!") //Tramline information show under tramline counter
    const [isUserDataVisible, setIsUserDataVisible] = useState(true) //Visibility of user input data section
    const [isTramlineCounterVisible, setIsTramlineVisible] = useState(false) //Visibility of tramline counter screen

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
    
        if(! (!isNaN(localSeederWidth) && localSeederWidth > 0 && localTramlineWidth > 0))
        {
            console.log("Invalid seeder width or tramline width.")
            return
        }

        const localTramlinesCount = parseInt(localTramlineWidth / localSeederWidth)
        setTramlinesCount(localTramlinesCount)

        let newTramlineOnNumber = 1
        if (localTramlinesCount % 2 === 0) 
            {
            newTramlineOnNumber = Math.ceil(localTramlinesCount / 2) + 1
        } 
        else 
        {
            newTramlineOnNumber = Math.ceil(localTramlinesCount / 2)
        }

        setTramlineOnNumber(newTramlineOnNumber)
        console.log("Max tramlines: " + localTramlinesCount)
        console.log("ON: " + newTramlineOnNumber)
        
        setIsTramlineVisible(true)
        setIsUserDataVisible(false)
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

    const returnToMain = () => {
        setIsTramlineVisible(false)
        setIsUserDataVisible(true)
    }

    return (
        <View style={styles.container}>
            {isUserDataVisible && (
                <View style={styles.userDataContainer}>
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
                </View>
            )}

            {isTramlineCounterVisible && (
                <View style={styles.tramlineCounterContainer}>
                <Pressable style={styles.backBtn} onPress={returnToMain}>
                    <Text style={styles.backBtnText}> {'<'} Back</Text>
                </Pressable>

                <View style={styles.tramlineContainer}>
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
                </View>
            )}
           
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}